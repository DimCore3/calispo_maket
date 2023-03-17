import DropDownHeader from '../../UI/DropDownHeader/DropDownHeader';
import './HeaderMenu.scss';

function HeaderMenu() {
    const headerMenuList = [
        {
            name: 'О компании',
            slug: 'about_company',
            list: [
                'О нас',
                'Контакты',
                'Карьера',
            ],
        },
        {
            name: 'Каталог',
            slug: 'catalogy',
            list: [
                'Столы',
                'Стулья',
                'Шкафы',
                'Кровати',
            ],
        },
        {
            name: 'Услуги',
            slug: 'service',
            list: [
                'Сборка',
                'Доставка',
                'Замеры',
                'Под ключ',
            ],
        },
    ];

    return (
        <div className="full_width_header_menu">
            <div className="header_menu">
                <div className="left_side_header_menu">
                    <a href="/">
                        <img src="img/logo/logo_without_text.png" alt="logo without text" />
                    </a>
                </div>
                <div className="right_side_header_menu">
                    {headerMenuList.map(element =>
                        <DropDownHeader
                            key={element.slug + 'header_menu'}
                            name={element.name}
                            IncludedComponent={
                                element.list.map((e, index) =>
                                    <p key={'header_menu_list_' + index}>{e}</p>
                                )
                            } />
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;