/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/api/APIUtil.js":
/*!*******************************!*\
  !*** ./src/js/api/APIUtil.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _utils_mockData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/mockData.js */ "./src/js/utils/mockData.js");




var APIUtil = {
  fetchData: function fetchData(requestURL) {
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, responseData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(requestURL);

            case 3:
              response = _context.sent;

              if (response.ok) {
                _context.next = 6;
                break;
              }

              throw new Error();

            case 6:
              _context.next = 8;
              return response.json();

            case 8:
              responseData = _context.sent;
              return _context.abrupt("return", responseData);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              throw new Error(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.SEARCH_ERROR);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }))();
  },
  createQueryString: function createQueryString(endPoint, params) {
    return endPoint + '?' + Object.entries(params).map(function (pair) {
      return pair[0] + '=' + pair[1];
    }).join('&');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIUtil);

/***/ }),

/***/ "./src/js/api/searchVideoAPICaller.js":
/*!********************************************!*\
  !*** ./src/js/api/searchVideoAPICaller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _APIUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./APIUtil.js */ "./src/js/api/APIUtil.js");




var searchVideoAPICaller = {
  endPoint: 'https://vigorous-boyd-74648a.netlify.app/youtube/v3/search',
  queryItems: {
    part: 'snippet',
    q: '',
    pageToken: '',
    maxResults: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.VIDEO_LIST.RENDER_SIZE,
    type: 'video',
    regionCode: 'KR'
  },
  getVideoListData: function getVideoListData(inputValue) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var requestURL, rawData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this.queryItems.q = inputValue;
              requestURL = _APIUtil_js__WEBPACK_IMPORTED_MODULE_3__["default"].createQueryString(_this.endPoint, _this.queryItems);
              _context.next = 5;
              return _APIUtil_js__WEBPACK_IMPORTED_MODULE_3__["default"].fetchData(requestURL);

            case 5:
              rawData = _context.sent;
              return _context.abrupt("return", _this.parsingVideoData(rawData));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  parsingVideoData: function parsingVideoData(rawData) {
    try {
      var isLastPage = this.checkLastPage(rawData);
      return rawData.items.map(function (item) {
        return {
          videoId: item.id.videoId,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          url: item.snippet.thumbnails.medium.url,
          channelTitle: item.snippet.channelTitle,
          isLastPage: isLastPage
        };
      });
    } catch (error) {
      throw new Error(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.DATA_PROCESSING_ERROR);
    }
  },
  checkLastPage: function checkLastPage(responseData) {
    this.queryItems.pageToken = responseData.nextPageToken || '';
    return !responseData.nextPageToken;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchVideoAPICaller);

/***/ }),

/***/ "./src/js/api/storeVideoAPICaller.js":
/*!*******************************************!*\
  !*** ./src/js/api/storeVideoAPICaller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _APIUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIUtil.js */ "./src/js/api/APIUtil.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");




var storeVideoAPICaller = {
  endPoint: 'https://vigorous-boyd-74648a.netlify.app/youtube/v3/videos',
  queryItems: {
    part: 'snippet',
    type: 'video',
    regionCode: 'KR',
    id: ''
  },
  getVideoListData: function getVideoListData(videoIdList) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var requestURL, rawData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this.queryItems.id = videoIdList.join(',');
              requestURL = _APIUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].createQueryString(_this.endPoint, _this.queryItems);
              _context.next = 5;
              return _APIUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].fetchData(requestURL);

            case 5:
              rawData = _context.sent;
              return _context.abrupt("return", _this.parsingVideoData(rawData));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  parsingVideoData: function parsingVideoData(rawData) {
    try {
      return rawData.items.map(function (item) {
        return {
          videoId: item.id.videoId,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          url: item.snippet.thumbnails.medium.url,
          channelTitle: item.snippet.channelTitle
        };
      });
    } catch (error) {
      throw new Error(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.DATA_PROCESSING_ERROR);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeVideoAPICaller);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _event_EventHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/EventHandler.js */ "./src/js/event/EventHandler.js");




var App = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function App() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

  new _event_EventHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
});



/***/ }),

/***/ "./src/js/event/EventHandler.js":
/*!**************************************!*\
  !*** ./src/js/event/EventHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _view_MainView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/MainView.js */ "./src/js/view/MainView.js");
/* harmony import */ var _view_ModalView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/ModalView.js */ "./src/js/view/ModalView.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/validator.js */ "./src/js/utils/validator.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _api_searchVideoAPICaller_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/searchVideoAPICaller.js */ "./src/js/api/searchVideoAPICaller.js");
/* harmony import */ var _api_storeVideoAPICaller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/storeVideoAPICaller.js */ "./src/js/api/storeVideoAPICaller.js");
/* harmony import */ var _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../storage/videoStore.js */ "./src/js/storage/videoStore.js");












