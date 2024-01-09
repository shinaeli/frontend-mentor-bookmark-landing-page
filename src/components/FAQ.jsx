import React, { useState } from 'react'
import Container from './utilities/Container'
import SectionTitle from './utilities/SectionTitle'
import Button from './utilities/Button';

const FAQ = () => {
  const [toggleTab, setToggleTab] = useState(0);

    const sectionHeaders = {
        title: "Frequently Asked Questions",
        content: "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.",
    };

    const accordions = [
      {
        id: 1,
        question: "What is Bookmark?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`
      },
      {
        id: 2,
        question: "How can I request a new browser?",
        answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`
      },
      {
        id: 3,
        question: "Is there a mobile app?",
        answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
        sollicitudin ex et ultricies bibendum.`
      },
      {
        id: 4,
        question: "What about other Chromium browsers?",
        answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
        vitae neque eget nisl gravida pellentesque non ut velit.`
      },
    ];
    

      return (
        <div id="faq">
            <Container>
                <SectionTitle sectionHeaders={sectionHeaders} />
                <div className="accordion-container">
                  {
                    accordions.map((item, index) => {
                      const { id, question, answer } = item;
                        return (
                          <div className="accordion" key={id}>
                            <div className="question-flexed">
                              <h3>{question}</h3>
                              <div className="arrow">
                                <img className={toggleTab === index + 1 ? "img arrow-up" : "img"} onClick={() => setToggleTab(index+1)} src={toggleTab === index + 1 ? "../images/up-arrow-svgrepo-com.svg" : "../images/icon-arrow.svg"} alt="arrow icon" />
                              </div>
                            </div>
                            <div className={toggleTab === index + 1 ? "show-answer" : "answer"}>
                              <p>{answer}</p>
                            </div>
                          </div>
                        )
                    })
                  }
                </div>
                <div className="faq-button">
                  <Button title="More info" />
                </div>
            </Container>
        </div>
      )
}

export default FAQ