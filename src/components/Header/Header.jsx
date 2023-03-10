import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

function Header() {

    return (
        <header className="main_header">
            <HeaderContacts/>
            <HeaderMenu/>
        </header>
    );
}

export default Header;