var EventHandler = /*#__PURE__*/function () {
  function EventHandler() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventHandler);

    this.mainView = new _view_MainView_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.modalView = new _view_ModalView_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.setBindEvents();
    this.mainView.clickWillSeeButton();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventHandler, [{
    key: "setBindEvents",
    value: function setBindEvents() {
      this.mainView.bindModalOpenButton(this.onModalOpenButtonClick.bind(this));
      this.mainView.bindStoreTypeButtons(this.onStoreTypeButtonsClick.bind(this));
      this.mainView.bindVideoItemButtons(this.onVideoItemButtonsClick.bind(this));
      this.modalView.bindOnClickSearchButton(this.onSearchButtonClick.bind(this));
      this.modalView.bindOnClickDimmer(this.onDimmerClick.bind(this));
      this.modalView.bindVideoListScroll(this.onVideoListScroll.bind(this));
      this.modalView.bindVideoListClickStoreButton(this.onStoreButtonClick.bind(this));
    }
  }, {
    key: "onModalOpenButtonClick",
    value: function onModalOpenButtonClick() {
      this.modalView.showModal();
    }
  }, {
    key: "onDimmerClick",
    value: function onDimmerClick() {
      this.modalView.hideModal();
      this.onStoreTypeButtonsClick(this.mainView.getCurrentStoreType());
    }
  }, {
    key: "onStoreButtonClick",
    value: function onStoreButtonClick(videoId) {
      try {
        _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].storeVideoWithVideoId(videoId);
      } catch (error) {
        alert(error.message);
      }
    }
  }, {
    key: "onSearchButtonClick",
    value: function () {
      var _onSearchButtonClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(inputValue) {
        var videoListData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _utils_validator_js__WEBPACK_IMPORTED_MODULE_6__["default"].checkSearchInput(inputValue);
                this.modalView.resetVideoList();
                this.modalView.showLoadingVideoItems();
                _context.next = 6;
                return _api_searchVideoAPICaller_js__WEBPACK_IMPORTED_MODULE_8__["default"].getVideoListData(inputValue);

              case 6:
                videoListData = _context.sent;
                this.modalView.updateVideoItems(videoListData);
                this.modalView.controlScrollSearch(!videoListData[0].isLastPage);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                this.modalView.showNoResult();
                alert(_context.t0.message);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function onSearchButtonClick(_x) {
        return _onSearchButtonClick.apply(this, arguments);
      }

      return onSearchButtonClick;
    }()
  }, {
    key: "onVideoListScroll",
    value: function () {
      var _onVideoListScroll = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(inputValue) {
        var videoListData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.modalView.showLoadingVideoItems();
                _context2.next = 4;
                return _api_searchVideoAPICaller_js__WEBPACK_IMPORTED_MODULE_8__["default"].getVideoListData(inputValue);

              case 4:
                videoListData = _context2.sent;
                this.modalView.updateVideoItems(videoListData);
                this.modalView.controlScrollSearch(!videoListData[0].isLastPage);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                alert(_context2.t0.message);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function onVideoListScroll(_x2) {
        return _onVideoListScroll.apply(this, arguments);
      }

      return onVideoListScroll;
    }()
  }, {
    key: "onStoreTypeButtonsClick",
    value: function onStoreTypeButtonsClick(storeType) {
      var videoList = _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].getVideoListWith(storeType);

      if (videoList.length === 0) {
        this.mainView.showEmptyStorage(true);
        return;
      }

      this.mainView.showEmptyStorage(false);
      this.showStoredVideoItems(videoList);
    }
  }, {
    key: "showStoredVideoItems",
    value: function () {
      var _showStoredVideoItems = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(videoList) {
        var videoIdList, renderedVideoIdList, willRequestVideoIdList, videoData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                videoIdList = videoList.map(function (video) {
                  return video.id;
                });
                renderedVideoIdList = this.mainView.getRenderedVideoIdList();
                willRequestVideoIdList = videoIdList.filter(function (id) {
                  return !renderedVideoIdList.includes(id);
                });
                this.mainView.showSkeletonVideoList(willRequestVideoIdList);
                _context3.next = 6;
                return _api_storeVideoAPICaller_js__WEBPACK_IMPORTED_MODULE_9__["default"].getVideoListData(willRequestVideoIdList);

              case 6:
                videoData = _context3.sent;
                this.mainView.updateVideoItems(videoData);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function showStoredVideoItems(_x3) {
        return _showStoredVideoItems.apply(this, arguments);
      }

      return showStoredVideoItems;
    }()
  }, {
    key: "onVideoItemButtonsClick",
    value: function onVideoItemButtonsClick(buttonId, videoId, storeType) {
      switch (buttonId) {
        case _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.DOM_STRING.CHECK_WILL_SEE_BUTTON:
          _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].changeVideoStoreType(videoId, storeType);
          break;

        case _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.DOM_STRING.CHECK_SAW_BUTTON:
          _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].changeVideoStoreType(videoId, storeType);
          break;

        case _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.DOM_STRING.DELETE_STORE_BUTTON:
          _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].deleteVideoWithId(videoId);
          this.onStoreTypeButtonsClick(this.mainView.getCurrentStoreType());
      }
    }
  }]);

  return EventHandler;
}();



/***/ }),

/***/ "./src/js/storage/storageUtil.js":
/*!***************************************!*\
  !*** ./src/js/storage/storageUtil.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var storageUtil = {
  getItem: function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setItem: function setItem(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageUtil);

/***/ }),

/***/ "./src/js/storage/videoStore.js":
/*!**************************************!*\
  !*** ./src/js/storage/videoStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validator.js */ "./src/js/utils/validator.js");
/* harmony import */ var _storageUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageUtil.js */ "./src/js/storage/storageUtil.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");



var videoStore = {
  KEY: {
    STORED_VIDEO_LIST: 'storedVideoList'
  },
  storeVideoWithVideoId: function storeVideoWithVideoId(videoId) {
    try {
      var storedVideoList = this.getStoredVideoList();
      _utils_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkStoredVideoListOverMaxLength(storedVideoList);
      storedVideoList.push({
        id: videoId,
        storeType: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.STORE.WILL_SEE
      });
      _storageUtil_js__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(this.KEY.STORED_VIDEO_LIST, storedVideoList);
    } catch (error) {
      throw error;
    }
  },
  getStoredVideoList: function getStoredVideoList() {
    var _storageUtil$getItem;

    return (_storageUtil$getItem = _storageUtil_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(this.KEY.STORED_VIDEO_LIST)) !== null && _storageUtil$getItem !== void 0 ? _storageUtil$getItem : [];
  },
  hasVideoId: function hasVideoId(videoId) {
    var storedVideoList = this.getStoredVideoList();
    return storedVideoList.some(function (storedVideo) {
      return storedVideo.id === videoId;
    });
  },
  getVideoListWith: function getVideoListWith(storeType) {
    var storedVideoList = this.getStoredVideoList();
    return storedVideoList.filter(function (videoData) {
      return videoData.storeType === storeType;
    });
  },
  changeVideoStoreType: function changeVideoStoreType(videoId, storeType) {
    var storedVideoList = this.getStoredVideoList();
    var changedStoreType = storeType === _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.STORE.WILL_SEE ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.STORE.SAW : _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.STORE.WILL_SEE;
    storedVideoList.find(function (video) {
      return video.id === videoId;
    }).storeType = changedStoreType;
    _storageUtil_js__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(this.KEY.STORED_VIDEO_LIST, storedVideoList);
  },
  deleteVideoWithId: function deleteVideoWithId(videoId) {
    var storedVideoList = videoStore.getStoredVideoList();
    var targetIndex = storedVideoList.findIndex(function (video) {
      return video.id === videoId;
    });
    storedVideoList.splice(targetIndex, 1);
    _storageUtil_js__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(this.KEY.STORED_VIDEO_LIST, storedVideoList);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoStore);

/***/ }),

