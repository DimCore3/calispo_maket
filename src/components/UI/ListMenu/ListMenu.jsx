import './ListMenu.scss'

function ListMenu({ slug }) {
    const dropList = [
        { name: 'Выбор по цене', link: 'price_' + slug },
        { name: 'Выбор по форме', link: 'form_' + slug },
        { name: 'Выбор по стилю', link: 'style_' + slug },
        { name: 'Выбор по материалу', link: 'material_' + slug },
    ];

    function click(link) {
        console.log(link)
    };

    return (
        <div className='ListMenu'>
            {dropList.map(element =>
                <div key={element.link + '_dropList'}>
                    <p onClick={() => click(element.link)}>{element.name}</p>
                </div>
            )
            }
        </div>
    );
}

export default ListMenu;