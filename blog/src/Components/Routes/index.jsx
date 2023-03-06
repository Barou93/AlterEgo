import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Blog from "../../Pages/Blog";
import BlogContent from "../../Pages/BlogContent";
import About from "../../Pages/About";

const index = () => {
   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blogcontent" element={<BlogContent />} />
            <Route exact path="/about" element={<About />} />
         </Routes>
      </Router>
   );
};

export default index;
