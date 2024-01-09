import React from 'react'
import Container from './utilities/Container'
import SectionTitle from './utilities/SectionTitle'
import Button from './utilities/Button';

const Extension = () => {
    const sectionHeaders = {
        title: "Download the extension",
        content: `We’ve got more browsers in the pipeline. 
        Please do let us know if you’ve got a favourite you’d like us to prioritize.`,
      };

    const extensions = [
        {
            id: 62,
            type: "chrome",
            imgLocation: "../images/logo-chrome.svg",
            description: "chrome logo",
            title: "Add & Install Extension"
        },
        {
            id: 55,
            type: "firefox",
            imgLocation: "../images/logo-firefox.svg",
            description: "firefox logo",
            title: "Add & Install Extension"
        },
        {
            id: 46,
            type: "opera",
            imgLocation: "../images/logo-opera.svg",
            description: "opera logo",
            title: "Add & Install Extension"
        },
    ]
      return (
        <div id="extension">
            <Container>
                <SectionTitle sectionHeaders={sectionHeaders} />
                <div className="flexed-extension">
                    {
                        extensions.map(item => {
                            const { id, type, imgLocation, description, title } = item;
                            return (
                                <div key={id} className={type}>
                                    <div className="extension-img">
                                        <img className="img" src={imgLocation} alt={description} />
                                    </div>
                                    <p>Minimum version {id}</p>
                                    <Button title={title} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
      )
}

export default Extension