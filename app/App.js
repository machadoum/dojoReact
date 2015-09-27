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
          <Slide title='Meu Primeiro Slide' />
          <Slide title='Meu Segundo Slide' />
          <Slide title='Meu Terceiro Slide' />
        </Deck>
        <Favicon url={ faviconUrl } />
      </div>
    )
  },
});
