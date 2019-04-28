import React, { Component } from "react";
import s from "./noteSearch.css";

class NoteSearch extends React.Component {

	render() {
		return (
			<div>
				<input
					type='text'
					className={s.search_field}
					placeholder='Search...'
					onKeyUp={this.props.onSearch}
				/>
			</div>
		)
	}
}

export default NoteSearch;