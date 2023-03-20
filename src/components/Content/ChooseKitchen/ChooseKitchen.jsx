import { useState } from 'react';
import './ChooseKitchen.scss'
import ChooseOptionImgs from './Options/ChooseOptionImg/ChooseOptionImgs';
import ChooseOptionSelect from './Options/ChooseOptionSelect/ChooseOptionSelect';
import ProgressBarAndButtons from './ProgressBarAndButtons/ProgressBarAndButtons';

const ChooseKitchen = () => {
    const [indexOpenedView, setIndexOpenedView] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    let options = [
        {
            title: 'Выберите планировку кухни',
            options: [
                { name: 'Прямая', alt: 'Straight', slug: 'straight', img: 'img/chooseKitchenOptions/options_0/straight.svg' },
                { name: 'Угловая', alt: 'Angular', slug: 'angular', img: 'img/chooseKitchenOptions/options_0/angular.svg' },
                { name: 'П-образная', alt: 'Informal', slug: 'informal', img: 'img/chooseKitchenOptions/options_0/informal.svg' },
                { name: 'С островом или барной стойкой', alt: 'With island', slug: 'withIsland', img: 'img/chooseKitchenOptions/options_0/withIsland.svg' },
                { name: 'Еще не определились', alt: 'Undefined', slug: 'undefined', img: 'img/chooseKitchenOptions/options_0/undefined.svg' },
            ],
        },
        {
            title: 'Есть ли у вас размеры или проект будущей кухни?',
            options: [
                { name: 'Да, есть проект', slug: 'thereIsProject', addition: 'file' },
                { name: 'Есть размеры', slug: 'thereIsSize', addition: 'text' },
                { name: 'Нет', slug: 'no', addition: '' },
                { name: 'Просто интересно', slug: 'onlyInteresting', addition: '' },
            ],
            slug: 'kitchen',
            img: 'img/chooseKitchenOptions/options_1/kitchen.svg',
        },
        {
            title: 'Выберите общий вид',
            options: [
                { name: 'Стандартная', alt: 'Standart', slug: 'standart', img: 'img/chooseKitchenOptions/options_2/standart.svg' },
                { name: 'Высокая', alt: 'Heighted', slug: 'heighted', img: 'img/chooseKitchenOptions/options_2/heighted.svg' },
                { name: 'С антресолью', alt: 'Antresol', slug: 'antresol', img: 'img/chooseKitchenOptions/options_2/antresol.svg' },
                { name: 'С глубокой антресолью', alt: 'Deep antresol', slug: 'deepAntresol', img: 'img/chooseKitchenOptions/options_2/deepAntresol.svg' },
            ],
        },
        {
            title: 'Выберите фурнитуру',
            options: [
                { name: 'Бюджетный вариант (Boyard, Firmax)', slug: 'low_quality', addition: '' },
                { name: 'Средний вариант (Hettiich, Samsung)', slug: 'medium_quality', addition: '' },
                { name: 'Премиум вариант (Blum)', slug: 'high_quality', addition: '' },
                { name: 'Не знаю, нужна консультация', slug: 'idk_need_consultation', addition: '' },
            ],
            slug: 'furniture',
            img: 'img/chooseKitchenOptions/options_3/furniture.svg',
        },
        {
            title: 'Выберите материал фасадов',
            options: [
                { name: 'Плёнка ПВХ', alt: 'PVH', slug: 'pvh', img: 'img/chooseKitchenOptions/options_4/pvh.svg' },
                { name: 'Акрил', alt: 'Acril', slug: 'acril', img: 'img/chooseKitchenOptions/options_4/acril.svg' },
                { name: 'Пластик', alt: 'Plastic', slug: 'plastic', img: 'img/chooseKitchenOptions/options_4/plastic.svg' },
                { name: 'Лакокраска', alt: 'lcolor', slug: 'lcolor', img: 'img/chooseKitchenOptions/options_4/lcolor.svg' },
                { name: 'Не знаю', alt: 'idk', slug: 'idk', img: 'img/chooseKitchenOptions/options_4/idk.svg' },
            ],
        },
        {
            title: 'Выберите тип столешницы',
            options: [
                { name: 'ЛДСП, МДФ', alt: 'PVH', slug: 'pvh', img: 'img/chooseKitchenOptions/options_5/ldsp.svg' },
                { name: 'Каменная', alt: 'rock', slug: 'rock', img: 'img/chooseKitchenOptions/options_5/rock.svg' },
                { name: 'Не знаю', alt: 'idk', slug: 'idk', img: 'img/chooseKitchenOptions/options_5/idk.svg' },
            ],
        },
        {
            title: 'Выберите тип ручек',
            options: [
                { name: 'Стандартные', alt: 'Standart', slug: 'standart', img: 'img/chooseKitchenOptions/options_6/standart.svg' },
                { name: 'Без ручек', alt: 'Without ruchek', slug: 'withoutRuchek', img: 'img/chooseKitchenOptions/options_6/withoutRuchek.svg' },
                { name: 'Профиль GOLA', alt: 'Profile GOLA', slug: 'profileGOLA', img: 'img/chooseKitchenOptions/options_6/profileGOLA.svg' },
            ],
        },
        {
            title: 'Выберите фартук',
            options: [
                { name: 'МДФ или ЛДСП', alt: 'MDF', slug: 'mdf', img: 'img/chooseKitchenOptions/options_7/mdf.svg' },
                { name: 'Стекло', alt: 'Glass', slug: 'glass', img: 'img/chooseKitchenOptions/options_7/glass.svg' },
                { name: 'Не считать фартук', alt: 'Dont count', slug: 'dontCount', img: 'img/chooseKitchenOptions/options_7/dontCount.svg' },
            ],
        },
        {
            title: 'Планируемая техника',
            options: [
            ],
        },
        {
            title: 'Какой бюджет планируете?',
            options: [
                { name: '60-90 тыс.', alt: '60_90_amount', slug: '60_90_amount', img: '' },
                { name: '90-130 тыс.', alt: '90_130_amount', slug: '90_130_amount', img: '' },
                { name: '130-180 тыс.', alt: '130_180_amount', slug: '130_180_amount', img: '' },
                { name: 'Более 180 тыс.', alt: 'more_180_amount', slug: 'more_180_amount', img: '' },
            ],
        },
    ];

    function isShowOption(indexesWithOptionImgs) {
        for (let index of indexesWithOptionImgs) {
            if (indexOpenedView === index) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="choose_kitchen_root">
            <h3>{options[indexOpenedView].title ?? ''}</h3>
            <div className="choose_kitchen_content">
                {
                    isShowOption([0, 2, 4, 5, 6, 7, 8, 9]) &&
                    <ChooseOptionImgs
                        items={options[indexOpenedView].options}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        indexOpenedView={indexOpenedView}
                    />
                }
                {
                    isShowOption([1, 3]) &&
                    <ChooseOptionSelect
                        options={options[indexOpenedView]}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        indexOpenedView={indexOpenedView}
                    />
                }
            </div>

            <ProgressBarAndButtons
                optionsLength={options.length}
                indexOpenedView={indexOpenedView}
                setIndexOpenedView={setIndexOpenedView}
            />
        </div>
    );
}

export default ChooseKitchen;