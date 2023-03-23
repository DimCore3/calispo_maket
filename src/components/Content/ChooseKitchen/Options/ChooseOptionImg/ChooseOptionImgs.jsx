import TextAreaForm from '../../../../UI/TextAreaForm/TextAreaForm';
import './ChooseOptionImgs.scss'

const ChooseOptionImgs = ({ items, selectedOptions, setSelectedOptions, indexOpenedView }) => {
    
    function setChoiseToList(num) {
        let result = selectedOptions;
        result[indexOpenedView] = result[indexOpenedView] ?? {num: 0, additional: ''};
        result[indexOpenedView].num = num
        setSelectedOptions([...result]);
    };

    function changeAdditional(e) {
        let result = selectedOptions;
        result[indexOpenedView] = result[indexOpenedView] ?? {num: 0, additional: ''};
        result[indexOpenedView].additional = e;
        setSelectedOptions([...result]);
    }

    return (
        <div className="options_img">
            {items.map((item, index) =>
                <div
                    className={'option_img' + (selectedOptions[indexOpenedView]?.num === index ? ' choosed' : '')}
                    onClick={() => setChoiseToList(index)}
                    key={item.slug + '_option_' + index}>
                    {
                        item.img !== ''
                            ?
                            <div>
                                <img src={item.img} alt={item.alt} />
                                <div className="text_under_img">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            :
                            <div>
                                <h2>{item.name}</h2>
                            </div>
                    }
                    {selectedOptions[indexOpenedView]?.num === index & item.addition === 'text'
                        ? <TextAreaForm value={selectedOptions[indexOpenedView].additional ?? ''} setValue={changeAdditional} placeholder={item.placeholder} />
                        : null
                    }
                </div>
            )}
        </div>
    );
}

export default ChooseOptionImgs;