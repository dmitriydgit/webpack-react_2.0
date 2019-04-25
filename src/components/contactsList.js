import React, { Component } from "react";
import s from "./contactsList.css";
import Contact from "./contact";
import CONTACTS from "./contactBase";


class ContactsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayedContacts: CONTACTS
		}
		this.handleSearch = this.handleSearch.bind(this);
	}


	handleSearch(event) {
		var searchQuerry = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function (el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuerry) !== -1;
		})
		this.setState({ displayedContacts: displayedContacts });
	}

	render() {
		return (
			<div className={s.contacts}>
				<input type='text' className={s.search_field} onChange={this.handleSearch} />
				<ul className={s.contacts_list}>
					{this.state.displayedContacts.map(function (el) {
						return (
							<Contact
								name={el.name}
								key={el.id}
								phoneNumber={el.phoneNumber}
								image={el.image}
								age={el.age}
								sex={el.sex}
								isHuman={el.isHuman}
							/>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default ContactsList;