import React, { useEffect, useState } from 'react';



function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      {console.log(blogs,"thi is from the front end page")}
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          
          <p>{blog.content}</p>
        </div>
      ))}
      <h1>Heading</h1>
    </div>
  );
}

export default BlogList;
