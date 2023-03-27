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
  }, [isLoad, dispatch, articles]);

  const lastPageIndex = currentPage * articlePerPage;
  const firstPageIndex = lastPageIndex - articlePerPage;
  const currentPost = Object.values(allPost).slice(
    firstPageIndex,
    lastPageIndex
  );

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
              currentPost.map((post, index) => {
                return (
                  <article key={index} className="blog__resume">
                    <Link to={`/blog/${post.id}`} className="blog__resume__img">
                      {post.image !== null ? (
                        <img
                          src={post.image}
                          alt="contenu de l'article du blog "
                        />
                      ) : null}
                    </Link>
                    <div className="blog__resume__text">
                      <h2 className="blog__resume__text__insight">
                        <Link className="insight__link" to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <div className="blog__resume__text__infos">
                        <p>{dateFormater(post.createdAt)} </p>
                        {!isEmpty(admins[0]) &&
                          admins.map((admin) => {
                            if (admin.id === post.adminId)
                              return <span>{admin.username}</span>;
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
                  </article>
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
      </main>
      <Footer />
    </>
  );
};

export default Blog;
