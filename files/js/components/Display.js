var React = require('react'),
    Display;

Display = React.createClass({
        render() {
            return (this.props.if) ? <div>{this.props.children}</div> : null;
        }
    }
);

module.exports = Display;