import React from 'react';
import './footer.scss'

var Footer = React.createClass({
  propTypes: {
    current: React.PropTypes.number,
    total: React.PropTypes.number,
    onNext: React.PropTypes.func,
    onPrevious: React.PropTypes.func,
  },

  render() {
    return (
      <div className='footer' >
        {this.renderPreviousButton()}
        <span className='footer__pageNumber' >
          { this.props.current } / { this.props.total }
        </span>
        {this.renderNextButton()}
      </div>
    );
  },

  renderPreviousButton() {
    return (
      <button disabled={this.isPreviousDisabled()} onClick={this.props.onPrevious} className='footer__btn' >
        { '<' }
      </button>
    )
  },

  renderNextButton() {
    return (
      <button disabled={this.isNextDisabled()} onClick={this.props.onNext} className='footer__btn' >
        { '>' }
      </button>
    )
  },

  isPreviousDisabled() {
    return this.props.current == 1;
  },

  isNextDisabled() {
    return this.props.current == this.props.total;
  },
});

module.exports = Footer;
