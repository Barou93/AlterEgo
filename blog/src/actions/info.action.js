import axios from "axios";

export const READ_INFOS = "READ_INFOS";
export const DELETE_INFOS = "DELETE_INFOS";

export const readInfos = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/infos/${id}`)
      .then((res) => {
        dispatch({type: READ_INFOS, payload: res.data});
      })
      .catch((err) => console.log(err));
  };
};

export const deleteInfos = (id) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/infos/${id}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({type: DELETE_INFOS, payload: {id}});
      })
      .catch((err) => console.log(err));
  };
};
