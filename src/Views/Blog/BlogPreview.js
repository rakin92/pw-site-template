import React from 'react';

function BlogPreview({ blogsList, blogToggle }) {
  const blogs = blogsList.map((blog, index) => (
    <div className="blog-post" key={index}>
      <div className="inner">

        <figure>
          <img src={blog.banner} alt="" />
        </figure>

        <div className="content">

          <h4>{blog.title}</h4>

          <ul className="post-icons">

            <li>
              <i className="ion-ios-person-outline"></i>
              <span>{blog.author}</span>
            </li>

            <li>
              <i className="ion-ios-clock-outline"></i>
              <span>{blog.date}</span>
            </li>

            <li>
              <i className="ion-ios-pricetag-outline"></i>
              <span>{blog.tags}</span>
            </li>

          </ul>

          <p>
            {blog.summary}
          </p>

          <a href={blog.url} className="read-more" onClick={() => blogToggle(blog.id)}>
            Read More
            <i className="ion-ios-arrow-thin-right"></i>
          </a>

        </div>

      </div>
    </div>
  ));

  return (
    <div className="posts-grid">
      {blogs}
    </div>
  );
}

export default BlogPreview;
