import React from 'react'

import faviconUrl from './Assets/favicon.ico'
import Favicon from 'react-favicon'

import Slide from './Components/Slide'
import Deck from './Components/Deck'

module.exports = React.createClass({
  render() {

    return (
      <div className='app'>
        <Deck>
          <Slide key='slide1' title='Meu Primeiro Slide' />
          <Slide key='slide2' title='Meu Segundo Slide' />
          <Slide key='slide3' title='Meu Terceiro Slide' />
        </Deck>
        <Favicon url={ faviconUrl } />
      </div>
    )
  },
});
