import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Helena Díaz</h4>
                    <p>Hola, gente hermosa. Soy la
                        autora de este blog. Lean
                        nuestra publicación y estén
                        atentos.</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/Letraset-Sheets-Passage-And-Recently"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/Letraset-Sheets-Passage-And-Recently"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/Letraset-Sheets-Passage-And-Recently"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/Letraset-Sheets-Passage-And-Recently"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Busca aquí</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Buscar publicación.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categorías de publicaciones</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/">Elección<span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/">Eventos<span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/">Política<span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/">Programa<span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/">Familia<span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/">Social<span>8</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
