import React, { useState } from 'react'
import Container from './utilities/Container';
import Nav from './utilities/Nav';
import Socials from './Socials' 

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
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
        },
        {
            id: 4,
            linkpass: "login",
            identity: "login",
        }
    ];

  return (
    <div id="navbar">
        <Container>
            <Nav imgLocation={imgLocation} description={description} navLinks={navLinks} />
            <div className="mobile-nav">
                {!showLinks ? (
                    <div className="mobile-nav-header">
                        <div className="logo">
                            <img className="img" src={imgLocation} alt={description} />
                        </div>  
                        <div className="menu">
                            <img className="img" onClick={() => setShowLinks(true)} src="../images/icon-hamburger.svg" alt="hamburger icon" />
                        </div>
                    </div>
                ) : (
                <div className="show-all-links">
                    <div className="show-all-links-header">
                        <div className="logo">
                            <img className="img" src={imgLocation} alt={description} />
                        </div>
                        <div className="close-menu">
                            <img onClick={() => setShowLinks(false)} className="img" src="../images/icon-close.svg" alt="close icon" />
                        </div>
                    </div>
                    <ul>
                        {navLinks.map(item => {
                            const { id, linkpass } = item;
                            return (
                                <li key={id}>
                                    <a href={`#${linkpass}`}>{linkpass.toUpperCase()}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="show-all-links-socials">
                        <Socials />
                    </div>
                </div>
                )
            }
            </div>
        </Container>
    </div>
  )
}

export default Navbar