import React, {useEffect, useState} from "react";
import BlogWoman from "../../styles/assets/icons/blog_woman.svg";
import RecentArticle from "../../styles/assets/icons/article.svg";
import RecentMessage from "../../styles/assets/icons/message.svg";

import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../../Components/Utils";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import DOMPurify from "dompurify";
import {getArticles} from "../../actions/articles.action";
//import LoaderData from "../../Components/LoaderData";

const Dashboard = () => {
  const adminData = useSelector((state) => state.adminReducer);
  const adminsData = useSelector((state) => state.adminsReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState([]);

  const articles = useSelector((state) => state.articlesReducer);
  const messages = useSelector((state) => state.infosReducer);

  useEffect(() => {
    dispatch(getArticles());
    setAllNews(articles);
    setLoading(true);
  }, [articles, dispatch]);

  const currentArticles = Object.values(allNews).slice(0, 3);

  return (
    <div className="dashboard__content__container">
      <>
        <div className="dashboard__content__main">
          <div className="dashboard__content__article">
            <div className="dashboard__content__insight">
              <h1 className="dashboard__content__insight__title">
                Bonjour {adminData.username}
              </h1>
              <Link
                aria-label={`créer un nouveau article`}
                to={"/admin/article/create"}
                className="dashboard__content__insight__create"
              >
                Créer un article
              </Link>
            </div>
            <div className="dashboard__content__img">
              <img src={BlogWoman} alt="icon blogeur dashboard menu" />
            </div>
          </div>
          <div className="dashboard__content__recentarticles">
            {!isEmpty(currentArticles[0]) ? <h2>Derniers articles</h2> : ""}
            {loading &&
              !isEmpty(currentArticles[0]) &&
              currentArticles.map((article) => {
                return (
                  <div
                    key={article.id}
                    className="dashboard__content__recentarticles__container"
                  >
                    <div className="dashboard__content__recentarticles__img">
                      {article.image !== null ? (
                        <img src={article.image} alt="article pic" />
                      ) : null}
                    </div>
                    <div className="dashboard__content__recentarticles__text content-blog">
                      <div
                        className="content art"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(article.content),
                        }}
                      />
                      <div className="dashboard__content__recentarticles__infos">
                        <span>{dateFormater(article.createdAt)}</span>
                        <p>
                          {" "}
                          publié par{" "}
                          {!isEmpty(adminsData[0]) &&
                            adminsData
                              .map((admin) => {
                                if (admin.id === article.adminId)
                                  return admin.username;
                                return null;
                              })
                              .join("")}
                        </p>
                        <Link
                          aria-label={`Lire un article`}
                          className="read_one"
                          to={`/blog/${article.id}`}
                        >
                          Lire l'article
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            {isEmpty(currentArticles[0]) && (
              <h1 className="empty-article dash-empty">
                Aucun articles disponible
              </h1>
            )}
          </div>
        </div>
        <div className="dashboard__content__aside">
          <div className="dashboard__content__aside__box">
            <div className="dashboard__content__aside__box__img">
              <img src={RecentArticle} alt="article recent blog" />
            </div>
            <div className="dashboard__content__aside__box__text">
              <p>{currentArticles.length}</p>
              <span>Articles récents</span>
            </div>
          </div>
          <div className="dashboard__content__aside__box yellow-box">
            <div className="dashboard__content__aside__box__img">
              <img src={RecentMessage} alt="message recent blog" />
            </div>
            <div className="dashboard__content__aside__box__text">
              <p>{messages.length}</p>
              <span>Messages récents</span>
            </div>
          </div>
          <div className="dashboard__content__aside__box">
            <div className="dashboard__content__aside__box__img">
              <img src={RecentArticle} alt="article recent blog" />
            </div>
            <div className="dashboard__content__aside__box__text">
              <p>{articles.length}</p>
              <span>Total des articles</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
