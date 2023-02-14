import { useRef } from "react";
import Contact from "../../../entities/contact/contact.class";
import state from "../../../entities/contact/states";
import styles from "./new_contact.module.css";

function NewContact({ newContact }) {
	const avatarRef = useRef();
	const nameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const stateRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const contact = new Contact(
			avatarRef.current.value,
			nameRef.current.value,
			lastNameRef.current.value,
			emailRef.current.value,
			phoneRef.current.value,
			stateRef.current.value
		);
		newContact(contact);

		avatarRef.current.value = "";
		nameRef.current.value = "";
		lastNameRef.current.value = "";
		emailRef.current.value = "";
		phoneRef.current.value = "";
		stateRef.current.value = "";
	};

	return (
		<div className={styles.container}>
			<h3>New contact</h3>
			<form className={styles._form} onSubmit={handleSubmit}>
				<div className={styles._item}>
					<label htmlFor="avatar">Avatar</label>
					<input ref={avatarRef} type="text" id="avatar" />
				</div>
				<div className={styles._item}>
					<label htmlFor="name">Name</label>
					<input ref={nameRef} type="text" id="name" />
				</div>
				<div className={styles._item}>
					<label htmlFor="lastname">Last Name</label>
					<input ref={lastNameRef} type="text" id="lastname" />
				</div>
				<div className={styles._item}>
					<label htmlFor="email">Email</label>
					<input ref={emailRef} type="text" id="email" />
				</div>
				<div className={styles._item}>
					<label htmlFor="phone">Phone</label>
					<input ref={phoneRef} type="text" id="phone" />
				</div>
				<div className={styles._item}>
					<label htmlFor="state">State</label>
					<select ref={stateRef} id="state">
						<option value={state.CONNECTED}>{state.CONNECTED}</option>
						<option value={state.DISCONNECTED}>{state.DISCONNECTED}</option>
					</select>
				</div>
				<input className={styles._btn} type="submit" value="Create"/>
			</form>
		</div>
	);
};

export default NewContact;
