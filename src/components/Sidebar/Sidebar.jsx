import DropDownMenu from "../UI/DropDownMenu/DropDownMenu";
import ListMenu from "../UI/ListMenu/ListMenu";
import Parameters from "../UI/Parameters/Parameters";
import './sidebar.scss';

function Sidebar() {
    const sidebarList = [
        {
            name: 'Кухни',
            slug: 'kitchens',
        },
        {
            name: 'Шкафы',
            slug: 'wardrobes',
        },
        {
            name: 'Корпусная мебель',
            slug: 'furnitures',
        },
        {
            name: 'Столешницы',
            slug: 'tables',
        },
        {
            name: 'Материалы',
            slug: 'materials',
        },
    ];

    const parametersList = [
        {
            name: 'Цена',
            slug: 'price',
        },
    ];

    return (
        <div className="sidebar">
            {sidebarList.map((element, index) =>
                <DropDownMenu
                    name={element.name}
                    key={element.slug + '_' + index}
                    IncludedComponent={<ListMenu slug={element.slug} />}
                />
            )}
            <div className="parameter_title">
                <h3>Подбор параметров</h3>
            </div>
            {parametersList.map((element, index) =>
                <DropDownMenu
                    name={element.name}
                    key={element.slug + '_' + index}
                    IncludedComponent={<Parameters slug={element.slug} />}
                />
            )}
        </div>
    );
}

export default Sidebar;