import React from "react";
import {useDispatch} from "react-redux";
import {deleteAdmin} from "../../actions/admin.action";

const DeleteAdmin = (props) => {
  const dispatch = useDispatch();
  const removeAdmin = () => {
    dispatch(deleteAdmin(props.id));
    window.location = "/";
  };
  return (
    <button
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer votre compte ?")) {
          removeAdmin();
        }
      }}
      className="edit__btn new__btn delete_user"
    >
      Supprimer le compte
    </button>
  );
};

export default DeleteAdmin;
