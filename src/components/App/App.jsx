import css from './App.module.css';
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Header from '../Header/Header';
import Filter from '../Filter/Filter';

const App = () => {
  return (
    <>
      <Header/>
      <main className={css.wrapper}>
        <ContactList/>
        <div>
          <Filter/>
          <ContactForm />
        </div>
      </main>
    </>
  )
}

export default App;