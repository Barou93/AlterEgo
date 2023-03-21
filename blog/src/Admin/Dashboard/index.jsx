import React, {useContext} from 'react';
import BlogWoman from '../../styles/assets/icons/blog_woman.svg';
import RecentArticle from '../../styles/assets/icons/article.svg';
import RecentMessage from '../../styles/assets/icons/message.svg';
import TotalArticles from '../../styles/assets/icons/article.svg';
import {Link} from 'react-router-dom';
import {UidContext} from '../../Components/AppContext';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const uid = useContext(UidContext);
  const adminData = useSelector((state) => state.adminReducer);
  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__main">
        <div className="dashboard__content__article">
          <div className="dashboard__content__insight">
            <h1 className="dashboard__content__insight__title">
              Bonjour {adminData.username}
            </h1>
            <Link
              to={'/admin/article/create'}
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
          <div className="dashboard__content__recentarticles__container">
            <div className="dashboard__content__recentarticles__img">
              <img src={BlogWoman} alt="article pic" />
            </div>
            <div className="dashboard__content__recentarticles__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus praesentium sed suscipit quia facilis, vero nulla
                distinctio sint quas ad dolorum, harum aperiam optio excepturi,
                illo consequatur officia repellat placeat.
              </p>
              <span>11 Février 2023</span>
            </div>
            <div className="dashboard__content__recentarticles__infos">
              <p>Oumar Mauret</p>
            </div>
          </div>
          <div className="dashboard__content__recentarticles__container">
            <div className="dashboard__content__recentarticles__img">
              <img src={BlogWoman} alt="article pic" />
            </div>
            <div className="dashboard__content__recentarticles__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus praesentium sed suscipit quia facilis, vero nulla
                distinctio sint quas ad dolorum, harum aperiam optio excepturi,
                illo consequatur officia repellat placeat.
              </p>
              <span>11 Février 2023</span>
            </div>
            <div className="dashboard__content__recentarticles__infos">
              <p>Oumar Mauret</p>
            </div>
          </div>
          <div className="dashboard__content__recentarticles__container">
            <div className="dashboard__content__recentarticles__img">
              <img src={BlogWoman} alt="article pic" />
            </div>
            <div className="dashboard__content__recentarticles__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus praesentium sed suscipit quia facilis, vero nulla
                distinctio sint quas ad dolorum, harum aperiam optio excepturi,
                illo consequatur officia repellat placeat.
              </p>
              <span>11 Février 2023</span>
            </div>
            <div className="dashboard__content__recentarticles__infos">
              <p>Oumar Mauret</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__content__aside">
        <div className="dashboard__content__aside__box">
          <div className="dashboard__content__aside__box__img">
            <img src={RecentArticle} alt="article recent blog" />
          </div>
          <div className="dashboard__content__aside__box__text">
            <p>15</p>
            <span>Articles récents</span>
          </div>
        </div>
        <div className="dashboard__content__aside__box yellow-box">
          <div className="dashboard__content__aside__box__img">
            <img src={RecentMessage} alt="message recent blog" />
          </div>
          <div className="dashboard__content__aside__box__text">
            <p>10</p>
            <span>Messages récents</span>
          </div>
        </div>
        <div className="dashboard__content__aside__box">
          <div className="dashboard__content__aside__box__img">
            <img src={RecentArticle} alt="article recent blog" />
          </div>
          <div className="dashboard__content__aside__box__text">
            <p>50</p>
            <span>Total des articles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
