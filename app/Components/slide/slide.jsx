import React from 'react';
import './slide.scss'

var Slide = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render() {
    return (
      <div className='slide'>
        <div className='slide__title'>
          { this.props.title }
        </div>
      </div>
    );
  }
});

module.exports = Slide;
