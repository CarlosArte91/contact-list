import PropTypes from "prop-types";
import Contact from "../../../entities/contact/contact.class";
import styles from "./contact_component.module.css";
import trash from "../../../assets/icons/trash3-fill.svg";
import state from "../../../entities/contact/states";

function ContactComponent({ contact, remove, connect }) {
	return (
		<tr className={styles._tr}>
			<td className={styles.profileceld}>
				<img
					style={contact.state === state.CONNECTED ? {boxShadow: "0px 0px 3px 1px #76ff03"} : {boxShadow: "0px 0px 3px 1px #ff9800"}}
					className={styles.profileimg}
					src={contact.avatar}
					alt="profile"
				/>
			</td>

			<td className={styles._td}>{contact.name}</td>
			<td className={styles._td}>{contact.lastName}</td>
			<td className={styles._td}>{contact.email}</td>
			<td className={styles._td}>{contact.phoneNumber}</td>
			<td className={styles._td}>
				<input
					type="checkbox"
					checked={contact.state === state.CONNECTED ? true : false }
					onChange={() => connect(contact)}
				/>
			</td>

			<td className={styles._td}>
				<div>
					<img className={styles._trash} src={trash} alt="trash" onClick={() => remove(contact)} />
				</div>
			</td>
		</tr>
	);
};

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
