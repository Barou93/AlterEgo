import DOMPurify from "dompurify";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {readArticle} from "../../actions/article.action";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import {isEmpty} from "../../Components/Utils";

const Article = () => {
  const admins = useSelector((state) => state.adminsReducer);
  const article = useSelector((state) => state.articleReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const {id: articleId} = useParams();
  //console.log(article);
  useEffect(() => {
    if (loading) {
      dispatch(readArticle(articleId));
    }
  }, [loading, dispatch, articleId]);
  return (
    <>
      <Header />
      <main className="blog__single page-s">
        <div className="blog__single__container">
          <h1 className="blog__single__headline">{article.title} </h1>
          <div className="blog__single__infos">
            <span className="blog__single__infos__date">
              Posté le {dateFormater(article.createdAt)}
            </span>

            <span className="blog__single__infos__author">
              Par {""}
              {!isEmpty(admins[0]) &&
                admins.map((admin) => {
                  if (admin.id === article.adminId) return admin.username;
                  return null;
                })}
            </span>
          </div>
          <div className="blog__single__img">
            {article.image !== null ? (
              <img src={article.image} alt="l'article sur l'expérience" />
            ) : null}
          </div>
          <div className="blog__single__text">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content),
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Article;
