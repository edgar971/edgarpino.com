import React, { PureComponent } from 'react'

class Display extends PureComponent {
    render() {
        return (this.props.if) ? <div>{this.props.children}</div> : null;
    }
}

export default Display