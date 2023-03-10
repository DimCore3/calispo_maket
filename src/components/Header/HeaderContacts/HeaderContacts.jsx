import './HeaderContacts.scss'

function HeaderContacts() {

    function orderCall() {
        console.log('Заказать звонок');
    }

    return (
        <div className="full_width_header_contacts">
            <div className="header_contacts">
                <div className="header_left_side">
                    <div className="header_mail">
                        <img src="img/icons/mail.svg" alt="mail icon" />
                        <a href="mailto:3dmi3y@gmail.com">3dmi3y@gmail.com</a>
                    </div>
                    <div className="header_call">

                        <div className="header_phone">
                            <img src="img/icons/phone.svg" alt="phone icon" />
                            <a href="tel:+79000000000">+7 900 000 00 00</a>
                        </div>
                        <div className="header_order_call">
                            <button onClick={orderCall}>
                                <img src="img/icons/phone.svg" alt="phone icon" />
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header_right_side">
                    <a href="https://www.whatsapp.com/">
                        <img src="img/icons/whatsapp.svg" alt="whatsapp icon" />
                    </a>
                    <a href="https://www.vk.com/">
                        <img src="img/icons/vkontakte.svg" alt="vkontakte icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderContacts;