import css from './Contact.module.css';

function Contact({ contact, onDelete }) {
    return (
        <li className={css.contact}>
            <div>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
            </div>
            <button type="button" onClick={()=>{onDelete(contact.id)}}>Delete</button>
        </li>
    )
}

export default Contact;