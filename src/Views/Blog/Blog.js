import React from 'react';

import BlogPreview from './BlogPreview';
import Image1 from './img/1.jpg';
import './Blog.scss';

class Blog extends React.PureComponent {

  state = {
    blogs: [
      { id: 0, title: 'Golden Hours', banner: Image1, author: 'Rakin', date: '20 Sept', tags: 'Travel', summary: 'A sample of my favorite golden hours.', url: 'https://rakin-blog.firebaseapp.com/goldehnhour.html' },
      { id: 1, title: 'Coding Problems', banner: Image1, author: 'Rakin', date: '20 Sept', tags: 'Educational', summary: 'Collection of commonly asked coding problems.', url: 'https://rakin-blog.firebaseapp.com/coding.html' },
      { id: 2, title: 'Working Title', banner: Image1, author: 'Rakin', date: '20 Sept', tags: 'Shorts', summary: 'A personal project I am working on, comign soon...', url: 'https://rakin-blog.firebaseapp.com/comingsoon.html' },
    ]
  };

  blogToggle = (id) => {
    console.log(id);
  };

  render = () => {
    const { blogs } = this.state;

    return(
      <section id="blog" className="section blog-section active">
        <div className="container-fluid">
          
          <div className="block blog-block">

            <div className="section-header">
              <h2>My Blog</h2>
              <p>Take a look at my most recent posts, and some of my favorite reads.</p>
            </div>
            
            <BlogPreview blogsList={blogs} blogToggle={this.blogToggle}/>

            <div className="posts-more text-center">  
              <a href="#more-blog-post" className="btn-material btn-secondary">
                View More Posts
              </a>
            </div>
            
          </div>
          
        </div>
      </section>
    );
  };
};

export default Blog;
