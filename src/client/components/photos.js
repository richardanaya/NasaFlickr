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
    var images = visibleImages.map((image)=>(

      <div className="mdl-card mdl-cell mdl-cell--3-col mdl-shadow--2dp">
        <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
      <div key={image.id}><img  height="40" src={image.url}/></div>

      </div>
      </div>
    ))
    return (
        <div>
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <input defaultValue={filter} onChange={this.handleOnFilterChange} />
              <select defaultValue="newest" onChange={this.handleOnSortChange}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              </div>
            </div>
          </section>
          <section className="section--center mdl-grid mdl-grid--no-spacing">
          {images}
          </section>
        </div>
    )
  }
}


photos = connect(
    state => ({app: state.app}),
    (dispatch)=>({ actions: bindActionCreators(actionCreators, dispatch) })
)(photos)

export default photos;