/***/ "./src/js/utils/common.js":
/*!********************************!*\
  !*** ./src/js/utils/common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
var $ = function $(selector) {
  return document.querySelector(selector);
};
var throttle = function () {
  var throttle = null;
  return function (callback) {
    if (!throttle) {
      throttle = setTimeout(function () {
        throttle = null;
        callback();
      }, 200);
    }
  };
}();

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_STRING": () => (/* binding */ DOM_STRING),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "KEY_CODE": () => (/* binding */ KEY_CODE),
/* harmony export */   "SCROLL": () => (/* binding */ SCROLL),
/* harmony export */   "SELECTOR": () => (/* binding */ SELECTOR),
/* harmony export */   "STORE": () => (/* binding */ STORE),
/* harmony export */   "VIDEO_LIST": () => (/* binding */ VIDEO_LIST)
/* harmony export */ });
var SELECTOR = {
  MODAL_CONTAINER: '.modal-container',
  DIMMER: '.dimmer',
  VIDEO_LIST: '.video-list',
  SEARCH_BUTTOM: '.search-input__search-button',
  SEARCH_INPUT: '.search-input__keyword',
  SEARCH_NO_RESULT: '.search-result.search-result--no-result',
  MODAL_OPEN_BUTTON: '#search-modal-button',
  VIDEO_ITEM: '.video-item',
  WILL_SEE_BUTTON: '#will-see-button',
  SAW_BUTTON: '#saw-button',
  STORE_BUTTONS_COTAINER: '.store-buttons-container',
  WILL_SEE_VIDEO_LIST: '#will-see-video-list',
  SAW_VIDEO_LIST: '#saw-video-list',
  EMPTY_CONTAINER: '#empty-container'
};
var DOM_STRING = {
  HIDE: 'hide',
  VIDEO_ITEM: 'video-item',
  VIDEO_ITEM_SAVE_BUTTON: 'video-item__save-button',
  CHECK_SAW_BUTTON: 'check-saw-button',
  CHECK_WILL_SEE_BUTTON: 'check-will-see-button',
  DELETE_STORE_BUTTON: 'delete-store-button',
  SAW_BUTTON: 'saw-button',
  NAV_BUTTON_CLICKED: 'nav__button-clicked'
};
var ERROR_MESSAGE = {
  DATA_PROCESSING_ERROR: '데이터 처리 중 오류가 발생했습니다.',
  SEARCH_ERROR: '검색 중 오류가 발생했습니다.',
  OVER_MAX_STORE_LENGTH: '최대 100개까지만 저장 가능합니다.',
  EMPTY_INPUT: '입력된 글자가 없습니다. 한 글자 이상의 검색어를 입력해주세요.'
};
var STORE = {
  VIDEO_LIST_MAX_LENGTH: 100,
  WILL_SEE: 'willSee',
  SAW: 'saw'
};
var VIDEO_LIST = {
  RENDER_SIZE: 10
};
var SCROLL = {
  ADDITIONAL_OFFSET: 300
};
var KEY_CODE = {
  ENTER: 13
};

/***/ }),

/***/ "./src/js/utils/mockData.js":
/*!**********************************!*\
  !*** ./src/js/utils/mockData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorData": () => (/* binding */ errorData),
