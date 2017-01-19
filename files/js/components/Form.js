import React from 'react';


class ContactForm extends React.Component {

    render() {
        return (
            <div>
                <form method="post" action="#">
                    <div className="row uniform">
                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div className="12u$"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" disabled value="Send Message" className="special" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

module.exports = ContactForm;