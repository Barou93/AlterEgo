import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {readInfos} from "../../actions/info.action";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import DeleteInfos from "../DeleteInfos";
const ReadInfos = () => {
  const [isLoad, setIsLoad] = useState(true);
  const message = useSelector((state) => state.infoReducer);
  const dispatch = useDispatch();

  const {id: messageId} = useParams();
  useEffect(() => {
    if (isLoad) {
      dispatch(readInfos(messageId));
      //setIsLoad(false);
    }
  }, [dispatch, isLoad, messageId]);

  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__readinfos">
        {isLoad && (
          <>
            <h1>Message de {message.name}</h1>
            <div className="dashboard__content__readinfos__container">
              <div className="dashboard__content__readinfos__userinfos">
                <div className="dashboard__content__readinfos__userinfos__contact">
                  <p>{message.name} </p>
                  <span>{message.email}</span>
                </div>
                <div className="dashboard__content__readinfos__userinfos__date">
                  {dateFormater(message.createdAt)}
                </div>
              </div>
              <div className="dashboard__content__readinfos__message">
                <p>{message.message}</p>
              </div>
            </div>
            <div className="dashboard__content__create__article__submit msg__btns">
              <Link to="/admin/message" className="delete__article cancel">
                Retour
              </Link>

              <DeleteInfos id={message.id} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReadInfos;
