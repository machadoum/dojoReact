import React from 'react'
import './title.scss'
import classNames from 'classnames'

var Title = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    size: React.PropTypes.string
  },

  render() {
    const classes = classNames('title', { 'title__big': this.isBig() })

    return (
      <div className={classes}>
        {this.props.text}
      </div>
    );
  },

  isBig() {
    console.log(this.props.size)
    return this.props.size == 'big'
  },
});

module.exports = Title;
