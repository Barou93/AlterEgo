import {useEffect, useState} from "react";
import axios from "axios";
import Routes from "./Components/Routes";
import {UidContext} from "./Components/AppContext";
import {useDispatch} from "react-redux";
import {getAdmin} from "./actions/admin.action";

// //import Loader from "./Components/Loader";

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  //const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchAdmin = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token" + err.message));
    };
    fetchAdmin();
    //     // if (loader) {
    //     //   const timer = setTimeout(() => {
    //     //     setLoader(false);
    //     //   }, 800);
    //     //   return () => {
    //     //     clearTimeout(timer);
    //     //   };
    //     // }

    if (uid) dispatch(getAdmin(uid));
  }, [uid, dispatch]);
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
