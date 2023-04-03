import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAdmin, updateAdmin} from "../../actions/admin.action";
import DeleteAdmin from "../DeleteAdmin";

const Profil = () => {
  const [editName, setEditName] = useState("");
  const [updateUsername, setUpdateUsername] = useState(false);
  const [loadUsername, setLoadUsername] = useState(true);
  const adminData = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadUsername) {
      dispatch(getAdmin(adminData.id));
    } else {
      setLoadUsername(false);
    }
  }, [loadUsername, dispatch, adminData]);

  const handleUpdateName = async () => {
    if (editName) {
      const data = new FormData();
      data.append("username", editName);
      await dispatch(updateAdmin(adminData.id, data));
      setUpdateUsername(false);
      window.location = "/admin/dashboard";
    } else {
      console.log("Impossible de modifier votre nom réessayer svp!");
    }
  };

  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__profil">
        <h1 className="dashboard__title">Modifier vos informations</h1>
        <div className="dashboard__content__profil__container">
          <form
            onSubmit={handleUpdateName}
            className="dashboard__content__profil__form"
          >
            <div className="dashboard__content__profil__form__input">
              <label htmlFor="username">Nom d'utilisateur</label>
              {updateUsername === false && (
                <p className="edit__input edit__text">{adminData.username} </p>
              )}
              {updateUsername && (
                <input
                  defaultValue={adminData.username}
                  onChange={(e) => setEditName(e.target.value)}
                  type="text"
                  className="edit__input"
                />
              )}
            </div>
            <div className="dashboard__content__profil__form__input">
              <label htmlFor="username">Email</label>
              <input
                readOnly
                value={adminData.email}
                className="input__readonly"
                type="text"
              />
            </div>
            <div className="dashboard__content__profil__form__input">
              <label htmlFor="username">Mot de passe</label>
              <input
                readOnly
                value={adminData.password}
                className="input__readonly"
                type="password"
              />
            </div>
            <div className="dashboard__content__profil__btns">
              {updateUsername ? (
                <input
                  type="submit"
                  value="Enregistrer"
                  className="edit__btn"
                />
              ) : (
                <button
                  onClick={() => setUpdateUsername(!updateUsername)}
                  className="edit__btn new__btn"
                >
                  Modifier
                </button>
              )}
              {updateUsername ? (
                <Link
                  aria-label={`Annulter la modification du profile`}
                  onClick={() => setUpdateUsername(!updateUsername)}
                  className="cancel__btn"
                >
                  Annuler
                </Link>
              ) : null}
              <DeleteAdmin id={adminData.id} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;