/* harmony export */   "mockData": () => (/* binding */ mockData),
/* harmony export */   "parseData": () => (/* binding */ parseData),
/* harmony export */   "videoData": () => (/* binding */ videoData)
/* harmony export */ });
var mockData = [{
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 0
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 1
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 2
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 3
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 4
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 5
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 6
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 7
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 8
}, {
  url: 'https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ',
  title: '[Playlist] 너무 좋은데 괜찮으시겠어요?',
  channelName: 'essential;',
  publishedDate: '2022년 3월 2일',
  saveButton: '⬇ 저장',
  id: 9
}];
var videoData = {
  kind: 'youtube#searchListResponse',
  etag: 'lQ-VEF9lgCYrZErL9nEFN1I1-_U',
  nextPageToken: 'CAoQAA',
  regionCode: 'KR',
  pageInfo: {
    totalResults: 604,
    resultsPerPage: 10
  },
  items: [{
    kind: 'youtube#searchResult',
    etag: 'utwze-P6EJ5x-0heE9punV2ZcGQ',
    id: {
      kind: 'youtube#video',
      videoId: 'mQhgF7RoUCA'
    },
    snippet: {
      publishedAt: '2021-10-14T19:06:42Z',
      channelId: 'UCGmYJSYFM19VgwEQJsY12Dg',
      title: '우아한테크코스 4기 온라인 설명회',
      description: '2022년 2월에서 11월까지 10개월 과정으로 진행하는 우아한테크코스 4기에 대한 설명회이다. 설명회는 우아한테크코스 교육 ...',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/mQhgF7RoUCA/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/mQhgF7RoUCA/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/mQhgF7RoUCA/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '박재성',
      liveBroadcastContent: 'none',
      publishTime: '2021-10-14T19:06:42Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: '5ArA6FxNCDie_zvTs0C_J-heank',
    id: {
      kind: 'youtube#video',
      videoId: 'ytt37XkcHTU'
    },
    snippet: {
      publishedAt: '2021-06-03T01:41:57Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 🎬vlog] Ep.4 그루밍의 하루 ☀️',
      description: '우테코로그 Ep.4 그루밍의 하루 ☀️ 돌아온 우테코 vlog의 첫 번째 주자는 3기 크루 중 가장 밝은 텐션을 자랑하는 그루밍입니다 : ) 잘 ...',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/ytt37XkcHTU/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ytt37XkcHTU/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/ytt37XkcHTU/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-06-03T01:41:57Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'MgTCXMypeUICimjHgQasrMiz1Ig',
    id: {
      kind: 'youtube#video',
      videoId: 'nhQRaRgV19o'
    },
    snippet: {
      publishedAt: '2021-09-09T04:04:59Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 인터뷰 챌린지] 🎙 코치에게 묻다! 코테뷰 #4 포비',
      description: "우아한테크코스의 크루들이 진행하는 인터뷰 챌린지입니다.   이번 우테코 인터뷰 챌린지는 '코치 인터뷰'로 진행되었습니다.",
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/nhQRaRgV19o/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/nhQRaRgV19o/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/nhQRaRgV19o/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-09-09T04:04:59Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'wT6nFuYCuRdM_6L427Rmrx-dZE4',
    id: {
      kind: 'youtube#video',
      videoId: 'HxzKg7V6r00'
    },
    snippet: {
      publishedAt: '2019-10-05T01:19:06Z',
      channelId: 'UCipvQqo32UmHkAAwhn-MfbQ',
      title: '우아한테크코스 1기 합격 노하우 전격 공개. 비전공자 크루가 직접 들려주는 이야기 2편',
      description: '우아한테크코스 후기를 기록한 영상입니다. 이 영상에서는 우아한테크코스의 선발과정에 대하여 다룹니다. 1편 우아한테크코스 2기?',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/HxzKg7V6r00/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/HxzKg7V6r00/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/HxzKg7V6r00/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '개발왕루피',
      liveBroadcastContent: 'none',
      publishTime: '2019-10-05T01:19:06Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'hHO4w55-_FhCWs7lF6gARTbCDPI',
    id: {
      kind: 'youtube#video',
      videoId: 'Xm0SmqBGaBA'
    },
    snippet: {
      publishedAt: '2020-01-08T07:36:40Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 🎬vlog] 우테코 1기가 2기에게 전하는 ✉️메세지',
      description: "2019\uB144 12\uC6D4 27\uC77C \uC6B0\uC544\uD55C\uD14C\uD06C\uCF54\uC2A4\uC758 1\uAE30 \uD06C\uB8E8\uB4E4\uC774 \uAE34 \uD56D\uD574  \uB97C \uB9C8\uCE58\uACE0, \u200D  \uC218\uB8CC\uC2DD \u200D  \uC744 \uAC00\uC84C\uC2B5\uB2C8\uB2E4. \uC774 \uB54C \uD2B9\uBCC4\uD55C \uC2DC\uAC04\uC744 \uAC00\uC838 ...",
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/Xm0SmqBGaBA/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Xm0SmqBGaBA/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/Xm0SmqBGaBA/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2020-01-08T07:36:40Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'lod3jLdLU-rYGR7AC8AYYZluSK4',
    id: {
      kind: 'youtube#video',
      videoId: 'ZQklkmFlYQI'
    },
    snippet: {
      publishedAt: '2021-07-28T05:20:22Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 🎬vlog] Ep.5 우테코 프로젝트 비하인드 🎞',
      description: '우테코로그 Ep.5 우테코 프로젝트 비하인드 이번 우테코로그는 현재 크루들이 진행하고 있는 프로젝트 선정 비하인드 영상입니다 ...',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/ZQklkmFlYQI/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ZQklkmFlYQI/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/ZQklkmFlYQI/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-28T05:20:22Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'Uh6GOEEuQV7wP5slyO4VQInl9eY',
    id: {
      kind: 'youtube#video',
      videoId: 'r1AWm783YeY'
    },
    snippet: {
      publishedAt: '2021-09-09T03:30:44Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 인터뷰 챌린지] 🎙 코치에게 묻다! 코테뷰 #3 포코',
      description: "우아한테크코스의 크루들이 진행하는 인터뷰 챌린지입니다.   이번 우테코 인터뷰 챌린지는 '코치 인터뷰'로 진행되었습니다.",
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/r1AWm783YeY/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/r1AWm783YeY/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/r1AWm783YeY/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-09-09T03:30:44Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: '51SjOy2nssfj71Sxh3ix-1Ex8Eg',
    id: {
      kind: 'youtube#video',
      videoId: 'enINkqC7FAc'
    },
    snippet: {
      publishedAt: '2021-07-14T05:16:07Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 인터뷰 챌린지] 🧡 프론트엔드 백엔드 서로에게 묻다! #1',
      description: '우아한테크코스의 크루들이 진행하는 인터뷰 챌린지입니다.   우테코 인터뷰 챌린지 이번 편은 백엔드와 프론트엔드 크루들이 평소에 ...',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/enINkqC7FAc/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/enINkqC7FAc/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/enINkqC7FAc/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-14T05:16:07Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'bfS-x6xKV14TESX5ieO6xEfY4vk',
    id: {
      kind: 'youtube#video',
      videoId: 'UGsM1vSTAno'
    },
    snippet: {
      publishedAt: '2021-07-14T06:28:33Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: '[우테코 인터뷰 챌린지] 🧡 프론트엔드 백엔드 서로에게 묻다! #3',
      description: '우아한테크코스의 크루들이 진행하는 인터뷰 챌린지입니다.   우테코 인터뷰 챌린지 이번 편은 백엔드와 프론트엔드 크루들이 평소에 ...',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/UGsM1vSTAno/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/UGsM1vSTAno/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/UGsM1vSTAno/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-14T06:28:33Z'
    }
  }, {
    kind: 'youtube#searchResult',
    etag: 'K67nj_5cOKajD_nSPwOpiDXjWYY',
    id: {
      kind: 'youtube#video',
      videoId: 'eRffd42sd4I'
    },
    snippet: {
      publishedAt: '2021-11-29T08:06:30Z',
      channelId: 'UC-mOekGSesms0agFntnQang',
      title: "[\uC6B0\uD14C\uCF54 \uD83C\uDFACvlog] Ep. 8 \uD83D\uDC7E\uC6B0\uC544\uD55C\uD14C\uD06C\uCF54\uC2A4 3\uAE30 \uB370\uBAA8\uB370\uC774\uD83E\uDDD1\u200D\uD83D\uDCBB\uD83D\uDC69\u200D\uD83D\uDCBB",
      description: '우테코로그 Ep. 8 우아한테크코스 데모데이   지난 10월 29일, 크루들이 밤낮으로 고생하며 완성한 프로젝트의 최종 데모데이를 진행 ...',
      thumbnails: {
        "default": {
          url: 'https://i.ytimg.com/vi/eRffd42sd4I/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/eRffd42sd4I/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/eRffd42sd4I/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '우아한Tech',
      liveBroadcastContent: 'none',
      publishTime: '2021-11-29T08:06:30Z'
    }
  }]
};
var errorData = {
  error: {
    code: 400,
    message: 'API key not valid. Please pass a valid API key.',
    errors: [{
      message: 'API key not valid. Please pass a valid API key.',
      domain: 'global',
      reason: 'badRequest'
    }],
    status: 'INVALID_ARGUMENT',
    details: [{
      '@type': 'type.googleapis.com/google.rpc.ErrorInfo',
      reason: 'API_KEY_INVALID',
      domain: 'googleapis.com',
      metadata: {
        service: 'youtube.googleapis.com'
      }
    }]
  }
};
var parseData = [{
  videoId: 'mQhgF7RoUCA',
  publishedAt: '2021-10-14T19:06:42Z',
  title: '우아한테크코스 4기 온라인 설명회',
  url: 'https://i.ytimg.com/vi/mQhgF7RoUCA/mqdefault.jpg',
  channelTitle: '박재성',
  isLastPage: false
}, {
  videoId: 'ytt37XkcHTU',
  publishedAt: '2021-06-03T01:41:57Z',
  title: '[우테코 🎬vlog] Ep.4 그루밍의 하루 ☀️',
  url: 'https://i.ytimg.com/vi/ytt37XkcHTU/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'nhQRaRgV19o',
  publishedAt: '2021-09-09T04:04:59Z',
  title: '[우테코 인터뷰 챌린지] 🎙 코치에게 묻다! 코테뷰 #4 포비',
  url: 'https://i.ytimg.com/vi/nhQRaRgV19o/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'HxzKg7V6r00',
  publishedAt: '2019-10-05T01:19:06Z',
  title: '우아한테크코스 1기 합격 노하우 전격 공개. 비전공자 크루가 직접 들려주는 이야기 2편',
  url: 'https://i.ytimg.com/vi/HxzKg7V6r00/mqdefault.jpg',
  channelTitle: '개발왕루피',
  isLastPage: false
}, {
  videoId: 'Xm0SmqBGaBA',
  publishedAt: '2020-01-08T07:36:40Z',
  title: '[우테코 🎬vlog] 우테코 1기가 2기에게 전하는 ✉️메세지',
  url: 'https://i.ytimg.com/vi/Xm0SmqBGaBA/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'ZQklkmFlYQI',
  publishedAt: '2021-07-28T05:20:22Z',
  title: '[우테코 🎬vlog] Ep.5 우테코 프로젝트 비하인드 🎞',
  url: 'https://i.ytimg.com/vi/ZQklkmFlYQI/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'r1AWm783YeY',
  publishedAt: '2021-09-09T03:30:44Z',
  title: '[우테코 인터뷰 챌린지] 🎙 코치에게 묻다! 코테뷰 #3 포코',
  url: 'https://i.ytimg.com/vi/r1AWm783YeY/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'enINkqC7FAc',
  publishedAt: '2021-07-14T05:16:07Z',
  title: '[우테코 인터뷰 챌린지] 🧡 프론트엔드 백엔드 서로에게 묻다! #1',
  url: 'https://i.ytimg.com/vi/enINkqC7FAc/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'UGsM1vSTAno',
  publishedAt: '2021-07-14T06:28:33Z',
  title: '[우테코 인터뷰 챌린지] 🧡 프론트엔드 백엔드 서로에게 묻다! #3',
  url: 'https://i.ytimg.com/vi/UGsM1vSTAno/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}, {
  videoId: 'eRffd42sd4I',
  publishedAt: '2021-11-29T08:06:30Z',
  title: "[\uC6B0\uD14C\uCF54 \uD83C\uDFACvlog] Ep. 8 \uD83D\uDC7E\uC6B0\uC544\uD55C\uD14C\uD06C\uCF54\uC2A4 3\uAE30 \uB370\uBAA8\uB370\uC774\uD83E\uDDD1\u200D\uD83D\uDCBB\uD83D\uDC69\u200D\uD83D\uDCBB",
  url: 'https://i.ytimg.com/vi/eRffd42sd4I/mqdefault.jpg',
  channelTitle: '우아한Tech',
  isLastPage: false
}];

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/js/utils/constants.js");

var validator = {
  checkSearchInput: function checkSearchInput(searchInput) {
    if (isEmptyInput(searchInput)) {
      throw new Error(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_INPUT);
    }
  },
  checkStoredVideoListOverMaxLength: function checkStoredVideoListOverMaxLength(videoList) {
    if (isOverVideoListMaxLength(videoList)) {
      throw new Error(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OVER_MAX_STORE_LENGTH);
    }
  }
};

function isEmptyInput(searchInput) {
  return searchInput.trim() === '';
}

function isOverVideoListMaxLength(videoList) {
  return videoList.length >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.STORE.VIDEO_LIST_MAX_LENGTH;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);

/***/ }),

/***/ "./src/js/view/MainView.js":
/*!*********************************!*\
  !*** ./src/js/view/MainView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/common.js */ "./src/js/utils/common.js");
/* harmony import */ var _VideoItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoItemView.js */ "./src/js/view/VideoItemView.js");




function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _getCurrentVideoListElement = /*#__PURE__*/new WeakSet();

var _appendEmptyList = /*#__PURE__*/new WeakSet();

var _appendVideoItem = /*#__PURE__*/new WeakSet();

var _showSkeletonTemplate = /*#__PURE__*/new WeakSet();

var _renderWillSeeVideoItems = /*#__PURE__*/new WeakSet();

var _renderSawVideoItems = /*#__PURE__*/new WeakSet();

var _toggleStoreButtons = /*#__PURE__*/new WeakSet();

var MainView = /*#__PURE__*/function () {
  function MainView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainView);

    _classPrivateMethodInitSpec(this, _toggleStoreButtons);

    _classPrivateMethodInitSpec(this, _renderSawVideoItems);

    _classPrivateMethodInitSpec(this, _renderWillSeeVideoItems);

    _classPrivateMethodInitSpec(this, _showSkeletonTemplate);

    _classPrivateMethodInitSpec(this, _appendVideoItem);

    _classPrivateMethodInitSpec(this, _appendEmptyList);

    _classPrivateMethodInitSpec(this, _getCurrentVideoListElement);

    this.registerDOM();
    this.setProperties();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MainView, [{
    key: "registerDOM",
    value: function registerDOM() {
      this.$modalOpenButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.MODAL_OPEN_BUTTON);
      this.$willSeeButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.WILL_SEE_BUTTON);
      this.$sawButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.SAW_BUTTON);
      this.$storeButtonsContainer = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.STORE_BUTTONS_COTAINER);
      this.$willSeeVideoList = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.WILL_SEE_VIDEO_LIST);
      this.$sawVideoList = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.SAW_VIDEO_LIST);
    }
  }, {
    key: "setProperties",
    value: function setProperties() {
      this.currentStoreType = _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.WILL_SEE;
      this.videoItemViewLists = {};
      this.videoItemViewLists[_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.WILL_SEE] = [];
      this.videoItemViewLists[_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.SAW] = [];
    }
  }, {
    key: "bindModalOpenButton",
    value: function bindModalOpenButton(callback) {
      this.$modalOpenButton.addEventListener('click', callback);
    }
  }, {
    key: "bindStoreTypeButtons",
    value: function bindStoreTypeButtons(callback) {
      var _this = this;

      this.$storeButtonsContainer.addEventListener('click', function (event) {
        _this.currentStoreType = event.target.id === _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.SAW_BUTTON ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.SAW : _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.WILL_SEE;

        _classPrivateMethodGet(_this, _toggleStoreButtons, _toggleStoreButtons2).call(_this, event.target);

        callback(_this.currentStoreType);
      });
    }
  }, {
    key: "bindVideoItemButtons",
    value: function bindVideoItemButtons(callback) {
      var _this2 = this;

      [this.$willSeeVideoList, this.$sawVideoList].forEach(function (videoList) {
        return videoList.addEventListener('click', function (event) {
          if ([_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.CHECK_WILL_SEE_BUTTON, _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.CHECK_SAW_BUTTON, _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.DELETE_STORE_BUTTON].includes(event.target.id)) {
            var videoId = event.target.closest(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.VIDEO_ITEM).dataset.videoid;
            callback(event.target.id, videoId, _this2.currentStoreType);

            _this2.deleteVideoItem(event.target.closest(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.VIDEO_ITEM));
          }
        });
      });
    }
  }, {
    key: "clickWillSeeButton",
    value: function clickWillSeeButton() {
      this.$willSeeButton.click();
    }
  }, {
    key: "showEmptyStorage",
    value: function showEmptyStorage(bool) {
      bool ? (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.EMPTY_CONTAINER).classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE) : (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.EMPTY_CONTAINER).classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE);
    }
  }, {
    key: "getCurrentStoreType",
    value: function getCurrentStoreType() {
      return this.currentStoreType;
    }
  }, {
    key: "getRenderedVideoIdList",
    value: function getRenderedVideoIdList() {
      var currentVideoListElement = _classPrivateMethodGet(this, _getCurrentVideoListElement, _getCurrentVideoListElement2).call(this);

      return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentVideoListElement.childNodes).map(function (videoItem) {
        return videoItem.dataset.videoid;
      });
    }
  }, {
    key: "showSkeletonVideoList",
    value: function showSkeletonVideoList(videoList) {
      _classPrivateMethodGet(this, _appendEmptyList, _appendEmptyList2).call(this, videoList);

      _classPrivateMethodGet(this, _appendVideoItem, _appendVideoItem2).call(this, videoList);

      _classPrivateMethodGet(this, _showSkeletonTemplate, _showSkeletonTemplate2).call(this, videoList);
    }
  }, {
    key: "updateVideoItems",
    value: function updateVideoItems(videoListData) {
      if (this.currentStoreType === _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.WILL_SEE) {
        _classPrivateMethodGet(this, _renderWillSeeVideoItems, _renderWillSeeVideoItems2).call(this, videoListData);

        return;
      }

      _classPrivateMethodGet(this, _renderSawVideoItems, _renderSawVideoItems2).call(this, videoListData);
    }
  }, {
    key: "deleteVideoItem",
    value: function deleteVideoItem(videoElement) {
      console.log(videoElement);
      var targetIndex = this.videoItemViewLists[this.currentStoreType].findIndex(function (video) {
        return video.getElement() === videoElement;
      });
      this.videoItemViewLists[this.currentStoreType].splice(targetIndex, 1);
      videoElement.parentNode.removeChild(videoElement);
    }
  }]);

  return MainView;
}();

