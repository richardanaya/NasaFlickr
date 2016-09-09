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
    const sort = e.target.getAttribute("data-value");
    this.props.actions.updateSort(sort)
  }

  render () {
    const {visibleImages,filter} = this.props.app;
    var images = visibleImages.map((image)=>(
      <div className="mdl-cell mdl-cell--6-col PhotoCard" key={image.id}>
        <div className="PhotoCardTitle">{image.title}</div>
        <a href={image.urlFlickr} target="_new"><img src={image.url}/></a>
      </div>
    ))
    return (
        <div>
          <section className="PhotoSection section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <div className="PhotoHeader">
                  <div className="PhotoHeader-PhotoMenu">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                      <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="searchFilter">
                        <i className="material-icons">search</i>
                      </label>
                      <div className="mdl-textfield__expandable-holder">
                        <input className="mdl-textfield__input" type="text" id="searchFilter" defaultValue={filter} onChange={this.handleOnFilterChange}/>
                        <label className="mdl-textfield__label" htmlFor="searchFilter">Search...</label>
                      </div>
                    </div>

                    <button id="sortMenu" className="mdl-button mdl-js-button mdl-button--icon">
                            <i className="material-icons">more_vert</i>
                            </button>
                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                        htmlFor="sortMenu">
                      <li className="mdl-menu__item"
                          data-value="newest"
                          onClick={this.handleOnSortChange}>Newest First</li>
                      <li className="mdl-menu__item"
                          data-value="oldest"
                          onClick={this.handleOnSortChange}>Oldest First</li>
                    </ul>
                  </div>
                  <div className="PhotoTitle">Enjoy a collection of images of space and NASA's explorations!</div>
                </div>
              </div>
            </div>
            <section className="section--center mdl-grid mdl-grid--no-spacing">
            {images}
            </section>
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
