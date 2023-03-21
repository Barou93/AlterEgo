import React, {useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../../Pages/Home';
import Contact from '../../Pages/Contact';
import Blog from '../../Pages/Blog';
import Article from '../../Pages/Article';
import About from '../../Pages/About';
import CreateArticle from '../../Admin/CreateArticle';
import GetArticle from '../../Admin/GetArticle';
import ReadArticle from '../../Admin/ReadArticle';
import Register from '../../Admin/Register';
import Login from '../../Admin/Login';
import GetInfos from '../../Admin/GetInfos';
import Profil from '../../Admin/Profil';
import ReadInfos from '../../Admin/ReadInfos';
import UpdateArticle from '../../Admin/UpdateArticle';
import DeleteArticle from '../../Admin/DeleteArticle';
import DeleteInfos from '../../Admin/DeleteInfos';
import Sidebar from '../Sidebar';
import Dashboard from '../../Admin/Dashboard';

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Article />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin/inscription" element={<Register />} />
      <Route path="/admin/connexion" element={<Login />} />
      <Route path="/admin" element={<Sidebar />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/article/create" element={<CreateArticle />} />
        <Route path="/admin/message" element={<GetInfos />} />
        <Route path="/admin/article" element={<GetArticle />} />
        <Route path="/admin/article/:id" element={<ReadArticle />} />
        <Route path="/admin/message/1" element={<ReadInfos />} />
        <Route
          path="/admin/article/update-article"
          element={<UpdateArticle />}
        />
        <Route
          path="/admin/article/delete-article"
          element={<DeleteArticle />}
        />
        <Route path="/admin/message/delete-infos" element={<DeleteInfos />} />
        <Route path="/admin/profil/" element={<Profil />} />
      </Route>
    </Routes>
  );
};

export default index;