function _getCurrentVideoListElement2() {
  if (this.currentStoreType === _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.STORE.WILL_SEE) {
    return this.$willSeeVideoList;
  }

  return this.$sawVideoList;
}

function _appendEmptyList2(videoList) {
  var currentVideoListElement = _classPrivateMethodGet(this, _getCurrentVideoListElement, _getCurrentVideoListElement2).call(this);

  currentVideoListElement.insertAdjacentHTML('beforeend', "<li class=".concat(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.VIDEO_ITEM, "></li>").repeat(videoList.length));
}

function _appendVideoItem2(videoList) {
  var _this3 = this;

  var currentVideoListElement = _classPrivateMethodGet(this, _getCurrentVideoListElement, _getCurrentVideoListElement2).call(this);

  (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentVideoListElement.childNodes).slice(-videoList.length).forEach(function (li) {
    _this3.videoItemViewLists[_this3.currentStoreType].push(new _VideoItemView_js__WEBPACK_IMPORTED_MODULE_5__["default"](li));
  });
}

function _showSkeletonTemplate2(videoList) {
  this.videoItemViewLists[this.currentStoreType].slice(-videoList.length).forEach(function (videoItem) {
    return videoItem.renderSkeletonTemplate();
  });
}

function _renderWillSeeVideoItems2(videoListData) {
  this.videoItemViewLists[this.currentStoreType].slice(-videoListData.length).forEach(function (videoItem, index) {
    return videoItem.renderWillSeeVideoItemTemplate(videoListData[index]);
  });
}

