"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = articleReducer;

var _article = require("../actions/article.action");

var initialState = {};

function articleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _article.GET_ARTICLE:
      return action.payload;

    default:
      return state;
  }
}