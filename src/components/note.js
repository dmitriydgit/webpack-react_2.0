import React, { Component } from "react";
import s from "./note.css";
import PropTypes from 'prop-types'


class Note extends React.Component {
	render() {
		let style = { backgroundColor: this.props.color };
		return (
			<div className={s.note} style={style}>
				<span className={s.delete_note} onClick={this.props.onDelete}> × </span>
				{this.props.children}
			</div>
		);
	}
};


Note.propTypes = {
	color: PropTypes.string,
	children: PropTypes.string,
}

export default Note;