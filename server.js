const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet')
const compression = require('compression');
const configuration = require('./configuration');

const {port, allowedDomains} = configuration;
//Routes dependances
const adminRoutes = require('./routes/admin.routes');
const articleRoutes = require('./routes/article.routes');
const infosRoutes = require('./routes/information.routes');
const app = express();

require('dotenv')
app.use(compression());

// const Sequelize = require("sequelize");


// const sequelize = new Sequelize('ndfc1f5_alterego','ndfc1f5_alterego', 'ousmane@2023', {
//   host: 'localhost',
//   dialect: "mysql"
// })

// sequelize.authenticate().then(() => {
//    console.log('La connexion a été établie avec succès.');
// }).catch((error) => {
//    console.error('Impossible de se connecter à la base de donnée: ', error);
// });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());
const corsOptions = {
  origin: '*',
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};


app.use(express.static(path.join(__dirname, './blog/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './blog/build', 'index.html'));
});

app.use(cors(corsOptions));
const {requireAuth} = require('./middleware/auth.middleware');
app.get('/jwtid', requireAuth, (req, res) => {

   res.json(res.locals.admin.id);
});


app.use("/uploads", express.static(path.join("uploads")));

app.use('/api/admin', adminRoutes);
app.use('/api/article',articleRoutes);
app.use('/api/infos', infosRoutes);
app.listen(process.env.PORT , () => {
  console.log(`Listenning on PORT ${process.env.PORT}`);
});
