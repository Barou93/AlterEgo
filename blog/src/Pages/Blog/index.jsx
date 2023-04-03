import React, {useEffect, useState} from "react";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header";
import {getArticles} from "../../actions/articles.action";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../../Components/Pagination";
import {isEmpty} from "../../Components/Utils";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import DOMPurify from "dompurify";
import LoaderData from "../../Components/LoaderData";

const Blog = () => {
  const [articlePerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const articles = useSelector((state) => state.articlesReducer);
  const [allPost, setAllPost] = useState([]);
  const admins = useSelector((state) => state.adminsReducer);
  const [isLoad, setIsload] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
    setAllPost(articles);
    setIsload(true);
  }, [dispatch, articles]);

  const lastPageIndex = currentPage * articlePerPage;
  const firstPageIndex = lastPageIndex - articlePerPage;
  const currentPost = Object.values(allPost).slice(firstPageIndex,lastPageIndex);
   //const currentPost = allPost.map(o => Object.fromEntries(Object.entries(o).slice(0, 3)));
   //console.log(currentPost);

  //console.log(currentPost);
  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      
      <main className="container">
        {isLoad?isLoad : <LoaderData />}
        {isLoad && !isEmpty(currentPost[0]) && (
           <div className="blog">
          <div className="blog__container">
            {!isEmpty(currentPost[0]) &&
              articles.map((post) => {
                return (
                  <li key={post.id} className="blog__resume">
                    <Link to={`/blog/${post.id}`}
                          aria-label={`l'illustration de l'article ${post.title}`}
                          className="blog__resume__img">
                      {post.image !== null ? (
                        <img
                          src={post.image}
                          
                          alt="contenu de l'article du blog "
                        />
                      ) : null}
                    </Link>
                    <div className="blog__resume__text">
                      <h2 className="blog__resume__text__insight">
                        <Link className="insight__link"
                              aria-label={`le titre  de l'article`}
                              to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <div className="blog__resume__text__infos">
                        <p>{dateFormater(post.createdAt.toUpperCase())} </p>
                        {!isEmpty(admins[0]) &&
                          admins.map((admin) => {
                            if (admin.id === post.adminId)
                              return <span>{admin.username.toUpperCase()}</span>;
                            return null;
                          })}
                      </div>

                      <div className="blog__resume__text__details">
                        <div
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.content),
                          }}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}

          </div>
          <Pagination
            totalArticles={allPost.length}
            articlePerPage={articlePerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        )}
        {isEmpty(currentPost[0]) && (<h1 className="empty-article">Pas d'articles pour le moment</h1>) }
      </main>
      <Footer />
    </>
  );
};

export default Blog;
