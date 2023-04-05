import DOMPurify from "dompurify";
import React, {useRef, useState, useEffect, useMemo} from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {readArticle, updateArticle} from "../../actions/article.action";

const UpdatedArticle = () => {
  const [updateContent, setUpdateContent] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [editTitle, setEditTitle] = useState("");

  const quillRef = useRef(null);
  const dispatch = useDispatch();
  const oneArticle = useSelector((state) => state.articleReducer);

  const {id: articleId} = useParams();
  useEffect(() => {
    if (isLoad) {
      dispatch(readArticle(articleId));
      setIsLoad(false);
    }
  }, [isLoad, dispatch, articleId]);

  const handleUpdate = (value) => {
    setUpdateContent(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{header: [1, 2, 3, 4, 5, 6, false]}],
          ["bold", "italic", "underline", "strike"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
      },
    }),
    []
  );

  const handleEditPost = async () => {
    if (editTitle || updateContent) {
      const data = new FormData();
      if (editTitle) data.append("title", editTitle);
      if (updateContent) data.append("content", updateContent);
      await dispatch(updateArticle(articleId, data));
      setIsUpdated(false);
      //cancelPost();
      window.location = "/admin/article";
    }
  };

  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__create__article__container">
        <h1 className="dashboard__content__create__article__headline">
          Mettre à jour
        </h1>
        <div className="dashboard__content__create__article__box">
          <form
            onSubmit={handleEditPost}
            className="dashboard__content__create__article__form"
          >
            <div className="dashboard__content__create__article__title">
              <label className="label" htmlFor="title">
                Titre de l'article
              </label>
              {isUpdated === false && <p>{oneArticle.title}</p>}{" "}
              {isUpdated && (
                <input
                  defaultValue={oneArticle.title}
                  onChange={(e) => setEditTitle(e.target.value)}
                  type="text"
                  placeholder="Ecrivez le titre ici"
                />
              )}
            </div>
            <div className="dashboard__content__create__article__editor">
              <label className="label" htmlFor="content">
                Message
              </label>
              {isUpdated === false && (
                <div
                  className="update-textarea"
                  readOnly
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(oneArticle.content),
                  }}
                />
              )}
              {isUpdated && (
                <ReactQuill
                  defaultValue={oneArticle.content}
                  readOnly={false}
                  onChange={handleUpdate}
                  placeholder="Entrez votre message"
                  modules={modules}
                  ref={quillRef}
                />
              )}
            </div>
            <div className="dashboard__content__create__article__submit">
              {isUpdated ? (
                <>
                  <input type="submit" value="Enregistrer" />
                  <Link
                    aria-label={`Annuler la modification de l'article ${oneArticle.title}`}
                    to="/admin/article"
                    className="cancel-article"
                  >
                    Annuler
                  </Link>
                </>
              ) : (
                <button
                  className="edit__btn new__btn"
                  type="button"
                  onClick={() => setIsUpdated(!isUpdated)}
                >
                  Modifier
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="dashboard__content__create__article__file">
        <div className="dashboard__content__create__article__file__img isUpload">
          {oneArticle.image != null ? (
            <img
              src={oneArticle.image}
              alt="article-pic illustration de l'article"
              className="file__img"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UpdatedArticle;
