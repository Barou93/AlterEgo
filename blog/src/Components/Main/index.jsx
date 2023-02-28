import React from "react";
import InsightImg from "../../styles/assets/icons/Group 7.svg";
import asideImg1 from "../../styles/assets/icons/Girl Mid.svg";
import asideImg2 from "../../styles/assets/icons/Man Top.svg";
import asideImg3 from "../../styles/assets/icons/Girl Mid2.svg";
import perception from "../../styles/assets/icons/perception.svg";
import emotions from "../../styles/assets/icons/emotions.svg";
import wallet from "../../styles/assets/icons/🦆 icon _wallet_.svg";
import improve from "../../styles/assets/icons/improve.svg";
import handshake from "../../styles/assets/icons/handshake.svg";
import growth from "../../styles/assets/icons/growth.svg";
import cost from "../../styles/assets/icons/cost.svg";
import step from "../../styles/assets/icons/step.svg";
import strat from "../../styles/assets/icons/strat.svg";
import training from "../../styles/assets/icons/training.svg";
import article from "../../styles/assets/icons/article-img.svg";

const Main = () => {
   return (
      <main className="main">
         <article className="insight">
            <h1 className="insight__title">
               Alter Ego est le seul cabinet de conseil <br /> en
               <strong className="insight__title__strong">
                  Expérience Client
               </strong>
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
                  Nous nous engageons à vos côtés afin de vous assister dans la
                  mise en place d’une une véritable culture d’entreprise <br />
                  orientée clients à travers une approche structurée et
                  progressive. Cela passe par :
               </h2>
            </hgroup>
            <div className="aside__infos">
               <p>
                  <strong className="aside__infos__strong">
                     La COMPREHENSION
                  </strong>{" "}
                  de votre vision <br /> votre ambition tout en évaluant la
                  compétitivité <br /> dans votre secteur d’activité.
               </p>
               <img
                  src={asideImg1}
                  alt="icon fille comprehension"
                  className="aside__infos__img"
               />
            </div>
            <div className="aside__infos reverse">
               <p>
                  <strong className="aside__infos__strong">
                     La PROPOSITION
                  </strong>{" "}
                  d’une stratégie personnalisée <br /> pour construire une
                  relation client solide <br /> et pérenne.
               </p>
               <img
                  src={asideImg2}
                  alt="icon fille comprehension"
                  className="aside__infos__img"
               />
            </div>
            <div className="aside__infos">
               <p>
                  <strong className="aside__infos__strong">L’ANALYSE</strong>{" "}
                  des données issues d’enquêtes <br />
                  tant au niveau de vos collaborateurs <br />
                  que de vos clients.
               </p>
               <img
                  src={asideImg3}
                  alt="icon fille comprehension"
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
                        L’expérience client est l’ensemble des{" "}
                        <span>perceptions</span> <br /> et <span>émotions</span>{" "}
                        qu’une organisation procure à ses acheteurs <br />{" "}
                        lorsqu’ils entrent en contact avec elle.
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
                     alt="icon-perception"
                     className="illustration__img emojis"
                  />
                  <p class="emojis-p">Émotions</p>
               </div>
            </div>
            <article className="user-experience">
               <h1 className="user-experience__title">
                  L’expérience client en quoi c’est utile ?
               </h1>
               <div className="user-experience__container">
                  <figure className="user-experience__figure">
                     <img
                        src={wallet}
                        alt=""
                        className="user-experience__img"
                     />
                     <figcaption className="user-experience__infos">
                        Générer des revenus et améliorer <br /> la valeur vie
                        client{" "}
                     </figcaption>
                  </figure>
                  <figure className="user-experience__figure">
                     <img
                        src={improve}
                        alt=""
                        className="user-experience__img"
                     />
                     <figcaption className="user-experience__infos">
                        Augmenter la fidélité et la probabilité <br /> de
                        recommandation des acheteurs{" "}
                     </figcaption>
                  </figure>
               </div>

               <div className="user-experience__container">
                  <figure className="user-experience__figure">
                     <img
                        src={handshake}
                        alt=""
                        className="user-experience__img"
                     />
                     <figcaption className="user-experience__infos">
                        Améliorer la valeur de sa marque
                     </figcaption>
                  </figure>
               </div>
               <div className="user-experience__container">
                  <figure className="user-experience__figure">
                     <img
                        src={growth}
                        alt=""
                        className="user-experience__img"
                     />
                     <figcaption className="user-experience__infos">
                        Renforcer le lien avec le public cible <br /> et
                        anticiper les changements comportementaux
                     </figcaption>
                  </figure>
                  <figure className="user-experience__figure">
                     <img
                        src={cost}
                        alt=""
                        className="user-experience__img cost"
                     />
                     <figcaption className="user-experience__infos cost-p">
                        Réduire ses coûts <br /> et optimiser ses
                        investissements
                     </figcaption>
                  </figure>
               </div>
            </article>

            <div className="work">
               <h1 className="work__title">Notre méthodologie de travail </h1>
               <article className="work__content">
                  <hgroup className="work__content__hgroup">
                     <h3 className="work__content__hgroup__headlines">Audit</h3>
                     <h4 className="work__content__smalltitle">
                        Notre audit permet d’évaluer votre entreprise en termes
                        d’Expérience Client. Cette analyse nous permettra de
                        fournir un premier bilan qui servira d’instrument de
                        prise de décision et à la mise en place d’une stratégie
                        CX. A la fin de l’audit, le rapport établi fournit le
                        niveau de maturité actuel, propose des recommandations
                        globales et des pistes d’amélioration.
                     </h4>
                  </hgroup>
                  <img
                     src={step}
                     alt="etapes d'etudes expérience client entreprise"
                  />
               </article>
               <article className="work__content">
                  <hgroup className="work__content__hgroup">
                     <h3 className="work__content__hgroup__headlines">
                        Stratégie
                     </h3>
                     <h4 className="work__content__smalltitle">
                        Notre stratégie d’Expérience Client claire, adaptée,
                        structurée et cohérente est un levier de différenciation
                        stratégique. Cette stratégie vous permet de choisir la
                        meilleure approche sur la base de votre promesse et
                        définir le plan d’action idéal à mettre en œuvre.
                     </h4>
                  </hgroup>
                  <img
                     src={strat}
                     alt="etapes d'etudes expérience client entreprise"
                  />
               </article>
               <article className="work__content">
                  <hgroup className="work__content__hgroup">
                     <h3 className="work__content__hgroup__headlines">
                        Formation
                     </h3>
                     <h4 className="work__content__smalltitle">
                        La mise en place d’une entreprise d’expérience est
                        souvent la source de bons nombres de changement au
                        niveau organisationnel. Afin de mieux appréhender cela,
                        la formation sera le levier pour des accompagnements
                        individuels ou collectifs de vos collaborateurs.
                     </h4>
                  </hgroup>
                  <img
                     src={training}
                     alt="etapes d'etudes expérience client entreprise"
                  />
               </article>
            </div>
            <div className="recent-articles">
               <h1 className="recent-articles__title">Nos derniers articles</h1>
               <article className="recent-articles__container">
                  <div>
                     <a href="#add" className="recent-articles__content">
                        <img src={article} alt="l'article du jour" />
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Alias natus voluptatum accusamus at,
                           exercitationem amet reprehenderit repellat quos
                           dolore incidunt consectetur praesentium eius ullam
                           atque eos laudantium non quibusdam excepturi.
                        </p>
                     </a>
                  </div>
                  <div>
                     <a href="#add" className="recent-articles__content">
                        <img src={article} alt="l'article du jour" />
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Alias natus voluptatum accusamus at,
                           exercitationem amet reprehenderit repellat quos
                           dolore incidunt consectetur praesentium eius ullam
                           atque eos laudantium non quibusdam excepturi.
                        </p>
                     </a>
                  </div>
                  <div>
                     <a href="#add" className="recent-articles__content">
                        <img src={article} alt="l'article du jour" />
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Alias natus voluptatum accusamus at,
                           exercitationem amet reprehenderit repellat quos
                           dolore incidunt consectetur praesentium eius ullam
                           atque eos laudantium non quibusdam excepturi.
                        </p>
                     </a>
                  </div>
               </article>
            </div>
            <div className="contact-us">
               <h1 className="contact-us__title">Nous contacter</h1>
               <form action="#" className="contact-us__form">
                  <div className="contact-us__form__container">
                     <div className="contact-us__form__input__container">
                        <div className="contact-us__form__input">
                           <label htmlFor="name">Nom</label>
                           <input
                              type="text"
                              id="name"
                              placeholder="Entrez votre nom"
                           />
                        </div>
                        <div className="contact-us__form__input">
                           <label htmlFor="lastname">Prénom</label>
                           <input
                              type="text"
                              id="lastname"
                              placeholder="Entrez votre nom"
                           />
                        </div>
                     </div>
                     <div className="contact-us__form__textarea">
                        <label htmlFor="name">Dites-nous en plus</label>
                        <textarea placeholder="Ecrivez votre message" />
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