function _renderSawVideoItems2(videoListData) {
  this.videoItemViewLists[this.currentStoreType].slice(-videoListData.length).forEach(function (videoItem, index) {
    return videoItem.renderSawVideoItemTemplate(videoListData[index]);
  });
}

function _toggleStoreButtons2(button) {
  button.disabled = true;
  button.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.NAV_BUTTON_CLICKED);

  if (button === this.$willSeeButton) {
    this.$sawButton.disabled = false;
    this.$sawButton.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.NAV_BUTTON_CLICKED);
    this.$willSeeVideoList.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE);
    this.$sawVideoList.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE);
  } else {
    this.$willSeeButton.disabled = false;
    this.$willSeeButton.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.NAV_BUTTON_CLICKED);
    this.$willSeeVideoList.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE);
    this.$sawVideoList.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE);
  }
}



/***/ }),

/***/ "./src/js/view/ModalView.js":
/*!**********************************!*\
  !*** ./src/js/view/ModalView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _VideoItemView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoItemView.js */ "./src/js/view/VideoItemView.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/common.js */ "./src/js/utils/common.js");




function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _appendEmptyList = /*#__PURE__*/new WeakSet();

var _appendVideoItem = /*#__PURE__*/new WeakSet();

var _showSkeletonTemplate = /*#__PURE__*/new WeakSet();

