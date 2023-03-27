import React from "react";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header";
import Team from "../../styles/assets/icons/team.svg";
import Worker from "../../styles/assets/icons/collaboration.svg";
import Collabo from "../../styles/assets/icons/collabo.svg";
import Time from "../../styles/assets/icons/Rectangle.svg";
import Assured from "../../styles/assets/icons/quality-assurance.svg";
import Reduction from "../../styles/assets/icons/reduction.svg";
import Discipline from "../../styles/assets/icons/discipline.svg";
import Founder from "../../styles/assets/img/founder_profil.png";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <div className="about__header">
          <div className="about__header__text">
            <h1 className="about__header__text__title">
              Nous sommes un cabinet de conseil <br /> en Marketing & Expérience
              client <br />
              qui fournit des solutions <br />
              adaptées aux entreprises.
            </h1>
            <Link to={"/contact"} className="about__header__text__btn">
              Contactez-Nous
            </Link>
          </div>
          <div className="about__header__img">
            <img src={Team} alt="icon-présentation Alter Ego" />
          </div>
        </div>
        <div className="about__teamwork">
          <div className="about__teamwork__container">
            <img src={Worker} alt="" className="about__teamwork__img" />
          </div>
          <div className="about__teamwork__title">
            <hgroup>
              <h3 className="about__teamwork__headlines">Qui sommes-nous ?</h3>
              <h4 className="about__teamwork__text">
                Notre agence est dédiée à offrir des solutions innovantes <br />{" "}
                et sur mesure pour répondre à vos besoins spécifiques
                <br /> en matière de marketing et de gestion de l'expérience
                client.
              </h4>
            </hgroup>
          </div>
        </div>
        <div className="about__help">
          <div className="about__help__text__container">
            <hgroup>
              <h3 className="about__help__text__container__title">
                Comment nous pouvons vous aider ?
              </h3>
              <h4 className="about__help__text__container__smalltitle">
                Nous sommes passionnés par l'excellence de notre travail et nous
                nous engageons à offrir un service de qualité supérieure à
                chaque étape de notre collaboration.
              </h4>
            </hgroup>
          </div>
          <div className="about__help__img__container">
            <figure className="about__help__img__container__box">
              <img
                className="about__help__img__container__box__img"
                src={Worker}
                alt="icon-collaboration"
              />
              <figcaption className="about__help__img__container__box__caption">
                Approche centrée sur le client
              </figcaption>
              <span className="about__help__img__container__box__title">
                Nos clients sont au coeur de notre activité, On vous accompagne
                étape par étape pour étape dans la mise en place d’une stratégie
                CX.
              </span>
            </figure>
            <figure className="about__help__img__container__box">
              <img
                className="about__help__img__container__box__img"
                src={Collabo}
                alt="icon-collaboration"
              />
              <figcaption className="about__help__img__container__box__caption">
                Une collaboration efficace
              </figcaption>
              <span className="about__help__img__container__box__title">
                Nous sommes convaincus que la clé du succès réside dans une
                collaboration étroite et transparente avec nos clients.
              </span>
            </figure>
            <figure className="about__help__img__container__box">
              <img
                className="about__help__img__container__box__img"
                src={Time}
                alt="icon-collaboration"
              />
              <figcaption className="about__help__img__container__box__caption">
                Livraison dans les délais
              </figcaption>
              <span className="about__help__img__container__box__title">
                Nous veillons toujours à ce que notre tâche soit remise dans le
                délai imparti. Notre principale priorité est la satisfaction du
                client.
              </span>
            </figure>
          </div>
        </div>
        <div className="about__whyus">
          <div className="about__help__text__container">
            <p className="about__help__text__container__title whyus__title">
              Pourquoi<strong> AlterEgo ?</strong>
            </p>
            <span className="about__help__text__container__smalltitle">
              Voici quelques raisons pour lesquelles les clients choisissent
              AlterEgo plutôt qu'un concurrent
            </span>
          </div>
          <div className="about__help__img__container ">
            <figure className="about__help__img__container__box whyus__img__box">
              <img
                src={Assured}
                alt="icons-proposition de valeur Alter Ego"
                className="about__help__img__container__box__img"
              />
              <figcaption className="about__help__img__container__box__caption whyus__caption">
                Des services assurés
              </figcaption>
              <span className="about__help__img__container__box__title">
                AlterEgo est une entreprise qui est spécialisée dans
                l'expérience utilisateur et le marketing. Nous apporterons de la
                valeur à votre exploitation commerciale tout en garantissant
              </span>
            </figure>
            <figure className="about__help__img__container__box whyus__img__box blue">
              <img
                src={Reduction}
                alt="icons-proposition de valeur Alter Ego"
                className="about__help__img__container__box__img"
              />
              <figcaption className="about__help__img__container__box__caption whyus__caption blue-caption">
                Des services assurés
              </figcaption>
              <span className="about__help__img__container__box__title">
                AlterEgo est une entreprise qui est spécialisée dans
                l'expérience utilisateur et le marketing. Nous apporterons de la
                valeur à votre exploitation commerciale tout en garantissant
              </span>
            </figure>
            <figure className="about__help__img__container__box whyus__img__box">
              <img
                src={Discipline}
                alt="icons-proposition de valeur Alter Ego"
                className="about__help__img__container__box__img"
              />
              <figcaption className="about__help__img__container__box__caption whyus__caption">
                Des services assurés
              </figcaption>
              <span className="about__help__img__container__box__title">
                AlterEgo est une entreprise qui est spécialisée dans
                l'expérience utilisateur et le marketing. Nous apporterons de la
                valeur à votre exploitation commerciale tout en garantissant
              </span>
            </figure>
          </div>
        </div>
        <div className="about__founder">
          <div className="about__founder__quote">
            <div className="about__founder__quote__text__container">
              <span className="about__founder__quote__name">
                Maimouna ELOUMRANY
                <br />
                <em>Directrice Générale</em>
              </span>
              <p className="about__founder__quote__title">
                Notre expertise vous aide à mieux appréhender <br /> les enjeux
                de l'expérience client et d'investir <br /> dans la qualité de
                la relation que vous construisez <br /> avec vos clients grâce à
                une stratégie taillée <br /> sur mesure et traduite en véritable
                culture d'entreprise
              </p>
            </div>
            <div className="about__founder__quote__img">
              <img
                src={Founder}
                alt="profil de la fondatrice & la Directrice Générale"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
