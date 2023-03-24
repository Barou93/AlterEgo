import React from 'react';
import {Link} from 'react-router-dom';
import DOMPurify, {sanitize} from 'isomorphic-dompurify';
const GetInfos = () => {
  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__container__inbox">
        <h1>Boite de reception</h1>
        <div className="dashboard__content__container__inbox__container">
          <div className="dashboard__content__container__inbox__menu">
            <table className="content-table">
              <thead>
                <tr className="menu-item">
                  <th>Noms</th>
                  <th>Emails</th>
                  <th>Contacts</th>
                  <th>Messages</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Oumar MAURET</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">oumarmauret@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">71246578</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Helene Cissokho</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">cissokhohelene@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">75475641</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
                <tr>
                  <td className="content-td">
                    <Link to="/infos/info">Saran Sidibe</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">sidibesaran@test.com</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">89423541</Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor totam aspernatur...
                    </Link>
                  </td>
                  <td className="content-td">
                    <Link to="/infos/info">12 Mars 2023</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInfos;