var ModalView = /*#__PURE__*/function () {
  function ModalView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalView);

    _classPrivateMethodInitSpec(this, _showSkeletonTemplate);

    _classPrivateMethodInitSpec(this, _appendVideoItem);

    _classPrivateMethodInitSpec(this, _appendEmptyList);

    this.registerDOM();
    this.videoItemList = [];
    this.enabledScrollSearch = false;
    this.searchInputValue = '';
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalView, [{
    key: "registerDOM",
    value: function registerDOM() {
      this.$modalContainer = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SELECTOR.MODAL_CONTAINER);
      this.$dimmer = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SELECTOR.DIMMER);
      this.$videoList = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SELECTOR.VIDEO_LIST);
      this.$searchButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SELECTOR.SEARCH_BUTTOM);
      this.$searchInput = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SELECTOR.SEARCH_INPUT);
      this.$searchNoResult = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SELECTOR.SEARCH_NO_RESULT);
    }
  }, {
    key: "showModal",
    value: function showModal() {
      this.$modalContainer.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
      this.$searchNoResult.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
      this.$searchInput.value = '';
      this.$searchInput.focus();
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.$modalContainer.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
    }
  }, {
    key: "controlScrollSearch",
    value: function controlScrollSearch(value) {
      this.enabledScrollSearch = value;
    }
  }, {
    key: "bindOnClickDimmer",
    value: function bindOnClickDimmer(callback) {
      this.$dimmer.addEventListener('click', callback);
    }
  }, {
    key: "bindOnClickSearchButton",
    value: function bindOnClickSearchButton(callback) {
      var _this = this;

      this.$searchButton.addEventListener('click', function () {
        _this.searchInputValue = _this.$searchInput.value;
        callback(_this.searchInputValue);
      });
      this.$searchInput.addEventListener('keyup', function (e) {
        if (e.keyCode === _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.KEY_CODE.ENTER) {
          _this.searchInputValue = _this.$searchInput.value;
          callback(_this.searchInputValue);
        }
      });
    }
  }, {
    key: "bindVideoListScroll",
    value: function bindVideoListScroll(callback) {
      var _this2 = this;

      this.$videoList.addEventListener('scroll', function () {
        (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_5__.throttle)(function () {
          if (_this2.$videoList.scrollHeight - _this2.$videoList.scrollTop <= _this2.$videoList.offsetHeight + _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.SCROLL.ADDITIONAL_OFFSET && _this2.enabledScrollSearch) {
            console.log('a');

            _this2.controlScrollSearch(false);

            callback(_this2.searchInputValue);
          }
        });
      });
    }
  }, {
    key: "bindVideoListClickStoreButton",
    value: function bindVideoListClickStoreButton(callback) {
      this.$videoList.addEventListener('click', function (event) {
        if ((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target.classList).includes(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.VIDEO_ITEM_SAVE_BUTTON)) {
          event.target.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
          callback(event.target.dataset.videoid);
        }
      });
    }
  }, {
    key: "resetVideoList",
    value: function resetVideoList() {
      this.$searchNoResult.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
      this.$videoList.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
      this.$videoList.textContent = '';
      this.videoItemList = [];
    }
  }, {
    key: "showNoResult",
    value: function showNoResult() {
      this.$searchNoResult.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
      this.$videoList.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.HIDE);
    }
  }, {
    key: "updateVideoItems",
    value: function updateVideoItems(videoListData) {
      var willUpdateVideoItemList = this.videoItemList.slice(-_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.VIDEO_LIST.RENDER_SIZE);
      var willDeleteVideoItemList = willUpdateVideoItemList.splice(videoListData.length);
      willUpdateVideoItemList.forEach(function (videoItem, index) {
        return videoItem.renderVideoItemTemplate(videoListData[index]);
      });
      willDeleteVideoItemList.forEach(function (videoItem) {
        return videoItem.deleteTemplate();
      });
    }
  }, {
    key: "showLoadingVideoItems",
    value: function showLoadingVideoItems() {
      _classPrivateMethodGet(this, _appendEmptyList, _appendEmptyList2).call(this);

      _classPrivateMethodGet(this, _appendVideoItem, _appendVideoItem2).call(this);

      _classPrivateMethodGet(this, _showSkeletonTemplate, _showSkeletonTemplate2).call(this);
    }
  }]);

  return ModalView;
}();

function _appendEmptyList2() {
  this.$videoList.insertAdjacentHTML('beforeend', "<li class=".concat(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.DOM_STRING.VIDEO_ITEM, "></li>").repeat(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.VIDEO_LIST.RENDER_SIZE));
}

function _appendVideoItem2() {
  var _this3 = this;

  (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$videoList.childNodes).slice(-_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.VIDEO_LIST.RENDER_SIZE).forEach(function (li) {
    _this3.videoItemList.push(new _VideoItemView_js__WEBPACK_IMPORTED_MODULE_3__["default"](li));
  });
}

function _showSkeletonTemplate2() {
  this.videoItemList.slice(-_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.VIDEO_LIST.RENDER_SIZE).forEach(function (videoItem) {
    return videoItem.renderSkeletonTemplate();
  });
}



/***/ }),

