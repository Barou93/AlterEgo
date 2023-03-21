"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarData = void 0;

var _react = _interopRequireDefault(require("react"));

var _home = _interopRequireDefault(require(".././styles/assets/icons/home.svg"));

var _article = _interopRequireDefault(require(".././styles/assets/icons/article.svg"));

var _message = _interopRequireDefault(require(".././styles/assets/icons/message.svg"));

var _profil = _interopRequireDefault(require(".././styles/assets/icons/profil.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SidebarData = [{
  title: "Dashboard",
  path: "/admin/dashboard",
  "class": "sidebar__icon home",
  icon: _home["default"]
}, {
  title: "Articles",
  path: "/admin/article",
  "class": "sidebar__icon article",
  icon: _article["default"]
}, {
  title: "Messages",
  path: "/admin/message",
  "class": "sidebar__icon message",
  icon: _message["default"]
}, {
  title: "Profil",
  path: "/admin/profil",
  "class": "sidebar__icon message",
  icon: _profil["default"]
}];
exports.SidebarData = SidebarData;