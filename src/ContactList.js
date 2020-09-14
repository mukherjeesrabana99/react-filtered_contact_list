import React from 'react';
import './ContactList.css'
class ContactList extends React.Component{
	render(){
		return(
			<div className="card">
			<li><i className="fa fa-phone">{this.props.name}  {this.props.phone}</i></li>
			</div>
			);
	}
}
export default ContactList;