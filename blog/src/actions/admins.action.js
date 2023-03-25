import axios from "axios";

export const GET_ADMINS = "GET_ADMINS";

export const getAdmins = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/admin`)
      .then((res) => {
        dispatch({type: GET_ADMINS, payload: res.data});
      })
      .catch((err) => console.log(err));
  };
};
