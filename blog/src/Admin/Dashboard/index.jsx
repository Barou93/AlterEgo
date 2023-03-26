import React, {useContext, useEffect, useState} from "react";
import BlogWoman from "../../styles/assets/icons/blog_woman.svg";
import RecentArticle from "../../styles/assets/icons/article.svg";
import RecentMessage from "../../styles/assets/icons/message.svg";
import TotalArticles from "../../styles/assets/icons/article.svg";
import {Link} from "react-router-dom";
import {UidContext} from "../../Components/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../../Components/Utils";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import DOMPurify from "dompurify";
import {getArticles} from "../../actions/articles.action";

const Dashboard = () => {
  const uid = useContext(UidContext);
  const adminData = useSelector((state) => state.adminReducer);
  const adminsData = useSelector((state) => state.adminsReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [allNews, setAllNews] = useState([]);

  const articles = useSelector((state) => state.articlesReducer);
  const messages = useSelector((state) => state.infosReducer);

  useEffect(() => {
    if (loading) {
      dispatch(getArticles());
      setAllNews(articles);
    }
  }, [dispatch, articles, loading]);

  //console.log(allNews.length);
  const currentArticles = Object.values(allNews).slice(0, 3);
  //console.log(currentArticles);

  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__main">
        <div className="dashboard__content__article">
          <div className="dashboard__content__insight">
            <h1 className="dashboard__content__insight__title">
              Bonjour {adminData.username}
            </h1>
            <Link
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
          <h2>Derniers articles</h2>
          {!isEmpty(currentArticles[0]) &&
            currentArticles.map((article, index) => {
              return (
                <div
                  key={index}
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
                      <Link className="read_one" to={`/blog/${article.id}`}>
                        Lire l'article
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
    </div>
  );
};

export default Dashboard;
