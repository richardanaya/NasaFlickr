import React from 'react';
import {connect} from 'react-redux'
import {getSecret} from "../actions"

function app(props){
    return (
        <div>
            <button onClick={()=>props.dispatch(getSecret())}>Do Something</button>
            {props.app.message}
        </div>
    )
}

app = connect(
    state => ({app: state.app}),
    (dispatch)=>({dispatch})
)(app)

export default app;