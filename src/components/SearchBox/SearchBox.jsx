import { useId } from 'react';
import css from './SearchBox.module.css';

function SearchBox({ search, onSearch }) {
    const searchId = useId();
    return (
        <div className={css.searchBox}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input className={css.search} type="text" value={search} onChange={onSearch} id={searchId} />
        </div>
    )
}

export default SearchBox;