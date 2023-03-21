"use strict";

{
  /* <ReactQuill
  value={content}
  onChange={handleChange}
  modules={{
    toolbar: {
      container: [
        [{header: [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{align: []}],
        [{color: []}, {background: []}],
        ['image', 'link'],
        ['clean'],
      ],
      handlers: {
        image: () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.onchange = () => {
            const file = input.files[0];
            setImage(file);
            const reader = new FileReader();
            reader.onload = () => {
              const range = quillRef.current.getEditor().getSelection();
              const img = `<img src="${reader.result}" alt="Image" />`;
              quillRef.current.getEditor().insertHTML(range.index, img);
            };
            reader.readAsDataURL(file);
          };
          input.click();
        },
      },
    },
  }}
  />; */
}