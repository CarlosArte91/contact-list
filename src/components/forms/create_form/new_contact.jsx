import { useRef } from "react";
import Contact from "../../../entities/contact/contact.class";
import state from "../../../entities/contact/states";

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
	};

	return (
		<div>
			<h3>New contact</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="avatar">Avatar</label>
					<input ref={avatarRef} type="text" id="avatar" />
				</div>
				<div>
					<label htmlFor="name">Name</label>
					<input ref={nameRef} type="text" id="name" />
				</div>
				<div>
					<label htmlFor="lastname">Last Name</label>
					<input ref={lastNameRef} type="text" id="lastname" />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input ref={emailRef} type="text" id="email" />
				</div>
				<div>
					<label htmlFor="phone">Phone</label>
					<input ref={phoneRef} type="text" id="phone" />
				</div>
				<div>
					<label htmlFor="state">State</label>
					<select ref={stateRef} id="state">
						<option value={state.CONNECTED}>{state.CONNECTED}</option>
						<option value={state.DISCONNECTED}>{state.DISCONNECTED}</option>
					</select>
				</div>
				<input type="submit" value="Create"/>
			</form>
		</div>
	);
};

export default NewContact;
