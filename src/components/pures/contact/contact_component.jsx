import PropTypes from "prop-types";
import Contact from "../../../entities/contact/contact.class";
import "./contact_component.module.css";
import trash from "../../../assets/icons/trash3-fill.svg";

function ContactComponent({ contact, remove }) {
	return (
		<tr>
			<td style={{width: "30px"}}>
				<img className="profile-img" src={contact.avatar} alt="profile" />
			</td>

			<td>{contact.name}</td>
			<td>{contact.lastName}</td>
			<td>{contact.email}</td>
			<td>{contact.phoneNumber}</td>
			<td>{contact.state}</td>

			<td>
				<div>
					<img src={trash} alt="trash" onClick={() => remove(contact)} />
				</div>
			</td>
		</tr>
	);
};

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
