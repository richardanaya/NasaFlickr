import React from 'react';
import {connect} from 'react-redux'

function app(props){
    var images = props.app.images.map((image)=>(<img key={image.id} src={image.url}/>))
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
