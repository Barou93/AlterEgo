import React, {useEffect, useState} from "react";
import InsightImg from "../../styles/assets/icons/teamwork.svg";
import asideImg1 from "../../styles/assets/icons/Girl Mid.svg";
import asideImg2 from "../../styles/assets/icons/Man Top.svg";
import asideImg3 from "../../styles/assets/icons/Girl Mid2.svg";
import perception from "../../styles/assets/icons/icon-perception.png";
import emotions from "../../styles/assets/icons/icon-perception.png";
import wallet from "../../styles/assets/icons/🦆 icon _wallet_.svg";
import improve from "../../styles/assets/icons/improve.svg";
import handshake from "../../styles/assets/icons/handshake.svg";
import growth from "../../styles/assets/icons/growth.svg";
import cost from "../../styles/assets/icons/cost.svg";
import step from "../../styles/assets/icons/Etapes_1.png";
import strat from "../../styles/assets/icons/strat_1.png";
import training from "../../styles/assets/icons/training.svg";
import articleImg from "../../styles/assets/icons/article-img.svg";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../actions/articles.action";
import {Link} from "react-router-dom";
import axios from "axios";
import {isEmpty} from "../Utils";

const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [allArticles, setAllArticles] = useState([]);
  const articles = useSelector((state) => state.articlesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
    setAllArticles(articles);
  }, [dispatch, articles]);

  const currentArticles = Object.values(allArticles).slice(0, 3);

  const handlePostMessage = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/infos`,
      withCredentials: true,
      data: {
        name,
        email,
        phone,
        message,
      },
    }).then((res) => {
      if (res.data) {
        alert("Votre message a été bien envoyé");
        cancelPost();
      }
    });
  };

  const cancelPost = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <main className="main">
      <article className="insight">
        <h1 className="insight__title">
          Alter Ego est le seul cabinet de conseil <br /> en
          <strong className="insight__title__strong">Expérience Client</strong>
          au Mali
        </h1>
        <img
          className="insight__img"
          src={InsightImg}
          alt="icon-présentation"
        />
      </article>
      <aside className="aside">
        <hgroup className="aside__hgroup">
          <h1 className="aside__hgroup__title">Qui sommes-nous ?</h1>
          <h2 className="aside__hgroup__details">
            Nous nous engageons à vos côtés afin de vous assister dans la mise
            en place d’une une véritable culture d’entreprise <br />
            orientée clients à travers une approche structurée et progressive.
            Cela passe par :
          </h2>
        </hgroup>
        <div className="aside__infos">
          <p>
            <strong className="aside__infos__strong">La COMPREHENSION</strong>{" "}
            de votre vision <br /> votre ambition tout en évaluant la
            compétitivité <br /> dans votre secteur d’activité.
          </p>
          <img
            src={asideImg1}
            alt="icon faisant une proposition aux clients"
            className="aside__infos__img"
          />
        </div>
        <div className="aside__infos reverse">
          <p>
            <strong className="aside__infos__strong">La PROPOSITION</strong>{" "}
            d’une stratégie personnalisée <br /> pour construire une relation
            client solide <br /> et pérenne.
          </p>
          <img
            src={asideImg2}
            alt="icon fille qui comprend le besoin du client"
            className="aside__infos__img"
          />
        </div>
        <div className="aside__infos">
          <p>
            <strong className="aside__infos__strong">L’ANALYSE</strong> des
            données issues d’enquêtes <br />
            tant au niveau de vos collaborateurs <br />
            que de vos clients.
          </p>
          <img
            src={asideImg3}
            alt="icon fille qui fait une analyse des besoins du client"
            className="aside__infos__img"
          />
        </div>
      </aside>
      <section className="section">
        <div className="section__insight">
          <h1 className="section__insight__title">
            Qu’est-ce que l’{" "}
            <strong className="section__insight__strong">
              expérience client ?
            </strong>
          </h1>
          <blockquote className="section__blockquote">
            <q>
              {" "}
              <em>
                L’expérience client est l’ensemble des <span>perceptions</span>{" "}
                <br /> et <span>émotions</span> qu’une organisation procure à
                ses acheteurs <br /> lorsqu’ils entrent en contact avec elle.
              </em>
            </q>
          </blockquote>
        </div>
        <div className="illustration">
          <div className="illustration__content">
            <img
              src={perception}
              alt="icon-perception"
              className="illustration__img"
            />
            <p>Perception</p>
          </div>
          <div className="illustration__content">
            <img
              src={emotions}
              alt="icon-emotions"
              className="illustration__img emojis"
            />
            <p className="emojis-p">Émotions</p>
          </div>
        </div>
        <article className="user-experience">
          <h1 className="user-experience__title">
            L’expérience client en quoi c’est utile ?
          </h1>
          <div className="user-experience__container">
            <figure className="user-experience__figure">
              <img src={wallet} alt="" className="user-experience__img" />
              <figcaption className="user-experience__infos">
                Générer des revenus et améliorer <br /> la valeur vie client{" "}
              </figcaption>
            </figure>
            <figure className="user-experience__figure">
              <img src={improve} alt="" className="user-experience__img" />
              <figcaption className="user-experience__infos">
                Augmenter la fidélité et la probabilité <br /> de recommandation
                des acheteurs{" "}
              </figcaption>
            </figure>
          </div>

          <div className="user-experience__container">
            <figure className="user-experience__figure">
              <img src={handshake} alt="" className="user-experience__img" />
              <figcaption className="user-experience__infos">
                Améliorer la valeur de sa marque
              </figcaption>
            </figure>
          </div>
          <div className="user-experience__container">
            <figure className="user-experience__figure">
              <img src={growth} alt="" className="user-experience__img" />
              <figcaption className="user-experience__infos">
                Renforcer le lien avec le public cible <br /> et anticiper les
                changements comportementaux
              </figcaption>
            </figure>
            <figure className="user-experience__figure">
              <img src={cost} alt="" className="user-experience__img cost" />
              <figcaption className="user-experience__infos cost-p">
                Réduire ses coûts <br /> et optimiser ses investissements
              </figcaption>
            </figure>
          </div>
        </article>

        <div className="work">
          <h1 className="work__title">Notre méthodologie de travail </h1>
          <article className="work__content">
            <hgroup className="work__content__hgroup">
              <h2 className="work__content__hgroup__headlines">Audit</h2>
              <h3 className="work__content__smalltitle">
                Notre audit permet d’évaluer votre entreprise en termes
                d’Expérience Client. Cette analyse nous permettra de fournir un
                premier bilan qui servira d’instrument de prise de décision et à
                la mise en place d’une stratégie CX. A la fin de l’audit, le
                rapport établi fournit le niveau de maturité actuel, propose des
                recommandations globales et des pistes d’amélioration.
              </h3>
            </hgroup>
            <img
              src={step}
              alt="les étapes pour faire l'audit de l'expérience client d'une entreprise"
            />
          </article>
          <article className="work__content">
            <hgroup className="work__content__hgroup">
              <h2 className="work__content__hgroup__headlines">Stratégie</h2>
              <h3 className="work__content__smalltitle">
                Notre stratégie d’Expérience Client claire, adaptée, structurée
                et cohérente est un levier de différenciation stratégique. Cette
                stratégie vous permet de choisir la meilleure approche sur la
                base de votre promesse et définir le plan d’action idéal à
                mettre en œuvre.
              </h3>
            </hgroup>
            <img
              src={strat}
              alt="Les étapes pour mettre en place une stratégie d'expérience client"
            />
          </article>
          <article className="work__content">
            <hgroup className="work__content__hgroup">
              <h2 className="work__content__hgroup__headlines">Formation</h2>
              <h3 className="work__content__smalltitle">
                La mise en place d’une entreprise d’expérience est souvent la
                source de bons nombres de changement au niveau organisationnel.
                Afin de mieux appréhender cela, la formation sera le levier pour
                des accompagnements individuels ou collectifs de vos
                collaborateurs.
              </h3>
            </hgroup>
            <img
              src={training}
              alt="Notre processus de formation pour les entreprises"
            />
          </article>
        </div>
        <div className="recent-articles">
          <h1 className="recent-articles__title">Nos derniers articles</h1>
          <article className="recent-articles__container">
            {!isEmpty(currentArticles[0]) &&
              currentArticles.map((article) => {
                return (
                  <>
                    <Link
                      key={article.id}
                      to={`/blog/${article.id}`}
                      aria-label={`lien vers l'article ${article.title}`}
                      className="recent-articles__content"
                    >
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={`lien vers l'article ${article.title}`}
                        />
                      ) : (
                        <img
                          src={articleImg}
                          alt={`lien vers l'article ${article.title}`}
                        />
                      )}
                      <h2>{article.title}</h2>
                    </Link>
                  </>
                );
              })}
          </article>
        </div>
        <div className="contact-us">
          <h1 className="contact-us__title">Nous contacter</h1>
          <form onSubmit={handlePostMessage} className="contact-us__form">
            <div className="contact-us__form__container">
              <div className="contact-us__form__input">
                <label htmlFor="name">Nom & Prénom</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="Entrez votre nom"
                />
              </div>
              <br />
              <div className="contact-us__form__input">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  placeholder="Entrez votre email"
                />
              </div>
              <br />
              <div className="contact-us__form__input">
                <label htmlFor="phone">N° Téléphone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="phone"
                  placeholder="Entrez votre numéro de téléphone"
                />
              </div>
              <div className="contact-us__form__textarea">
                <label htmlFor="message">Dites-nous en plus</label>
                <textarea
                  value={message}
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ecrivez votre message"
                />
              </div>
            </div>
            <input
              className="contact-us__submit"
              type="submit"
              value="Envoyer"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
