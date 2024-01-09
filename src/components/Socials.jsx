import React from 'react'

const Socials = () => {
    const socials = [
        {
            id: 1,
            address: "www.facebook.com",
            imgLocation: "../images/icon-facebook.svg",
            description: "facebook logo"
        },
        {
            id: 2,
            address: "www.twitter.com",
            imgLocation: "../images/icon-twitter.svg",
            description: "twitter logo"
        }
    ];
    
  return (
    <div className="socials">
                    {socials.map(item => {
                        const { id, address, imgLocation, description } = item;
                        return (
                            <a key={id} href={`http://${address}`}>
                                <img className="img" src={imgLocation} alt={description} />
                            </a>
                        )
                    })}
    </div>
  )
}

export default Socials