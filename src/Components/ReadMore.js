import React from "react";

const ReadMore = (props) => {
	return (
		<a className={ "read-more " + props.color } href={ props.link } target="_blank" rel="noopener noreferrer" >
           { props.text }
        </a>
	);
}

export default ReadMore;