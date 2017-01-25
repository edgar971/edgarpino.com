import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import $ from 'jquery';


/**
 *
 */
class ContactForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            submitted: false,
            success: false,
            sending: false
        };

        this.EMAIL_SERVICE_URL = 'https://nyhxayv3k5.execute-api.us-east-1.amazonaws.com/dev/api/email/send';


    }

    send(data) {

        let request = this.structureMailgunPost(data);

        $.ajax(request).then((response) => {

            this.setState({
                success: true,
                sending: false
            });

        });


    }

    structureMailgunPost(fields) {

        let request,
            email = {
                from: fields.from,
                message: fields.message,
                name: fields.name
            };

        request = {
            type: 'POST',
            dataType: 'json',
            url: this.EMAIL_SERVICE_URL,
            data: JSON.stringify(email),

        };

        return request;

    }

    /**
     * Simple validation.
     */
    validate() {

        let values = this.getFormValues(),
            valid = true;

        for(let key in values) {


            if(values[key].length <= 0) {

                valid = false;

            }

        }

        this.setState({
            valid: valid
        })
    }

    submit(e) {

        e.preventDefault();

        this.setState({
            sending: true
        });

        let fields = this.getFormValues();
        this.send(fields);

    }


    getFormValues() {

        return {
            name: ReactDOM.findDOMNode(this.refs.name).value,
            from: ReactDOM.findDOMNode(this.refs.email).value,
            message: ReactDOM.findDOMNode(this.refs.message).value
        }

    }

    render() {
        return (
            <div>
                <Display if={!this.state.success}>
                    <form method="post" action="javascript:void(0)" onSubmit={this.submit.bind(this)} onKeyUp={this.validate.bind(this)}>
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)"><input type="text" ref="name" id="name" placeholder="Name" required/></div>
                            <div className="6u$ 12u$(xsmall)"><input type="email" ref="email" id="email" placeholder="Email" required/></div>
                            <div className="12u$"><textarea ref="message" id="message" placeholder="Message" rows="4"></textarea></div>
                            <div className="12u$">
                                <ul className="actions">
                                    <li>

                                        <Display if={this.state.valid && !this.state.sending}>
                                            <input type="submit"  value="Send Message" className="special" />
                                        </Display>
                                        <Display if={!this.state.valid && !this.state.sending}>
                                            <input type="submit" disabled value="Send Message" className="special" />
                                        </Display>
                                        <Display if={this.state.valid && this.state.sending}>
                                            <input type="submit" disabled value="Sending Message..." className="special" />
                                        </Display>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </Display>
                <Display if={this.state.success}>
                    <header>
                        <h2>Thank you!</h2>
                        <p><strong>Your message was successfully sent. Expect an email from me soon.</strong></p>
                    </header>
                </Display>
            </div>
        )
    }

}

module.exports = ContactForm;