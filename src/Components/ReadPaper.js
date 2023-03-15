import React, { Component, useRef } from "react";



export class ReadPaper extends Component {
	constructor(props) {
		super(props);

		this.state = {
        }
	}
    
	render() {

        return (
			<a className={ "read-more read-paper " + this.props.color } href={ this.props.link } target="_blank" rel="noopener noreferrer" >
               Read paper
            </a>
		);
	}
}

export default ReadPaper;