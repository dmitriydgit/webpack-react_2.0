import React, { Component } from "react";
import s from "./notesApp.css";
import PropTypes from 'prop-types';
import NoteSearch from "./noteSearch";
import NoteEditor from "./noteEditor";
import NotesGrid from "./notesGrid";
const articles = require('../articles.json');




class NotesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			notesBackup: []
		};
		this.handleNoteDelete = this.handleNoteDelete.bind(this)
		this.handleNoteAdd = this.handleNoteAdd.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
	}



	componentDidMount() {
		let localNotes = articles;
		if (localNotes) {
			this.setState({
				notes: localNotes,
				notesBackup: localNotes
			});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		this._updateLocalStorage();
	};

	handleNoteAdd(newNote) {
		let newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);
		this.setState(
			{
				notes: newNotes,
				notesBackup: newNotes
			}
		);
		this._updateLocalStorage();
	};

	handleNoteDelete(note) {
		let noteId = note.id;
		let newNotes = this.state.notes.filter(function (note) {
			return note.id !== noteId;
		});
		this.setState({
			notes: newNotes,
			notesBackup: newNotes
		});
		this._updateLocalStorage();
	};

	handleSearch(e) {
		let searchQuery = e.target.value;

		if (e.keyCode === 13) {
			let searchedNotes = this.state.notes.filter(function (note) {
				return note.text.toLowerCase().indexOf(searchQuery) !== -1;
			})
			this.setState({
				notes: searchedNotes,
			})
		}
		if (searchQuery.length === 0) {
			this.setState({
				notes: this.state.notesBackup,
			})
		}
	}

	render() {
		return (
			<div className={s.notes_app}>
				<h2 className={s.app_header}>NotesApp</h2>
				<NoteSearch onSearch={this.handleSearch} />
				<NoteEditor onNoteAdd={this.handleNoteAdd} />
				<NotesGrid
					notes={this.state.notes}
					onNoteDelete={this.handleNoteDelete}
				/>
			</div>
		);
	};

	_updateLocalStorage() {
		let notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}
};


NotesApp.propTypes = {
	notes: PropTypes.array,
	notesBackup: PropTypes.array,

}

export default NotesApp;



