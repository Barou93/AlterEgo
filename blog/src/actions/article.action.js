import axios from 'axios';

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const READ_ARTICLE = 'READ_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const createArticle = (data) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/article/new`,
      data,
      withCredentials: true,
    });
  };
};

export const readArticle = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/article/${id}`)
      .then((res) => {
        dispatch({type: READ_ARTICLE, payload: res.data});
      })
      .catch((err) => console.log(err));
  };
};

export const updateArticle = (id, data) => {
  return (dispatch) => {
    return axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}api/article/${id}`,
      data,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({type: UPDATE_ARTICLE, payload: {id, data}});
      })
      .catch((err) => console.log(err));
  };
};

export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}api/article/${id}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({type: DELETE_ARTICLE, payload: {id}});
      })
      .catch((err) => console.log(err));
  };
};
