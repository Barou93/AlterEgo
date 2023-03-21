"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteArticle = exports.updateArticle = exports.readArticle = exports.createArticle = exports.getArticles = exports.DELETE_ARTICLE = exports.UPDATE_ARTICLE = exports.READ_ARTICLE = exports.CREATE_ARTICLE = exports.GET_ARTICLE = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_ARTICLE = 'GET_ARTICLE';
exports.GET_ARTICLE = GET_ARTICLE;
var CREATE_ARTICLE = 'CREATE_ARTICLE';
exports.CREATE_ARTICLE = CREATE_ARTICLE;
var READ_ARTICLE = 'READ_ARTICLE';
exports.READ_ARTICLE = READ_ARTICLE;
var UPDATE_ARTICLE = 'UPDATE_ARTICLE';
exports.UPDATE_ARTICLE = UPDATE_ARTICLE;
var DELETE_ARTICLE = 'DELETE_ARTICLE';
exports.DELETE_ARTICLE = DELETE_ARTICLE;

var getArticles = function getArticles() {
  return function (dispatch) {
    return _axios["default"].get("".concat(process.env.REACT_APP_API_URL, "api/article/")).then(function (res) {
      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getArticles = getArticles;

var createArticle = function createArticle(data) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: 'post',
      url: "".concat(process.env.REACT_APP_API_URL, "api/article/new"),
      data: data,
      withCredentials: true
    });
  };
};

exports.createArticle = createArticle;

var readArticle = function readArticle(id) {
  return function (dispatch) {
    return _axios["default"].get("".concat(process.env.REACT_APP_API_URL, "api/article/").concat(id)).then(function (res) {
      dispatch({
        type: READ_ARTICLE,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.readArticle = readArticle;

var updateArticle = function updateArticle(id, data) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: 'put',
      url: "".concat(process.env.REACT_APP_API_URL, "api/article/").concat(id),
      data: data,
      withCredentials: true
    }).then(function (res) {
      dispatch({
        type: UPDATE_ARTICLE,
        payload: {
          id: id,
          data: data
        }
      });
    });
  };
};

exports.updateArticle = updateArticle;

var deleteArticle = function deleteArticle(id) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: 'delete',
      url: "".concat(process.env.REACT_APP_API_URL, "api/article/").concat(id),
      withCredentials: true
    }).then(function (res) {
      dispatch({
        type: DELETE_ARTICLE,
        payload: {
          id: id
        }
      });
    });
  };
};

exports.deleteArticle = deleteArticle;