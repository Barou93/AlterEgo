const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const adminController = require("../controllers/admin.controller");
const {checkAdmin} = require("../middleware/auth.middleware");
const cache = require("../helpers/cache")
//Authentification
router.post("/register", authController.register);
router.post("/login", checkAdmin, authController.login);
router.post("/logout", authController.logout);

//Admin Panel
router.get("/:id", cache(300), checkAdmin, adminController.adminInfos);
router.get("/", cache(300), checkAdmin, adminController.getAllAdmins);
router.put("/:id",  checkAdmin, adminController.updateInfos);
router.delete("/:id", checkAdmin, adminController.deleteAdmin);

module.exports = router;
