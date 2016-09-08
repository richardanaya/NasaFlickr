import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

class app extends Component {
  constructor (props) {
    super(props)
    this.handleOnFilterChange = this.handleOnFilterChange.bind(this)
  }

  handleOnFilterChange(e){
    this.props.actions.updateFilter(e.target.value)
  }

  render () {
    const {filteredImages,filter} = this.props.app;
    var images = filteredImages.map((image)=>(<div key={image.id}>{image.title} - {image.description}<br/><img src={image.url}/></div>))
    return (
        <div>
          <input defaultValue={filter} onChange={this.handleOnFilterChange} />
          {images}
        </div>
    )
  }
}


app = connect(
    state => ({app: state.app}),
    (dispatch)=>({ actions: bindActionCreators(actionCreators, dispatch) })
)(app)

export default app;
