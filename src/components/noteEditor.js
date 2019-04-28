import React, { Component } from "react";
import s from "./noteEditor.css";

class NoteEditor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			color: ''
		}
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleNoteAdd = this.handleNoteAdd.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
	}

	handleTextChange(event) {
		this.setState({ text: event.target.value });
	}

	handleColorChange(e) {
		this.setState({
			color: e.target.value
		})
	}

	handleNoteAdd() {
		var newNote = {
			text: this.state.text,
			color: this.state.color,
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.setState({ text: '' });
	};

	render() {
		return (
			<div className={s.note_editor}>
				<input type="color" onChange={this.handleColorChange}></input>
				<textarea
					placeholder="Enter your note here..."
					rows={5}
					className={s.textarea}
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<button className={s.add_button} onClick={this.handleNoteAdd}>Add</button>
			</div>
		);
	}
};

export default NoteEditor;