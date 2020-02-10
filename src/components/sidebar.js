import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="sidebarparent">
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Rathinavel P</a></h1>
              <span className="email"><i className="icon-mail"></i> p.rathinavel@gmail.com</span>
              <br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#accomplishment" data-nav-section="accomplishment">Accomplishment</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <a href="https://www.facebook.com/p.rathinavel" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a> &nbsp;
                  <a href="https://twitter.com/Rathina97935447" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>&nbsp;
                <a href="https://www.linkedin.com/in/rathinavelp" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a> &nbsp;
                  <a href="https://github.com/Roboticsdreams" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></small></p>

              <p><small>
                <p><small><i>I am invisible until someone needs me.</i></small></p>
                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i>
                <br></br>
                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration.
                <br></br>

              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
