import React, { useContext } from "react";
import Login from "../../Admin/Login";
import { UidContext } from "../AppContext";
import Sidebar from "../Sidebar";

const Private = () => {
   const uid = useContext(UidContext);
   return uid ? <Sidebar /> : <Login />;
};

export default Private;
