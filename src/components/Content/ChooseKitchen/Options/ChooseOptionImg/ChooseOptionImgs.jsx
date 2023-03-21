import { useState } from 'react';
import TextAreaForm from '../../../../UI/TextAreaForm/TextAreaForm';
import './ChooseOptionImgs.scss'

const ChooseOptionImgs = ({ items, selectedOptions, setSelectedOptions, indexOpenedView }) => {
    const [textAreaValue, setTextAreaValue] = useState('');
    
    function setChoiseToList(num) {
        let result = selectedOptions;
        result[indexOpenedView] = num;
        setSelectedOptions([...result]);
    };

    return (
        <div className="options_img">
            {items.map((item, index) =>
                <div
                    className={'option_img' + (selectedOptions[indexOpenedView] === index ? ' choosed' : '')}
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
                    {selectedOptions[indexOpenedView] === index & item.addition === 'text'
                        ? <TextAreaForm value={textAreaValue} setValue={setTextAreaValue} placeholder={item.placeholder} />
                        : null
                    }
                </div>
            )}
        </div>
    );
}

export default ChooseOptionImgs;