import React from 'react';
import BlogPreview from './BlogPreview';
import Image1 from './img/1.jpg';

class Blog extends React.PureComponent {

  state = {
    blogs: [
      { id: 0, title: 'Some Title', banner: Image1, author: 'Rakin', date: '14 June', tags: 'Web, Api', summary: 'some reall good summary of the blog' },
      { id: 1, title: 'Some Title', banner: Image1, author: 'Rakin', date: '14 June', tags: 'Web, Api', summary: 'some reall good summary of the blog' },
      { id: 2, title: 'Some Title', banner: Image1, author: 'Rakin', date: '14 June', tags: 'Web, Api', summary: 'some reall good summary of the blog' },
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
              <p>Take a look at my most recent posts</p>
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
