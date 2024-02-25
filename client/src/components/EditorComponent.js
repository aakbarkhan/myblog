import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);

const EditorComponent = ({ onChange }) => {
    // Initialize Quill options here (e.g., toolbar configuration)
    const  modules  = {
      toolbar: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script:  "sub" }, { script:  "super" }],
          ["blockquote", "code-block"],
          [{ list:  "ordered" }, { list:  "bullet" }],
          [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
          ["link", "image", "video"],
          ["clean"],
      ],
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
      }
  };

  const handleChange = (content, delta, source, editor) => {
    onChange(editor.getText()); // Call the onChange prop with the editor's HTML content
  };
  
    return (
      <div>
        <ReactQuill onChange={handleChange} modules={modules} theme="snow" placeholder="Please enter your titile in h1......" />
      </div>
    );
  };

  export default EditorComponent;