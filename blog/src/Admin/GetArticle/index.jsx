import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getArticles} from "../../actions/articles.action";
import DOMPurify from "dompurify";
import Pagination from "../../Components/Pagination";
import {isEmpty} from "../../Components/Utils";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import DeleteArticle from "../DeleteArticle";


const GetArticle = () => {
  const [articlePerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const articles = useSelector((state) => state.articlesReducer);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  

  useEffect(() => {
      dispatch(getArticles());
      setAllArticles(articles);
      setLoading(true);
    
  }, [dispatch, articles]);
 



  const paginate = (page) => {
    setCurrentPage(page);
  };

  const lastPageIndex = currentPage * articlePerPage;
  const firstPageIndex = lastPageIndex - articlePerPage;
  const currentArticles = Object.values(allArticles).slice(
    firstPageIndex,
    lastPageIndex
  );

  return (
    <div className="dashboard__content__container">
    
      {loading && !isEmpty(currentArticles[0]) && (
        <div className="dashboard__content__container__inbox">
          <div className="dashboard__content__container__header">
            <h1 className="dashboard__title">Tous les articles</h1>
            <Link
               aria-label={`créer un nouveau article`}
              to={"/admin/article/create"}
              className="dashboard__content__insight__create add_article"
            >
              Créer un article
            </Link>
          </div>
          <div className="dashboard__content__container__inbox__container">
            <div className="dashboard__content__container__inbox__menu">
              <table>
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Contenu</th>
                    <th>Date de publication</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {!isEmpty(currentArticles[0]) &&
                    currentArticles.map((article) => {
                      return (
                        <>
                          <tr key={article.id}>
                            <td>{article.title}</td>
                            <td className="content-blog">
                              <div
                                className="content"
                                dangerouslySetInnerHTML={{
                                  __html: DOMPurify.sanitize(article.content),
                                }}
                              />
                            </td>
                            <td>{dateFormater(article.createdAt)}</td>

                            <td className="btn-container">
                              <Link
                                 aria-label={`Modifier l'article ${article.title}`}
                                to={`/admin/article/update-article/${article.id}`}
                                className="update__article"
                              >
                                Modifier
                              </Link>
                            </td>
                            <td className="btn-container">
                              <DeleteArticle id={article.id} />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination
            totalArticles={allArticles.length}
            articlePerPage={articlePerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}{" "}
    </div>
  );
};

export default GetArticle;
