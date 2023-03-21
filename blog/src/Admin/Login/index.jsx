import React, { useState } from "react";
import Logo from "../../styles/assets/icons/logo_alter_ego.svg";

import axios from "axios";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async (e) => {
      e.preventDefault();
      const emailError = document.querySelector(".email.errors");
      const passwordError = document.querySelector(".password.errors");
      console.log(emailError);
      console.log(passwordError);
      await axios({
         method: "post",
         url: `${process.env.REACT_APP_API_URL}api/admin/login`,
         withCredentials: true,
         data: {
            email,
            password,
         },
      }).then((res) => {
         console.log(res.data.errors);
         if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
         } else {
            window.location = "/admin/dashboard";
         }
      });
   };
   return (
      <div className="register rg">
         <div className="register__container">
            <div className="register__headlines">
               <div className="register__img">
                  <img src={Logo} alt="page d'inscription" />
               </div>
               <h1 className="register__title">Se connecter</h1>
            </div>
            <div className="register__box">
               <form onSubmit={handleLogin} className="register__box__form">
                  <div className="register__box__form__input">
                     <label htmlFor="email">Email</label>
                     <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        id="email"
                        className="input__box"
                        placeholder="Entrez votre email"
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
                        placeholder="Entrez votre mot de passe"
                     />
                  </div>
                  <div className="password errors"></div>
                  <br />
                  <input
                     className="register__submit"
                     type="submit"
                     value="Se connecter"
                  />
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