/***/ "./src/js/view/VideoItemView.js":
/*!**************************************!*\
  !*** ./src/js/view/VideoItemView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoItemView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _storage_videoStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/videoStore.js */ "./src/js/storage/videoStore.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");





var VideoItemView = /*#__PURE__*/function () {
  function VideoItemView($element) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoItemView);

    this.$element = $element;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoItemView, [{
    key: "getMainTemplate",
    value: function getMainTemplate(parseData) {
      return "\n      <img \n        src=".concat(parseData.url, "\n        alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\" loading=\"lazy\" />\n      <h4 class=\"video-item__title\">").concat(parseData.title, "</h4>\n      <p class=\"video-item__channel-nagetVideoItemTemplateme\">").concat(parseData.channelTitle, "</p>\n      <p class=\"video-item__published-date \">").concat(parseData.publishedAt, "</p>\n    ");
    }
  }, {
    key: "renderVideoItemTemplate",
    value: function renderVideoItemTemplate(parseData) {
      var template = "\n      ".concat(this.getMainTemplate(parseData), "\n      <button data-videoid=").concat(parseData.videoId, " class=\"video-item__save-button button \n      ").concat(_storage_videoStore_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasVideoId(parseData.videoId) ? "".concat(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DOM_STRING.HIDE) : '', "\"> \n      \u2B07 \uC800\uC7A5\n      </button>\n    ");
      this.$element.textContent = '';
      this.$element.insertAdjacentHTML('afterbegin', template);
    }
  }, {
    key: "renderWillSeeVideoItemTemplate",
    value: function renderWillSeeVideoItemTemplate(parseData) {
      var template = "\n    ".concat(this.getMainTemplate(parseData), "\n    <div class=\"video-item-button-container\">\n      <button id=\"check-saw-button\" class=\"video-item-button\">\u2705</button>\n      <button id=\"delete-store-button\" class=\"video-item-button\">\uD83D\uDDD1</button>\n    </div>\n    ");
      this.$element.setAttribute('data-videoid', parseData.videoId);
      this.$element.textContent = '';
      this.$element.insertAdjacentHTML('afterbegin', template);
    }
  }, {
    key: "renderSawVideoItemTemplate",
    value: function renderSawVideoItemTemplate(parseData) {
      var template = "\n    ".concat(this.getMainTemplate(parseData), "\n    <div class=\"video-item-button-container\">\n      <button id=\"check-will-see-button\" class=\"video-item-button\">\u2705</button>\n      <button id=\"delete-store-button\" class=\"video-item-button\">\uD83D\uDDD1</button>\n    </div>\n    ");
      this.$element.setAttribute('data-videoid', parseData.videoId);
      this.$element.textContent = '';
      this.$element.insertAdjacentHTML('afterbegin', template);
    }
  }, {
    key: "renderSkeletonTemplate",
    value: function renderSkeletonTemplate() {
      var template = "\n      <div class=\"video-item__thumbnail skeleton\"></div>\n      <div class=\"video-item__title skeleton\"></div>\n      <div class=\"video-item__channel-nagetVideoItemTemplateme skeleton\"></div>\n      <div class=\"video-item__published-date skeleton\"></div>\n      <div class=\"video-item__save-button button skeleton\"></div>\n    ";
      this.$element.textContent = '';
      this.$element.insertAdjacentHTML('afterbegin', template);
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate() {
      this.$element.textContent = '';
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.$element;
    }
  }]);

  return VideoItemView;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.stored-buttons-container {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n  border: 1px solid rgb(226, 226, 226);\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.nav__button-clicked {\n  background-color: #00bcd41f;\n}\n\n.left-store-button {\n  border-radius: 4px 0 0 4px;\n}\n\n.right-store-button {\n  border-radius: 0 4px 4px 0;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.stored-buttons-container {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n  border: 1px solid rgb(226, 226, 226);\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.nav__button-clicked {\n  background-color: #00bcd41f;\n}\n\n.left-store-button {\n  border-radius: 4px 0 0 4px;\n}\n\n.right-store-button {\n  border-radius: 0 4px 4px 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './app.css';\n@import './modal.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-video-list {\n  display: grid;\n  row-gap: 20px;\n  column-gap: 19px;\n  margin-top: 39px;\n  place-items: center;\n}\n\n.video-item-button-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n\n.video-item-button {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.video-item-button:hover {\n  background-color: #00bcd41f;\n}\n\n@media screen and (min-width: 1280px) {\n  .main-video-list {\n    grid: '. . . .';\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .main-video-list {\n    grid: '. . .';\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .main-video-list {\n    grid: '. .';\n  }\n}\n\n@media screen and (max-width: 599px) {\n  .main-video-list {\n    grid: '.';\n  }\n}\n\n#empty-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.empty-image {\n  width: 350px;\n  height: 350px;\n}\n\n#empty-container > p {\n  font-size: x-large;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,SAAS;EACX;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":[".main-video-list {\n  display: grid;\n  row-gap: 20px;\n  column-gap: 19px;\n  margin-top: 39px;\n  place-items: center;\n}\n\n.video-item-button-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n\n.video-item-button {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.video-item-button:hover {\n  background-color: #00bcd41f;\n}\n\n@media screen and (min-width: 1280px) {\n  .main-video-list {\n    grid: '. . . .';\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .main-video-list {\n    grid: '. . .';\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .main-video-list {\n    grid: '. .';\n  }\n}\n\n@media screen and (max-width: 599px) {\n  .main-video-list {\n    grid: '.';\n  }\n}\n\n#empty-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.empty-image {\n  width: 350px;\n  height: 350px;\n}\n\n#empty-container > p {\n  font-size: x-large;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n/* Skeleton UI */\n.skeleton {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n\n.hide {\n  display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,iFAAiF;EACjF,uCAAuC;AACzC;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n/* Skeleton UI */\n.skeleton {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n\n.hide {\n  display: none !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("./not_found.png");

/***/ }),

/***/ "./src/assets/images/playing_music.png":
/*!*********************************************!*\
  !*** ./src/assets/images/playing_music.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("./playing_music.png");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./src/css/app.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _assets_images_playing_music_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/playing_music.png */ "./src/assets/images/playing_music.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.js */ "./src/js/app.js");







new _app_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map