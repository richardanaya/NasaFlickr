import React from 'react'

function app(props){
  var isAboutPage = window.location.pathname.indexOf("about")!==-1;
  return (
    <div>
      <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className=" mdl-layout__header-row">
        </div>
        <div className=" mdl-layout__header-row">
          <h3>NASA Flickr</h3>
        </div>
        <div className=" mdl-layout__header-row">
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">

          <a href="/" className={"mdl-layout__tab "+(isAboutPage?"":"is-active")}>Photos</a>
          <a href="/about" className={"mdl-layout__tab "+(isAboutPage?"is-active":"")}>About</a>
        </div>
      </header>

      <main className="mdl-layout__content">
        <div className="mdl-layout__tab-panel is-active" id="overview">

          {props.children}

          <section className="section--footer mdl-color--white mdl-grid">
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>On Venus a day is almost as long as a year!</h5>
              Think time is moving slow on earth? On venus a single turn of the axis rotation takes 243 Earth days.
            </div>
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>NASA originally had concerns about bacteria and viruses on the Moon</h5>
              The first astronauts to return from the moon were held in quarantine until Apollo 14 it was decided to not be a concern.
            </div>
          </section>
        </div>
        <footer className="mdl-mega-footer">
          <div className="mdl-mega-footer--middle-section">
            <div className="mdl-mega-footer--drop-down-section">
              <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked={true}/>
              <h1 className="mdl-mega-footer--heading">Features</h1>
              <ul className="mdl-mega-footer--link-list">
                <li>Photo Sorting</li>
                <li>Photo filtering</li>
                <li>Photo info</li>
                <li>Basic Routing</li>
              </ul>
            </div>
            <div className="mdl-mega-footer--drop-down-section">
              <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked={true}/>
              <h1 className="mdl-mega-footer--heading">Technologies Used</h1>
              <ul className="mdl-mega-footer--link-list">
                <li>React</li>
                <li>React Redux</li>
                <li>React Router</li>
                <li>Webpack</li>
                <li>Material Design Lite</li>
              </ul>
            </div>
          </div>
          <div className="mdl-mega-footer--bottom-section">
            <div className="mdl-logo">
              More Information
            </div>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="https://github.com/richardanaya/nasaflickr">Source Code</a></li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default app;
