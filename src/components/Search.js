import styles from './styles/search.module.css';

const Search = (props) => {
    const {onChange} = props;

    return(
        <>
            <input
            className={styles.search__input} 
                type="text"
                placeholder="Поиск по имени"
                name="search"
                onChange={onChange}
            />
        </>
    )
}

export default Search;