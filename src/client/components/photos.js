import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

class photos extends Component {
  constructor (props) {
    super(props)
    this.handleOnFilterChange = this.handleOnFilterChange.bind(this)
    this.handleOnSortChange = this.handleOnSortChange.bind(this)
  }

  handleOnFilterChange(e){
    this.props.actions.updateFilter(e.target.value)
  }

  handleOnSortChange(e){
    this.props.actions.updateSort(e.target.value)
  }

  render () {
    const {visibleImages,filter} = this.props.app;
    var images = visibleImages.map((image)=>(<div key={image.id}>{image.title} - {image.description}<br/><img src={image.url}/></div>))
    return (
        <div>
          <input defaultValue={filter} onChange={this.handleOnFilterChange} />
          <select defaultValue="newest" onChange={this.handleOnSortChange}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          {images}
        </div>
    )
  }
}


photos = connect(
    state => ({app: state.app}),
    (dispatch)=>({ actions: bindActionCreators(actionCreators, dispatch) })
)(photos)

export default photos;
