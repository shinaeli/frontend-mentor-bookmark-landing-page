import React from 'react'
import Flexed from './Flexed'
import Container from './utilities/Container';

const Header = () => {
    const flexHeader = {
        imgLocation: '../images/illustration-hero.svg',
        description: 'illustration hero',
        title: 'A Simple Bookmark Manager',
        content: `A clean and simple interface to organize your favourite websites. 
        Open a new browser tab and see your sites load instantly. Try it for free.`,
        downButtons: [{id: 1, title: 'Get it on Chrome', color: '#fff', backgroundColor: 'hsl(231, 69%, 60%)', border: 'none'}, {id: 2, title: 'Get it on Firefox', color: 'hsl(229, 31%, 21%)', backgroundColor: '#fff', border: 'none'}]
    };
    
  return (
    <div id="header">
        <Container>
            <Flexed flexHeader={flexHeader} />
        </Container>
    </div>
  )
}

export default Header