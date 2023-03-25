import axios from "axios";

export const GET_ADMIN = "GET_ADMIN";
export const UPDATE_ADMIN = "UPDATE_ADMIN";
export const DELETE_ADMIN = "DELETE_ADMIN";

export const getAdmin = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/admin/${id}`)
      .then((res) => {
        dispatch({type: GET_ADMIN, payload: res.data});
      })
      .catch((err) => console.log(err));
  };
};

export const updateAdmin = (id, data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/admin/${id}`,
      data,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({type: UPDATE_ADMIN, payload: {id, data}});
      })
      .catch((err) => console.log(err));
  };
};

export const deleteAdmin = (id) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/admin/${id}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({type: DELETE_ADMIN, payload: {id}});
      })
      .catch((err) => console.log(err));
  };
};
