import React from "react";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header";
import BlogImg from "../../styles/assets/img/user-experience.png";

const Blog = () => {
   return (
      <>
         <Header />
         <main className="container">
            <div className="blog">
               <div className="blog__container">
                  <article className="blog__resume">
                     <a href="/blogcontent" className="blog__resume__img">
                        <img
                           src={BlogImg}
                           alt="contenu de l'article du blog "
                        />
                     </a>
                     <div className="blog__resume__text">
                        <h2 className="blog__resume__text__insight">
                           <a href="/blogcontent">Expérience client</a>
                        </h2>
                        <div className="blog__resume__text__infos">
                           <p>12 Février 2023</p>
                           <span>Oumar MAURET</span>
                        </div>

                        <div className="blog__resume__text__details">
                           <h3>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Vero accusantium sunt debitis
                              dignissimos incidunt libero quis quidem, explicabo
                              laboriosam deserunt, quam repudiandae tempora eum
                              reiciendis aspernatur sed iste quaerat
                              consequuntur. Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Vero accusantium
                              sunt debitis dignissimos incidunt libero quis
                              quidem, explicabo laboriosam deserunt, quam
                              repudiandae tempora eum reiciendis aspernatur sed
                              iste quaerat consequuntur. Lorem ipsum dolor sit
                              amet, consectetur adipisicing elit. Vero
                              accusantium sunt debitis dignissimos incidunt
                              libero quis quidem, explicabo laboriosam deserunt,
                              quam repudiandae tempora eum reiciendis aspernatur
                              sed iste quaerat consequuntur.
                           </h3>
                        </div>
                     </div>
                  </article>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default Blog;
