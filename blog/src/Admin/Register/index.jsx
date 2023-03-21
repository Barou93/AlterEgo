import React, { useState } from "react";
import Logo from "../../styles/assets/icons/logo_alter_ego.svg";
import { Navigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [formSubmit, setFormSubmit] = useState(false);

   const handleRegister = async (e) => {
      e.preventDefault();
      const usernameError = document.querySelector(".username.errors");
      const emailError = document.querySelector(".email.errors");
      const passwordError = document.querySelector(".password.errors");
      await axios({
         method: "post",
         url: `${process.env.REACT_APP_API_URL}api/admin/register`,
         withCredentials: true,
         data: {
            username,
            email,
            password,
         },
      })
         .then((res) => {
            if (res.data.errors) {
               usernameError.innerHTML = res.data.errors.username;
               emailError.innerHTML = res.data.errors.email;
               passwordError.innerHTML = res.data.errors.password;
            } else {
               setFormSubmit(true);
            }
         })
         .catch((err) => {
            console.log(err.message);
         });
   };
   return (
      <>
         {formSubmit ? (
            <Navigate to="/admin/connexion" />
         ) : (
            <div className="register rg">
               <div className="register__container">
                  <div className="register__headlines">
                     <div className="register__img">
                        <img src={Logo} alt="page d'inscription" />
                     </div>
                     <h1 className="register__title">S'inscrire</h1>
                  </div>
                  <div className="register__box">
                     <form
                        onSubmit={handleRegister}
                        className="register__box__form"
                     >
                        <div className="register__box__form__input">
                           <label htmlFor="username">Nom d'utilisateur</label>
                           <input
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              type="text"
                              id="username"
                              className="input__box"
                           />
                        </div>
                        <div className="username errors"></div>
                        <br />
                        <div className="register__box__form__input">
                           <label htmlFor="email">Email</label>
                           <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="text"
                              id="email"
                              className="input__box"
                           />
                        </div>
                        <div className="email errors"></div>
                        <br />
                        <div className="register__box__form__input">
                           <label htmlFor="password">Mot de passe</label>
                           <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              id="password"
                              className="input__box"
                           />
                        </div>
                        <div className="password errors"></div>
                        <br />
                        <input
                           className="register__submit"
                           type="submit"
                           value="S'inscrire"
                        />
                     </form>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default Register;
