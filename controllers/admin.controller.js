const models = require("../models");
const Admin = models.Admin;

/**
 *
 * @param {String} req
 * @param {String} res
 */

module.exports.adminInfos = async (req, res) => {
   const { id } = req.params;
   await Admin.findByPk(id, {
      attributes: { exclude: ["password"] },
   })
      .then((admin) => {
         if (!admin) return res.status(404).send("Utilisateur non trouvé");
         return res.status(200).json(admin);
      })
      .catch((err) => {
         return res.status(500).send(err);
      });
};

module.exports.updateInfos = async (req, res) => {
   const { id } = req.params;
   const { username } = req.body;
   const admin = await Admin.findByPk(id);
   if (!admin) return res.status(404).json("Admin non trouvé");
   admin.username = username;
   admin
      .save()
      .then(() => {
         return res.status(200).json(admin);
      })
      .catch((err) => res.status(401).json(err));
};
module.exports.deleteAdmin = async (req, res) => {
   const { id } = req.params;
   const admin = await Admin.findOne({ where: { id } });
   //Delete Admin by Id
   await Admin.destroy({ where: { id: admin.id } })
      .then((deleteAdmin) => {
         if (!deleteAdmin) return res.status(404).json("Admin non disponible");
         return res
            .status(200)
            .json({ message: "Votre compte a été bien supprimé" });
      })
      .catch((err) => {
         return res.status(500).send(err);
      });
};
