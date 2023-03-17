import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderPath from "./HeaderPath/HeaderPath";

function Header() {

    return (
        <header className="main_header">
            <HeaderContacts/>
            <HeaderMenu/>
            <HeaderPath/>            
        </header>
    );
}

export default Header;