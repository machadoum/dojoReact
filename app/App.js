import React from 'react'

import faviconUrl from './Assets/favicon.ico'
import Favicon from 'react-favicon'

import Slide from './Components/Slide'
import Footer from './Components/Footer'

module.exports = React.createClass({
  render() {
    let footerArgs = {
      currentSlide: '1',
      totalSlides: '10',
      onNext: this.nextSlide,
      onPrevious: this.previousSlide
    }

    return (
      <div className='app'>
        <Slide title='Meu Primeiro Slide' />
        <Footer {...footerArgs} />
        <Favicon url={ faviconUrl } />
      </div>
    )
  },

  nextSlide() {
      console.log('next');
  },

  previousSlide() {
    console.log('previous');
  }
});
