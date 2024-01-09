import React, { useState } from 'react'
import Container from './utilities/Container'
import Button from './utilities/Button'

const Form = () => {
  const [mail, setMail] = useState('');
  const [showError, setShowError] = useState(false);

  function checkEmail(x){
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(x);
  };

  const handleSubmission = e => {
    e.preventDefault();
    if(checkEmail(mail) === true) {
        setMail('');
        setShowError(false);
    } else {
        setShowError(true);
        setMail(mail);
    };
  };

  return (
    <div id="contact">
        <Container>
            <h5>{`35,000+ ${("already joined").toUpperCase()}`}</h5>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form>
                <div className="email-field">
                    <input type="email" value={mail} onChange={e => setMail(e.target.value)} name="email" id="email" placeholder="Enter your email address..." required />
                    {showError && <p className="error-space">Whoops. Make sure it's an email.</p>}
                </div>
                <div className="button-field">
                    <Button handleSubmission={handleSubmission} title="Contact Us" />
                </div>
            </form>
        </Container>
    </div>
  )
}

export default Form