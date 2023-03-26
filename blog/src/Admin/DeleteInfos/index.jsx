import React from "react";
import {useDispatch} from "react-redux";
import {deleteInfos} from "../../actions/info.action";

const DeleteInfos = (props) => {
  const dispatch = useDispatch();
  const deleteMessage = () => dispatch(deleteInfos(props.id));
  return (
    <button
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce message ?")) {
          deleteMessage();
        }
      }}
      className="delete__article"
    >
      Supprimer
    </button>
  );
};

export default DeleteInfos;
