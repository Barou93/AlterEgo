"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = adminReducer;

var _admin = require("../actions/admin.action");

var initialState = {};

function adminReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _admin.GET_ADMIN:
      return action.payload;

    default:
      return state;
  }
}