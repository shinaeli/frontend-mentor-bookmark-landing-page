import React, { useState } from 'react'
import Container from './utilities/Container'
import SectionTitle from './utilities/SectionTitle'
import Flexed from './Flexed';

const Features = () => {
    const [toggleTab, setToggleTab] = useState(1);

    const sectionHeaders = {
        title: "Features",
        content: `Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.`,
    };

    const tabs = [
        {
            imgLocation: "../images/illustration-features-tab-1.svg",
            description: "illustration 1",
            title: "Bookmark in one click",
            content: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.`,
            downButtons: [{id: "Bookmarking", title: "More info"}]
        },
        {
            imgLocation: "../images/illustration-features-tab-2.svg",
            description: "illustration 2",
            title: "Intelligent search",
            content: `Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.`,
            downButtons: [{id: "Searching", title: "More info"}]
        },
        {
            imgLocation: "../images/illustration-features-tab-3.svg",
            description: "illustration 3",
            title: "Share your bookmarks",
            content: `Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.`,
            downButtons: [{id: "Sharing", title: "More info"}]
        }
    ];

  return (
    <div id="features">
        <Container>
            <SectionTitle sectionHeaders={sectionHeaders} />
            <div className="bloc-tabs">
                {tabs.map((item, index) => {
                    const { downButtons } = item;
                    return (
                    <button key={downButtons[0]["id"]} 
                    className={toggleTab === index + 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => setToggleTab(index + 1)}>
                        {downButtons[0]["id"]}
                    </button>)
                })}
            </div>
                {
                    tabs.map((item, index) => {
                        const { downButtons } = item;
                        return (
                            <div 
                            key={downButtons[0]["id"]}
                            className={toggleTab === index + 1 ? "tab-content active-content" : "tab-content"}>
                                <Flexed flexHeader={item} />
                            </div>
                        )
                    })
                }
        </Container>
    </div>
  )
}

export default Features