import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderPath from "./HeaderPath/HeaderPath";

function Header({isOpenedSearchInput, setIsOpenedSearchInput}) {

    return (
        <header className="main_header">
            <HeaderContacts/>
            <HeaderMenu isOpenedSearchInput={isOpenedSearchInput} setIsOpenedSearchInput={setIsOpenedSearchInput}/>
            <HeaderPath/>            
        </header>
    );
}

export default Header;