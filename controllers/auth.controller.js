const models = require('../models');
const Admin = models.Admin;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const maxAge = 24 * 60 * 60 * 1000; // 24h

const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};
//Création d'un compte admin
module.exports.register = async (req, res) => {
  
  //Verify if eamil and password values matched with the regex values
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const {username, email, password} = req.body;

  if (username === '' && email === '' && password === '') {
    const errors = {
      message: 'Merci de remplir les champs obligatoires',
    };
    return res.send({errors});
  }

  if (!emailRegex.test(email)) {
    const errors = {
      email: 'Cet email est incorrect, reesayer SVP!',
    };
    return res.send({errors});
  }

  if (!passwordRegex.test(password)) {
    const errors = {
      password:
        'Le mot de passe doit avoir 8 caractères et inclure 1 lettre majuscule, 1 chiffre et 1 caractère spécial',
    };
    return res.send({errors});
  }

  try {
    let emailIsFound = await Admin.findOne({where: {email}});

    if (emailIsFound) {
      const errors = {
        email: 'Cet email est déjà pris! Saisissez un autre e-mail',
      };
      return res.send({errors});
    }
    bcrypt.hash(password, 10).then(async (hash) => {
      const admin = await Admin.create({
        username,
        email,
        password: hash,
      });
      return res.status(201).json({admin: admin.toJSON()});
    });
  } catch (error) {
    res.status(500).json({error});
   
  }
};

//Authentification administrateur
module.exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const admin = await Admin.findOne({where: {email}, raw: true});

    //If fields have empty values

    if (email === '' && password === '') {
      const errors = {
        email: 'Veuillez saisir votre adresse e-mail.',
        password: 'Veuillez saisir votre mot de passe.',
      };
      res.send({errors});
      return;
    }

    //Check if isAdmin in database

    if (!admin) {
      const errors = {
        email: 'Email incorrect',
        password: '',
      };
      res.send({errors});
      return;
    }

    //Compare Admin password value in DB password
    const auth = await bcrypt.compare(password, admin.password);

    if (!auth) {
      const errors = {
        email: '',
        password: 'Mot de passe erroné',
      };
      res.send({errors});
      return;
    }

    

    //All values is valiates
    const token = createToken(admin.id);
    res.cookie('jwt', token, {httpOnly: true, maxAge});
    return res.status(200).json({admin: admin.id, token});
  } catch (error) {
    res.status(500).json(error);
   
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', {maxAge: 1});
  res.redirect('/');
};
