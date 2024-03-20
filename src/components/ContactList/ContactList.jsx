import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from "../../redux/selectors";
import { filterStatus } from "../../redux/constants";

const getVisibleContacts = (contacts, filter) => {
  return filter.status !== filterStatus.favorite ?
    contacts.filter(c => c.name.toLowerCase().includes(filter.search.toLowerCase())) :
    contacts.filter(c => c.favorite).filter(c => c.name.toLowerCase().includes(filter.search.toLowerCase()));
}

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      {visibleContacts.length ?
        <ul className={css.contactList}>
          { visibleContacts.map((contact) => <li key={contact.id}><Contact  contact={contact}/></li>)}
        </ul> : null
      }
    </>
  )
}

export default ContactList;