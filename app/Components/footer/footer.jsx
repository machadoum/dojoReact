import React from 'react';

import './footer.scss'

var Footer = React.createClass({

  propTypes: {
    currentSlide: React.PropTypes.number,
    totalSlides: React.PropTypes.number,
    onNext: React.PropTypes.func,
    onPrevious: React.PropTypes.func,
  },

  render() {
    return (
      <div className='footer'>
        <button className='footer_previous' onClick={this.props.onPrevious}>
          { '<' }
        </button>
        <span className='footer__pageNumber'>
          { this.props.currentSlide } / { this.props.totalSlides }
        </span>
        <button className='footer__next' onClick={this.props.onNext}>
          { '>' }
        </button>
      </div>
    );
  }
});

module.exports = Footer;
