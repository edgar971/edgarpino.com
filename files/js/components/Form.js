import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';


/**
 *
 */
class ContactForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            valid: false,
        };
    }

    send() {


    }


    validate() {

        let values = this.getFormValues(),
            valid = true;

        for(let key in values) {


            if(values[key].length <= 0) {

                valid = false;

            }

        }

        this.state.valid = valid;


    }

    submit(e) {

        e.preventDefault();
        let email = this.getFormValues();

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
                <form method="post" action="javascript:void(0)" onSubmit={this.submit.bind(this)} onKeyUp={this.validate.bind(this)}>
                    <div className="row uniform">
                        <div className="6u 12u$(xsmall)"><input type="text" ref="name" id="name" placeholder="Name" required/></div>
                        <div className="6u$ 12u$(xsmall)"><input type="email" ref="email" id="email" placeholder="Email" required/></div>
                        <div className="12u$"><textarea ref="message" id="message" placeholder="Message" rows="4"></textarea></div>
                        <div className="12u$">
                            <ul className="actions">
                                <li>

                                    <Display if={this.state.valid}>
                                        <input type="submit"  value="Send Message" className="special" />
                                    </Display>
                                    <Display if={!this.state.valid}>
                                        <input type="submit" disabled value={this.state.valid} className="special" />
                                    </Display>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

module.exports = ContactForm;