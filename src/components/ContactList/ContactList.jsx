import Contact from "../Contact/Contact";
import css from './ContactList.module.css';


function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {
        contacts.map((contact) => <Contact key={contact.id} contact={contact} onDelete={onDelete} />)
      }
    </ul>
  )
}

export default ContactList;