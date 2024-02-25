import React, { useState } from 'react';
import EditorComponent from './EditorComponent';
import 'react-quill/dist/quill.snow.css';



const NewBlog = () => {
  const [content, setContent] = useState('');
 
   const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    const lines = content.split('\n');
    const title = lines[0];
    const body = lines.slice(1).join('\n');
    console.log(title, body,"the title and tob")
    console.log(content)
    fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({   title, content: body  })
    })
    .then(response => response.json())
    
    .then(data => console.log(data,"this is the data"))
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  
    return (
      <div>
        {/* Other components or UI elements */}
        
        <EditorComponent onChange={handleContentChange}/>
      
        <button onClick={handleSubmit}>Post</button>

      </div>
    );
  };

  export default NewBlog;