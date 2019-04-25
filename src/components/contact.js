import React, { Component } from "react";
import s from "./contact.css";



class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpened: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			isOpened: !this.state.isOpened
		})
		console.log(this.state.isOpened)
	}

	showShortInfo() {
		return (
			<li className={s.contact} onClick={this.handleClick} >
				<img className={s.contact_image} src={this.props.image} alt={this.props.name} />
				<div className={s.contacts_info}>
					<div className={s.contact_name}>{this.props.name}</div>
					<div className={s.contact_phoneNumber}>{this.props.phoneNumber}</div>
				</div>
			</li >
		)
	}

	showFullInfo() {
		return (
			<li className={s.contact} onClick={this.handleClick} >
				<img className={s.contact_image} src={this.props.image} alt={this.props.name} />
				<div className={s.contacts_info}>
					<div className={s.contact_name}>{this.props.name}</div>
					<div className={s.contact_phoneNumber}>{this.props.phoneNumber}</div>
					<div className={s.contact_phoneNumber}>Age: {this.props.age}</div>
					<div className={s.contact_phoneNumber}>Sex: {this.props.sex}</div>
					<div className={s.contact_phoneNumber}>Human: {this.props.isHuman.toString()}</div>
				</div>
			</li >
		)
	}


	render() {
		return (
			this.state.isOpened ? this.showFullInfo() : this.showShortInfo()
		)
	}
}

export default Contact;