import TopAdvertItem from '../UI/TopAdvertItem/TopAdvertItem';
import './Advert.scss';

function Advert() {
    let itemSuggests = [
        {
            slug: 'percent',
            image: 'img/advert/percent.svg',
            boldText: 'Скидка 5% ',
            text: 'от стоимости кухни',
        },
        {
            slug: 'washing',
            image: 'img/advert/washing.svg',
            boldText: 'Мойка ',
            text: 'бесплатно',
        },
        {
            slug: 'present',
            image: 'img/advert/present.svg',
            boldText: 'Сертификат на 3000 рублей ',
            text: 'на покупку мебели в нашем магазине',
        },
    ];

    return (
        <div className="content_top_advert">
            <div className="top_advert_title">
                <h3><span>Собери кухню</span> через наш конструктор и <span>забери любой подарок</span> на выбор:</h3>
                <div className="top_advert_items">
                    {itemSuggests.map((content, index) => 
                        <TopAdvertItem key={index + '_top_advert_' + content.slug} content={content} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Advert;