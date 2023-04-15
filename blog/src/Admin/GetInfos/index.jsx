import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getInfos} from "../../actions/infos.action";
import {isEmpty} from "../../Components/Utils";
import {dateFormater} from "../../Components/HumanReadableDateFormat";
import DeleteInfos from "../DeleteInfos";
import Pagination from "../../Components/Pagination";

const GetInfos = () => {
  const [messagePerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const messages = useSelector((state) => state.infosReducer);
  const [allMessages, setAllMessages] = useState([]);

  const [loadMessage, setLoadMessage] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    
      dispatch(getInfos());
      setAllMessages(messages);
    setLoadMessage(true);
  }, [messages, dispatch]);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const lastPage = currentPage * messagePerPage;
  const firstPage = lastPage - messagePerPage;
  const currentMessages = Object.values(allMessages).slice(firstPage, lastPage);
  return (
    <div className="dashboard__content__container">
      
      {loadMessage && !isEmpty(currentMessages[0]) && (
         <div className="dashboard__content__container__inbox">
        <h1 className="dashboard__title">Boite de réception</h1>
        <div className="dashboard__content__container__inbox__container">
          <div className="dashboard__content__container__inbox__menu">
            <table className="content-table">
              <thead>
                <tr className="menu-item">
                  <th>Noms</th>
                  <th>Emails</th>
                  <th>Contacts</th>
                  <th>Dates</th>
                  <th>Consulter</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                {!isEmpty(currentMessages[0]) &&
                  currentMessages.map((message) => {
                    return (
                      <>
                        <tr key={message.id}>
                          <td>{message.name}</td>
                          <td>{message.email}</td>
                          <td>{message.phone}</td>
                          <td>{dateFormater(message.createdAt)}</td>
                          <td>
                            <Link
                               aria-label={`Consulter le message de  ${message.name}`}
                              className="message_link"
                              to={`/admin/message/${message.id}`}
                            >
                              Lire le message
                            </Link>
                          </td>
                          <td className="btn-container">
                            <DeleteInfos id={message.id} />
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          totalArticles={allMessages.length}
          articlePerPage={messagePerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      )}
      {isEmpty(currentMessages[0]) && (
              <h1 className="empty-article dash-empty ct-center">
                La boite de réception est vide
              </h1>
            )}
    </div>
  );
};

export default GetInfos;
