const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
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

const Sequelize = require("sequelize");


const sequelize = new Sequelize('AlterEgoDB_dev', 'root', 'root', {
  host: 'localhost',
  dialect: "mysql"
})

sequelize.authenticate().then(() => {
   console.log('La connexion a été établie avec succès.');
}).catch((error) => {
   console.error('Impossible de se connecter à la base de donnée: ', error);
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
  origin: allowedDomains,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};


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
