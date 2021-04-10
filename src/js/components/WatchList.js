import {
  $,
  $all,
  renderSkeletonUI,
  clearElement,
  showSnackbar,
  showElement,
  hideElement,
  colorizeButton,
  uncolorizeButton,
  getVideoSaveButton,
} from '../utils.js';
import { SELECTORS, LOCAL_STORAGE_KEYS, ALERT_MESSAGE, MENU } from '../constants.js';
import { searchYoutubeById } from '../api.js';
import { getWatchListVideoTemplate } from '../templates.js';
import Observer from '../lib/Observer.js';

export default class WatchList extends Observer {
  constructor(store) {
    super();
    this.store = store;
    this.selector = SELECTORS.CLASS.WATCH_LIST;
    this.list = [];
    this.currentMenu = MENU.TO_WATCH;

    this.bindEvents();
    this.setScrollObservers();
  }

  setScrollObservers() {
    this.lazyLoadingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          targetElement.src = targetElement.dataset.videoUrl;
        }
      });
    });
  }

  renderSavedVideos(items) {
    const { watchList } = this.store.get();
    const resultTemplate = items
      .map((item) => {
        const { channelId, title, channelTitle, publishedAt, thumbnails } = item.snippet;
        const thumbnail = thumbnails.medium.url;
        const { id } = item;
        const currentVideo = watchList.find((item) => item.videoId === id);

        const dateString = new Date(publishedAt).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        const video = { id, title, channelId, channelTitle, dateString, thumbnail };
        const options = {
          isWatched: currentVideo.watched,
          isLiked: currentVideo.liked,
        };
        const videoTemplate = getWatchListVideoTemplate(video, options);

        return videoTemplate;
      })
      .join('');

    $(SELECTORS.CLASS.WATCH_LIST).insertAdjacentHTML('beforeend', resultTemplate);
  }

  async render() {
    const watchList = this.store.load(LOCAL_STORAGE_KEYS.WATCH_LIST);
    const watchListIds = watchList.map((item) => item.videoId);
    const toWatchList = watchList.filter((item) => !item.watched);

    if (!toWatchList || toWatchList.length <= 0) {
      showElement(SELECTORS.CLASS.NO_VIDEO);
      return;
    }

    renderSkeletonUI(SELECTORS.CLASS.WATCH_LIST, toWatchList.length);

    try {
      const { items } = await searchYoutubeById(watchListIds);

      this.list = watchList.map(({ videoId, watched }) => {
        const video = items.find(({ id }) => id === videoId);
        return { ...video, watched };
      });

      const toWatchVideos = this.list.filter((video) => !video.watched);

      clearElement(SELECTORS.CLASS.WATCH_LIST);
      this.renderSavedVideos(toWatchVideos);

      $all('iframe').forEach(($iframe) => {
        this.lazyLoadingObserver.observe($iframe);
      });
    } catch (error) {
      showSnackbar(error.message);
    }
  }

  async update() {
    try {
      const { watchList } = this.store.get();
      const currentIds = this.list.map((video) => video.id);
      const newVideo = watchList.find((item) => !currentIds.includes(item.videoId));

      if (newVideo) {
        const { items } = await searchYoutubeById([newVideo.videoId]);
        this.list = [...this.list, ...items];
      }

      const selectedVideoListIds = this.getSelectedVideoIds(watchList, this.currentMenu);
      this.showVideos(selectedVideoListIds);
    } catch (error) {
      console.error(error);
      showSnackbar(error.message);
    }
  }

  getSelectedVideoIds(watchList, currentMenu) {
    const selectedVideoList = watchList.filter((item) => {
      if (currentMenu === MENU.LIKED) {
        return item.liked;
      }
      if (currentMenu === MENU.WATCHED) {
        return item.watched;
      }
      return !item.watched;
    });

    return selectedVideoList.map((item) => item.videoId);
  }

  showVideos(selectedVideoListIds) {
    clearElement(SELECTORS.CLASS.WATCH_LIST);

    if (selectedVideoListIds.length) {
      hideElement(SELECTORS.CLASS.NO_VIDEO);
    } else {
      showElement(SELECTORS.CLASS.NO_VIDEO);
    }

    const renderingVideos = this.list.filter(({ id }) => selectedVideoListIds.includes(id));
    this.renderSavedVideos(renderingVideos);
  }

  handleClickVideoMenu(event) {
    const { target } = event;
    const { watchList } = this.store.get();

    if (target.classList.contains('delete')) {
      if (!window.confirm(ALERT_MESSAGE.CONFIRM_DELETE)) return;

      const targetId = target.dataset.videoId;
      const newWatchList = watchList.filter(({ videoId }) => videoId !== targetId);
      this.store.update(LOCAL_STORAGE_KEYS.WATCH_LIST, newWatchList);

      const $saveButton = getVideoSaveButton(targetId);
      if ($saveButton) {
        $saveButton.classList.remove(SELECTORS.STATUS.HIDDEN);
      }

      showSnackbar(ALERT_MESSAGE.VIDEO_DELETED);
    }

    if (target.classList.contains('watched')) {
      const targetId = target.dataset.videoId;
      const newWatchList = watchList.map((video) => {
        const nowVideo = { ...video };
        if (nowVideo.videoId === targetId) {
          nowVideo.watched = !nowVideo.watched;
          showSnackbar(
            nowVideo.watched ? ALERT_MESSAGE.VIDEO_MOVED_WATCHED_LIST : ALERT_MESSAGE.VIDEO_MOVED_TO_WATCH_LIST
          );
        }
        return nowVideo;
      });

      this.store.update(LOCAL_STORAGE_KEYS.WATCH_LIST, newWatchList);
    }

    if (target.classList.contains('liked')) {
      const targetId = target.dataset.videoId;
      const newWatchList = watchList.map((video) => {
        const nowVideo = { ...video };
        if (nowVideo.videoId === targetId) {
          nowVideo.liked = !nowVideo.liked;
          showSnackbar(nowVideo.liked ? ALERT_MESSAGE.VIDEO_LIKED : ALERT_MESSAGE.VIDEO_LIKE_CANCELED);
        }
        return nowVideo;
      });

      this.store.update(LOCAL_STORAGE_KEYS.WATCH_LIST, newWatchList);
    }
  }

  handleShowToWatchList() {
    this.currentMenu = MENU.TO_WATCH;
    this.changeActiveButton(this.currentMenu);

    const { watchList } = this.store.get();
    const selectedVideoListIds = this.getSelectedVideoIds(watchList, this.currentMenu);
    this.showVideos(selectedVideoListIds);
  }

  handleShowWatchedList() {
    this.currentMenu = MENU.WATCHED;
    this.changeActiveButton(this.currentMenu);

    const { watchList } = this.store.get();
    const selectedVideoListIds = this.getSelectedVideoIds(watchList, this.currentMenu);
    this.showVideos(selectedVideoListIds);
  }

  handleShowLikedList() {
    this.currentMenu = MENU.LIKED;
    this.changeActiveButton(this.currentMenu);

    const { watchList } = this.store.get();
    const selectedVideoListIds = this.getSelectedVideoIds(watchList, this.currentMenu);
    this.showVideos(selectedVideoListIds);
  }

  changeActiveButton(currentMenu) {
    uncolorizeButton(SELECTORS.CLASS.ACTIVE_BUTTONS);
    colorizeButton(`.${currentMenu}-list-button`);
  }

  bindEvents() {
    $(SELECTORS.CLASS.WATCH_LIST).addEventListener('click', this.handleClickVideoMenu.bind(this));
    $(SELECTORS.CLASS.TO_WATCH_LIST_BUTTON).addEventListener('click', this.handleShowToWatchList.bind(this));
    $(SELECTORS.CLASS.WATCHED_LIST_BUTTON).addEventListener('click', this.handleShowWatchedList.bind(this));
    $(SELECTORS.CLASS.LIKED_LIST_BUTTON).addEventListener('click', this.handleShowLikedList.bind(this));
  }
}