import DropDownHeader from '../../UI/DropDownHeader/DropDownHeader';
import Search from '../../UI/Search/Search';
import './HeaderMenu.scss';

function HeaderMenu({isOpenedSearchInput, setIsOpenedSearchInput}) {

    const headerMenuList = [
        {
            name: 'О компании',
            slug: 'about_company',
            type: 'dropdown',
            list: [
                'О нас',
                'Контакты',
                'Карьера',
            ],
        },
        {
            name: 'Каталог',
            slug: 'catalogy',
            type: 'dropdown',
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
            type: 'dropdown',
            list: [
                'Сборка',
                'Доставка',
                'Замеры',
                'Под ключ',
            ],
        },
        {
            name: 'Блог',
            slug: 'blog',
            type: 'link',
            link: '/blog',
        },
        {
            name: 'Контакты',
            slug: 'contacts',
            type: 'link',
            link: '/contacts',
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

                        element.type === 'dropdown'
                            ? <DropDownHeader
                                key={element.slug + 'header_menu'}
                                name={element.name}
                                IncludedComponent={
                                    element.list.map((e, index) =>
                                        <p key={'header_menu_list_' + index}>{e}</p>
                                    )
                                } />
                            : <div className='link_header_menu' key={element.slug + 'header_menu'}>
                                <h3>
                                    <a href={element.link}>{element.name.toUpperCase()}</a>
                                </h3>
                            </div>
                    )}
                    <Search isOpenedSearchInput={isOpenedSearchInput} setIsOpenedSearchInput={setIsOpenedSearchInput}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;