import React from 'react'

function app(props){
  return (
    <div>
      <div className="AppBar">NASAFlickr<div className="AppBar-photos"><a href="/">Home</a><a href="/about">About</a></div></div>
      {props.children}
    </div>
  )
}

export default app;
