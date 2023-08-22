import React, { Component, useRef } from "react";



export class ReadMore extends Component {
	constructor(props) {
		super(props);

		this.state = {
        }
	}
    
	render() {

        return (
			<a className={ "read-more " + this.props.color } href={ this.props.link } target="_blank" rel="noopener noreferrer" >
               { this.props.text }
            </a>
		);
	}
}

export default ReadMore;