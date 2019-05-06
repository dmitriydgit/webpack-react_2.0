import React, { Component } from "react";
import s from "./notesGrid.css";
import PropTypes from 'prop-types'
import Masonry from '../../node_modules/masonry-layout';
import Note from '../components/note';

class NotesGrid extends React.Component {
	componentDidMount() {
		let grid = this.refs.grid;
		this.msnry = new Masonry(grid, {
			itemSelector: '.note',
			columnWidth: 200,
			gutter: 10,
			isFitWidth: true
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.notes.length !== prevProps.notes.length) {
			this.msnry.reloadItems();
			this.msnry.layout();
		}
	};

	render() {
		let onNoteDelete = this.props.onNoteDelete;

		return (
			<div className={s.notes_grid} ref="grid">
				{
					this.props.notes.map(function (note) {
						return (
							<Note
								key={note.id}
								onDelete={onNoteDelete.bind(null, note)}
								color={note.color}>
								{note.text}
							</Note>
						);
					})
				}
			</div>
		);
	}
};

NotesGrid.propTypes = {
	notes: PropTypes.array,
	note: PropTypes.object,
}

export default NotesGrid;