import classes from './Search.module.scss';

const Search = ({isOpenedSearchInput, setIsOpenedSearchInput}) => {

    function openInput(e) {
        setIsOpenedSearchInput(!isOpenedSearchInput);
    }

    return (
        <div className={classes.search}>
            {!isOpenedSearchInput
                ? <div onClick={openInput} className={classes.search_icon}>
                    <img src="img/icons/search.svg" alt="Search icon" />
                </div>
                : <div className={classes.search_input} onClick={e => e.stopPropagation()}>
                    <input type="text" placeholder='Поиск...' />
                </div>
            }
        </div>
    );
}

export default Search;