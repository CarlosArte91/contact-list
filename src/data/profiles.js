import state from "../entities/contact/states";
import jhon from "../assets/profiles/jhon.jpeg";
import emily from "../assets/profiles/emily.jpeg";
import winnie from "../assets/profiles/winnie.jpeg";
import william from "../assets/profiles/william.jpeg";


const data = [
	{
		avatar: jhon,
		name: "Jhon",
		lastName: "Tomas",
		email: "tomasJ@mail.com",
		phoneNumber: "356-9854-55",
		state: state.DISCONNECTED,
	},
	{
		avatar: emily,
		name: "Emily",
		lastName: "Watson",
		email: "emit10@mail.com",
		phoneNumber: "87544-35784",
		state: state.DISCONNECTED,
	},
	{
		avatar: winnie,
		name: "Winnie",
		lastName: "Diamont",
		email: "dwinnie@mail.com",
		phoneNumber: "965-78441-10",
		state: state.DISCONNECTED,
	},
	{
		avatar: william,
		name: "William",
		lastName: "Bonce",
		email: "bonceW@mail.com",
		phoneNumber: "657-84255-5",
		state: state.DISCONNECTED,
	}
];

export default data;
