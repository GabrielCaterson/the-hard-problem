import React, { Component, useRef } from "react";



export class ReadMore extends Component {
	constructor(props) {
		super(props);

		this.state = {
        }
	}
    
	render() {

        return (
			<section className={ "read-more " + this.props.color } >
               Read more
            </section>
		);
	}
}

export default ReadMore;