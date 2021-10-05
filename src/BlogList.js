import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs, title, handleDelete }) {
  // const blogs = props.blogs;

  // not good idea. cause we need to use the setState that is in our home
  // const handleDelete = (id) = {

  // }

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            {" "}
            <h2>{blog.title}</h2>
            <p>Ecrit par {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
