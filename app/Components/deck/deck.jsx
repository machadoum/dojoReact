import React from 'react/addons'
import './deck.scss'

import Footer from '../Footer'
var CSSTransitionGroup = React.addons.CSSTransitionGroup
var Deck = React.createClass({
  getInitialState() {
    return {
      current: 1
    }
  },

  render() {
    const footerProps = {
      onNext: this.next,
      onPrevious: this.previous,
      total: this.props.children.length,
      current: this.state.current
    }

    return (
      <div className='deck'>
        <CSSTransitionGroup transitionName="deck__transition">
          { this.props.children[this.state.current - 1] }
        </CSSTransitionGroup>
        <Footer {...footerProps}  />
      </div>
    );
  },

  next() {
    this.setState({ current: this.state.current + 1 });
  },

  previous() {
    this.setState({ current: this.state.current - 1 });
  }
});

module.exports = Deck;
