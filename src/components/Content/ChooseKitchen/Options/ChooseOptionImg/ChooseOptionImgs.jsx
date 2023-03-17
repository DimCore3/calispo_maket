import './ChooseOptionImgs.scss'

const ChooseOptionImgs = ({ items, selectedOptions, setSelectedOptions, indexOpenedView }) => {

    function setChoiseToList(num) {
        let result = selectedOptions;
        result[indexOpenedView] = num;
        setSelectedOptions([...result]);
    }

    return (
        <div className="options_img">
            {items.map((item, index) =>
                <div
                    className={'option_img' + (selectedOptions[indexOpenedView] === index ? ' choosed' : '')}
                    onClick={() => setChoiseToList(index)}
                    key={item.slug + '_option_' + index}>
                    <img src={item.img} alt={item.alt} />
                    <div className="text_under_img">
                        <p>{item.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChooseOptionImgs;