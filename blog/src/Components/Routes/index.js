import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import Loader from "../../Components/Loader";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Blog from "../../Pages/Blog";
import Article from "../../Pages/Article";
import About from "../../Pages/About";
import CreateArticle from "../../Admin/CreateArticle";
import GetArticle from "../../Admin/GetArticle";
import Register from "../../Admin/Register";
import Login from "../../Admin/Login";
import GetInfos from "../../Admin/GetInfos";
import Profil from "../../Admin/Profil";
import ReadInfos from "../../Admin/ReadInfos";
import UpdatedArticle from "../../Admin/UpdatedArticle";
import DeleteArticle from "../../Admin/DeleteArticle";
import DeleteInfos from "../../Admin/DeleteInfos";
import Sidebar from "../Sidebar";
import Dashboard from "../../Admin/Dashboard";
import ProtectedRoutes from "../ProtectedRoutes";

// const Home = lazy(() => import("../../Pages/Home"));
// const Blog = lazy(() => import("../../Pages/Blog"));
// const Article = lazy(() => import("../../Pages/Article"));
// const About = lazy(() => import("../../Pages/About"));
// const Contact = lazy(() => import("../../Pages/Contact"));
// const CreateArticle = lazy(() => import("../../Admin/CreateArticle"));
// const GetArticle = lazy(() => import("../../Admin/GetArticle"));
// const Register = lazy(() => import("../../Admin/Register"));
// const Login = lazy(() => import("../../Admin/Login"));
// const GetInfos = lazy(() => import("../../Admin/GetInfos"));
// const Profil = lazy(() => import("../../Admin/Profil"));
// const ReadInfos = lazy(() => import("../../Admin/ReadInfos"));
// const UpdatedArticle = lazy(() => import("../../Admin/UpdatedArticle"));
// const DeleteArticle = lazy(() => import("../../Admin/DeleteArticle"));
// const Sidebar = lazy(() => import("../Sidebar"));
// const Dashboard = lazy(() => import("../../Admin/Dashboard"));
// const DeleteInfos = lazy(() => import("../../Admin/DeleteInfos"));

const index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/inscription" element={<Register />} />
        <Route path="/admin/connexion" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Sidebar />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/article/create" element={<CreateArticle />} />
            <Route path="/admin/message" element={<GetInfos />} />
            <Route path="/admin/article" element={<GetArticle />} />
            <Route path="/admin/message/:id" element={<ReadInfos />} />
            <Route
              path="/admin/article/update-article/:id"
              element={<UpdatedArticle />}
            />
            <Route
              path="/admin/article/delete-article"
              element={<DeleteArticle />}
            />
            <Route
              path="/admin/message/delete-infos"
              element={<DeleteInfos />}
            />
            <Route path="/admin/profil/" element={<Profil />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default index;
