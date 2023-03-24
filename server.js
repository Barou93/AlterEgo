const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

//Routes dependances
const adminRoutes = require('./routes/admin.routes');
const articleRoutes = require('./routes/article.routes');
const infosRoutes = require('./routes/information.routes');
const app = express();


require('dotenv').config('./.env');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
  origin: process.env.FRONT_URL,
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
app.use('/api/article', articleRoutes);
app.use('/api/infos', infosRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Listenning on PORT ${process.env.PORT}`);
});
