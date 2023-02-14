import styles from "./contact_list.module.css";
import data from "../../../data/profiles";
import { useEffect, useState } from "react";
import ContactComponent from "../../pures/contact/contact_component";
import Contact from "../../../entities/contact/contact.class";
import NewContact from "../../forms/create_form/new_contact";
import headers from "../../../data/headers";
import state from "../../../entities/contact/states";

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

	const changeState = (contact) => {
		let tempContact = [...users];
		const index = tempContact.indexOf(contact);

		if (tempContact[index].state === state.CONNECTED) tempContact[index].state = state.DISCONNECTED;
		else tempContact[index].state = state.CONNECTED;

		setUsers(tempContact);
	};

	return (
		<div className={styles.container}>
			<h2>Contacts list</h2>
			<table className={styles._table}>
					<thead>
						<tr className={styles._tr}>
							{ headers.map((header, index) => <th key={index} className={styles._th}>{header}</th>) }
						</tr>
					</thead>
					<tbody>
						{ users.length ? users.map((user, index) => (
							<ContactComponent
								key={index}
								contact={user}
								remove={deleteContact}
								connect={changeState}
							/>
						)) : null }
					</tbody>
				</table>
				<NewContact newContact={addContact} />
		</div>
	);
};

export default ContactList;
