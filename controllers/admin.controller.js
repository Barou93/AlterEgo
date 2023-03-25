const models = require("../models");
const Admin = models.Admin;

/**
 *
 * @param {String} req
 * @param {String} res
 */
module.exports.getAllAdmins = async (req, res) => {
  await Admin.findAll({
    attributes: {exclude: ["password"]},
  })
    .then((admins) => {
      if (admins) {
        return res.status(200).json(admins);
      } else {
        return res.status(404).json("pas d'administrateurs disponibles");
      }
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};
module.exports.adminInfos = async (req, res) => {
  const {id} = req.params;
  await Admin.findByPk(id, {
    attributes: {exclude: ["password"]},
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
  const {id} = req.params;
  const {username} = req.body;
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
  const {id} = req.params;
  const admin = await Admin.findOne({where: {id}});
  //Delete Admin by Id
  await Admin.destroy({where: {id: admin.id}})
    .then((deleteAdmin) => {
      if (!deleteAdmin) return res.status(404).json("Admin non disponible");
      return res
        .status(200)
        .json({message: "Votre compte a été bien supprimé"});
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
