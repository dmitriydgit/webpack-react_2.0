import React, { Component } from "react";
import s from "./note.css";


class Note extends React.Component {
	render() {
		var style = { backgroundColor: this.props.color };
		return (
			<div className={s.note} style={style}>
				<span className={s.delete_note} onClick={this.props.onDelete}> × </span>
				{this.props.children}
			</div>
		);
	}
};

export default Note;