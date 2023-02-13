import "./contact_list.module.css";
import data from "../../../data/profiles";
import { useEffect, useState } from "react";
import ContactComponent from "../../pures/contact/contact_component";
import Contact from "../../../entities/contact/contact.class";
import NewContact from "../../forms/create_form/new_contact";

function ContactList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const profiles = data.map((profile) => new Contact(
			profile.avatar,
			profile.name,
			profile.lastName,
			profile.email,
			profile.phoneNumber,
			profile.state
		));
		setUsers(profiles);
	}, []);

	const deleteContact = (contact) => {
		let tempContact = [...users];
		tempContact = tempContact.filter((item) => item !== contact);
		setUsers(tempContact);
	};

	const addContact = (contact) => {
		let tempContact = [...users];
		tempContact.unshift(contact);
		setUsers(tempContact);
	};

	return (
		<div>
			<h2>Contacts list</h2>
			<table>
					<thead>
						<tr>
							<th>Avatar</th>
							<th>Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>State</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ users.length ? users.map((user, index) => (
							<ContactComponent
								key={index}
								contact={user}
								remove={deleteContact}
							/>
						)) : null }
					</tbody>
				</table>
				<NewContact newContact={addContact} />
		</div>
	);
};

export default ContactList;
