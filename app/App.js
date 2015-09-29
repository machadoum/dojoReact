import React from 'react'

import faviconUrl from './Assets/favicon.ico'
import Favicon from 'react-favicon'

import Deck from './Components/Deck'
import Slide from './Components/Slide'
import Title from './Components/Title'

module.exports = React.createClass({
  render() {
    return (
      <div className='app'>
        <Deck>
          <Slide key='slide1'>
            <Title text='React' size='big'/>
          </Slide>
          <Slide key='slide2'>
            <Title text='Características'/>
            <span>Biblioteca </span>
            <span>Components</span>
            <span>Virtual DOM</span>
          </Slide>
          <Slide key='slide3'>
            <Title text='Component'/>
            <span>img?</span>
          </Slide>
          <Slide key='slide4'>
            <Title text='JSX'/>
            <span>img?</span>
          </Slide>
          <Slide key='slide5'>
            <Title text='Lifecycle'/>
            <ul>
              <li>componentWillMount</li>
              <li>componentDidMount</li>
              <li>componentWillReceiveProps</li>
              <li>shouldComponentUpdate</li>
              <li>componentWillUpdate</li>
              <li>componentDidUpdate</li>
              <li>componentWillUnmount</li>
            </ul>
          </Slide>
        </Deck>
        <Favicon url={ faviconUrl } />
      </div>
    )
  },
});
