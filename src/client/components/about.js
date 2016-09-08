import React from 'react'

function about(props){
  return (


    <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <div className="mdl-card mdl-cell mdl-cell--12-col">
        <div className="mdl-card__supporting-text">
          <h4>NASA is Cool</h4>
          It's pretty cool we have a group of super smart scientists exploring the whole universe outside our world! Let's keep it up.
        </div>
        <div className="mdl-card__actions">
          <a href="http://www.nasa.gov" className="mdl-button">Read more about NASA</a>
        </div>
      </div>
    </section>
  )
}

export default about;
