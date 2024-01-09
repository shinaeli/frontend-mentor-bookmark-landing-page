import React from 'react'

const Nav = ({ imgLocation, description, navLinks, identity }) => {
  return (
    <div className="nav-container">
        <div className="logo">
            <img src={imgLocation} alt={description} />
        </div>
        <ul>
            {navLinks.map(item => {
                const { id, linkpass, identity } = item;
                return (
                    <li key={id}>
                        <a className={identity} href={`#${linkpass}`}>{linkpass.toUpperCase()}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Nav