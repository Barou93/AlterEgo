import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteArticle} from '../../actions/article.action';

const DeleteArticle = (props) => {
  const dispatch = useDispatch();
  const deletePost = () => {
    dispatch(deleteArticle(props.id));
  };
  return (
    <button
      onClick={() => {
        if (window.confirm('Voulez-vous supprimer cet article ?')) {
          deletePost();
        }
      }}
      className="delete__article"
    >
      Supprimer
    </button>
  );
};

export default DeleteArticle;
