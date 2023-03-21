import React from 'react';
import BlogWoman from '../../styles/assets/icons/blog_woman.svg';

const GetArticle = () => {
  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__container__articles">
        <h1 className="dashboard__content__container__articles__title">
          Tous les articles
        </h1>
        <div className="dashboard__content__container__articles__container">
          <div className="dashboard__content__container__articles__contents">
            <div className="dashboard__content__container__articles__img">
              <img src={BlogWoman} alt="les articles" />
            </div>
            <div className="dashboard__content__container__articles__content">
              <p>Expérience Client</p>
            </div>
            <div className="dashboard__content__container__articles__btns">
              <button className="updated__article">Modifier</button>
              <button className="delete__article">Supprimer</button>
            </div>
          </div>
          <div className="dashboard__content__container__articles__contents">
            <div className="dashboard__content__container__articles__img">
              <img src={BlogWoman} alt="les articles" />
            </div>
            <div className="dashboard__content__container__articles__content">
              <p>Expérience Client</p>
            </div>
            <div className="dashboard__content__container__articles__btns">
              <button className="updated__article">Modifier</button>
              <button className="delete__article">Supprimer</button>
            </div>
          </div>
          <div className="dashboard__content__container__articles__contents">
            <div className="dashboard__content__container__articles__img">
              <img src={BlogWoman} alt="les articles" />
            </div>
            <div className="dashboard__content__container__articles__content">
              <p>Expérience Client</p>
            </div>
            <div className="dashboard__content__container__articles__btns">
              <button className="updated__article">Modifier</button>
              <button className="delete__article">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetArticle;
