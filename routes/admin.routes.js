const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const adminController = require("../controllers/admin.controller");
const {checkAdmin} = require("../middleware/auth.middleware");

//Authentification
router.post("/register", authController.register);
router.post("/login", checkAdmin, authController.login);
router.post("/logout", authController.logout);

//Admin Panel
router.get("/:id", checkAdmin, adminController.adminInfos);
router.get("/", checkAdmin, adminController.getAllAdmins);
router.put("/:id", checkAdmin, adminController.updateInfos);
router.delete("/:id", checkAdmin, adminController.deleteAdmin);

module.exports = router;
