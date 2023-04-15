const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet')
const compression = require('compression');

//Routes dependances
const adminRoutes = require('./routes/admin.routes');
const articleRoutes = require('./routes/article.routes');
const infosRoutes = require('./routes/information.routes');

const app = express();

require('dotenv').config('./.env');

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());


// const corsOptions = {
//   origin: process.env.FRONT_URL,
//   credentials: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
// };
app.use(cors());




const {requireAuth} = require('./middleware/auth.middleware');
app.get('/jwtid', requireAuth, (req, res) => {

   res.json(res.locals.admin.id);
});


app.use("/uploads", express.static(path.join("uploads")));

app.use('/api/admin', adminRoutes);
app.use('/api/article',articleRoutes);
app.use('/api/infos', infosRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "public" , "index.html"));
  });
}
else {
   app.use(express.static("./blog/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./blog/build/index.html"));
  });
 }

app.listen(process.env.PORT || 5000 , () => {
  console.log(`Listenning on PORT ${process.env.PORT}`);
});
