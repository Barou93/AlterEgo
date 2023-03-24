import axios from 'axios';

export const GET_INFOS = 'GET_INFOS';

export const getInfos = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/infos`)
      .then((res) => {
        dispatch({type: GET_INFOS, payload: res.data});
      })
      .catch((err) => console.log(err));
  };
};
