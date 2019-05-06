import React, { Component } from "react";
import s from "./noteSearch.css";
import PropTypes from 'prop-types';




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


NoteSearch.propTypes = {
	onSearch: PropTypes.func

}


export default NoteSearch;