const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet')
const compression = require('compression');
// const configuration = require('./configuration');

// const {port, allowedDomains} = configuration;
//Routes dependances
const adminRoutes = require('./routes/admin.routes');
const articleRoutes = require('./routes/article.routes');
const infosRoutes = require('./routes/information.routes');
const app = express();

require('dotenv').config();
app.use(compression());


// app.use(express.static(path.resolve(__dirname, './blog/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './blog/build', 'index.html'));
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });
/**allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'], */

const corsOptions = {
  origin: '*',
  credentials: true,
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
app.listen(process.env.PORT || 5000 , () => {
  console.log(`Listenning on PORT ${process.env.PORT}`);
});
