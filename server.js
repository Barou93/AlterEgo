const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

//Routes dependances
const adminRoutes = require("./routes/admin.routes");

const app = express();

require("dotenv").config("./.env");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
   origin: process.env.FRONT_URL,
   Credentials: true,
   allowedHeaders: ["sessionId", "Content-Type"],
   exposedHeaders: ["sessionId"],
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   preflightContinue: false,
};

app.use(cors(corsOptions));
const { requireAuth } = require("./middleware/auth.middleware");
app.get("/jwtId", requireAuth, (req, res) => {
   return res.status(200).json(res.locals.admin.id);
});

app.use("/api/admin", adminRoutes);
app.use("/uploads", express.static(path.join("uploads")));

app.listen(process.env.PORT, () => {
   console.log(`Listenning on PORT ${process.env.PORT}`);
});
