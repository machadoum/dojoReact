import React from 'react';
import './slide.scss'

var Slide = React.createClass({

  render() {
    return (
      <div className='slide'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Slide;
