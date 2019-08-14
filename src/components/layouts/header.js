import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react';
import ReactDOM from 'react-dom'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  highLightMenu = () => {
    xx=ReactDOM.findDOMNode(Link);

    console.log(xx);
  }

  render() {
    return (
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <a className="navbar-brand logo_h" href="/"><img src="/static/img/logo.png" alt="" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav">
                  <Link href="/" ><li className="nav-item"><a onClick={ this.highLightMenu } className="nav-link" href="/">Home</a></li></Link>
                  <li className="nav-item"><a className="nav-link" href="archive.html">Archive</a></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="single-blog.html">Sinlge Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                    </ul>
                  </li>
                  <Link href="/about"><li className="nav-item"><a className="nav-link" href="category.html">About</a></li></Link>
                  <Link href="/contact"><li className="nav-item"><a href='/contact' className="nav-link">Contact</a></li></Link>
                </ul>
                <ul className="nav navbar-nav navbar-right header_social ml-auto">
                  <li className="nav-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="nav-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="nav-item"><a href="#"><i className="fa fa-dribbble" /></a></li>
                  <li className="nav-item"><a href="#"><i className="fa fa-behance" /></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="logo_part">
          <div className="container">
            <Link href="/"><a className="logo" href="/"><img src="/static/img/logo.png" alt="" /></a></Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;