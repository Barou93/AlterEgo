import React, {useRef, useState, useMemo} from 'react';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import {useDispatch, useSelector} from 'react-redux';
import {createArticle, getArticles} from '../../actions/article.action';

import {Navigate, Link} from 'react-router-dom';

const CreateArticle = () => {
  const [content, setContent] = useState('');
  //const [editor, setEditor] = useState(null);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState();
  //const [author, setAuthor] = useState();
  const quillRef = useRef(null);
  const dispatch = useDispatch(); 
  const admin = useSelector((state) => state.adminReducer);

  const handleChange = (value) => {
    //const htmlValue = quillRef.root.dangerouslySetInnerHTML = value;
    //dangerouslySetInnerHTML={{ __html: value}}
    setContent(value);
  };
  const handleDownload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/jpeg', 'image/png', 'image/jpg');
    input.onchange = () => {
      const fileImg = input.files[0];
      setFile(fileImg);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          const range = quillRef.current.getEditor().getSelection();

          const img = reader.result;
          //const value = quillRef.clipboard.dangerouslyPasteHTML(img);
          quillRef.current.getEditor().insertEmbed(range.index, 'image', img);
        }
      };
      reader.readAsDataURL(fileImg);
    };
    input.click();
  };

  //console.log(admin);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{header: [1, 2, 3, 4, 5, 6, false]}],
          ['bold', 'italic', 'underline', 'strike'],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
          ['link', 'image'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
            },
          ],
        ],
        handlers: {
          image: handleDownload,
        },
      },
    }),
    []
  );

  const handlePost = async () => {
    if ((title && content) || (title && content && file)) {
      const data = new FormData();
      data.append('adminId', admin.id);

      if (title) data.append('title', title);
      if (content) data.append('content', content);
      if (file) data.append('file', file);
      console.log(data);
      await dispatch(createArticle(data));
      dispatch(getArticles());
      cancelPost();
    } else {
      console.log('Veuillez entrer un message');
    }
  };

  const cancelPost = () => {
    setFile('');
    setTitle('');
    setContent('');
  };

  return (
    <div className="dashboard__content__container">
      <div className="dashboard__content__create__article__container">
        <h1 className="dashboard__content__create__article__headline">
          Créer un article
        </h1>
        <div className="dashboard__content__create__article__box">
          <form
            onSubmit={handlePost}
            className="dashboard__content__create__article__form"
          >
            <div className="dashboard__content__create__article__title">
              <label className="label" htmlFor="title">
                Titre de l'article
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Ecrivez le titre ici"
              />
            </div>
            <div className="dashboard__content__create__article__editor">
              <label className="label" htmlFor="content">
                Message
              </label>
              <ReactQuill
                value={content}
                onChange={handleChange}
                placeholder="Entrez votre message"
                modules={modules}
                ref={quillRef}
              />
            </div>
            <div className="dashboard__content__create__article__submit">
              <input type="submit" value="Publier" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
