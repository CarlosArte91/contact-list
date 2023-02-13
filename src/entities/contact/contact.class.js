import state from "./states";

class Contact {
	avatar = "";
	name = "";
	lastName = "";
	email = "";
	phoneNumber = "";
	state = state.DISCONNECTED;

	constructor(avatar, name, lastName, email, phoneNumber, state) {
		this.avatar = avatar;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.state = state;
	};
};

export default Contact;
