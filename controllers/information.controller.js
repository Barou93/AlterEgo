/**
 {
 information tables feld
 name, email, phone, message
 }
 */

const models = require('../models');
const {Information, Admin} = models;
const jwt = require('jsonwebtoken');

module.exports.createInfos = async (req, res) => {
  const {name, email, phone, message} = req.body;

  const createInfos = await Information.create({
    name,
    email,
    phone,
    message,
  });
  if (!createInfos) {
    return res
      .status(400)
      .json("Impossible d'envoyer votre message, merci de reessayer SVP!");
  }
  return res.status(201).json(createInfos.toJSON());
};

module.exports.getInfos = async (req, res) => {
  //const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
  const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
  const admin = token.id;
  //console.log(admin);

  try {
    const adminId = await Admin.findByPk(admin);
    if (!adminId)
      return res
        .status(401)
        .json('Désolé seuls les administrateurs sont autorisés');
    if (adminId) {
      const allInfos = await Information.findAll({
        order: [['createdAt', 'DESC']],
      });
      if (allInfos) {
        return res.status(200).json(allInfos);
      } else {
        return res.status(404).json('Aucune demande disponible');
      }
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports.readInfos = async (req, res) => {
  const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
  const adminId = await Admin.findByPk(token.id);
  try {
    if (adminId) {
      const {id} = req.params;

      const getInfos = await Information.findByPk(id);

      if (getInfos) {
        return res.status(200).json(getInfos);
      } else {
        return res.status(404).json("Cette information n'est plus disponible");
      }
    } else {
      return res
        .status(403)
        .json('Désolé seuls les administrateurs sont autorisés ');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.deleteInfos = async (req, res) => {
  const {id} = req.params;
  const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
  try {
    const adminId = await Admin.findByPk(token.id);
    const infos = await Information.findOne({where: {id}});

    await Information.destroy({where: {id: infos.id}})
      .then((deleteInfos) => {
        if (deleteInfos) {
          return res.status(200).json('Cette information a été supprimé');
        }
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};
