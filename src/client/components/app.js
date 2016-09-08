import React from 'react';
import {connect} from 'react-redux'

function app(props){
    var images = props.app.images.map((image)=>(<div key={image.id}>{image.title} - {image.description}<br/><img src={image.url}/></div>))
    return (
        <div>
          {images}
        </div>
    )
}

app = connect(
    state => ({app: state.app}),
    (dispatch)=>({dispatch})
)(app)

export default app;
