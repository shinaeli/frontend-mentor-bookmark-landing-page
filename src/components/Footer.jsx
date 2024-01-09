import React from 'react'
import Container from './utilities/Container'
import Nav from './utilities/Nav';
import Socials from './Socials';

const Footer = () => {
    const imgLocation = "../images/logo-bookmark.svg";
    const description = "bookmark logo";
    const navLinks = [
        {
            id: 1,
            linkpass: "features",
        },
        {
            id: 2,
            linkpass: "pricing",
        },
        {
            id: 3,
            linkpass: "contact",
        }
    ];
  return (
    <div id="footer">
        <Container>
            <div className="footer-content">
                <div className="footer-nav">
                    <Nav imgLocation={imgLocation} description={description} navLinks={navLinks} />
                </div>
                <Socials />
            </div>
            <p className="copyright">&copy;2024. Made by <a href="http://omotoshoelisha@gmail.com">Omotosho E. Oluwasina</a>.</p>
        </Container>
    </div>
  )
}

export default Footer