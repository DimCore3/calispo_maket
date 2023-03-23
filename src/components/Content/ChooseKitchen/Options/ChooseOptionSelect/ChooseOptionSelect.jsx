import InputFile from '../../../../UI/InputFile/InputFile';
import TextAreaForm from '../../../../UI/TextAreaForm/TextAreaForm';
import './ChooseOptionSelect.scss'

const ChooseOptionSelect = ({ options, selectedOptions, setSelectedOptions, indexOpenedView }) => {

    function clickRadio(e) {
        let num = Number(e.target.value);
        let result = selectedOptions;
        result[indexOpenedView] = result[indexOpenedView] ?? {num: 0, additional: ''};
        result[indexOpenedView].num = num
        setSelectedOptions([...result]);
    }

    function changeAdditional(e) {
        let result = selectedOptions;
        result[indexOpenedView] = result[indexOpenedView] ?? {num: 0, additional: ''};
        result[indexOpenedView].additional = e;
        setSelectedOptions([...result]);
    }

    return (
        <div className='choose_option_select'>
            <div className='radio_div_kitchen_choose'>
                <form action="choose_option_kitchen">
                    {options.options.map((element, index) =>
                        <div key={element.slug + '_' + index}>
                            <input
                                onClick={clickRadio}
                                type="radio"
                                id={element.slug}
                                name="choose_option_kitchen"
                                value={index}
                                addition={element.addition}
                                defaultChecked={selectedOptions[indexOpenedView]?.num === index}
                            />
                            <label htmlFor={element.slug}>{element.name}</label>
                            {selectedOptions[indexOpenedView]?.num === index & element.addition === 'file' 
                                ? <InputFile/>
                                : null
                            }
                            {selectedOptions[indexOpenedView]?.num === index & element.addition === 'text' 
                                ? <TextAreaForm value={selectedOptions[indexOpenedView].additional ?? ''} setValue={changeAdditional} placeholder={element.placeholder}/>
                                : null
                            }
                        </div>
                    )}
                </form>
            </div>
            <div>
                <img src={options.img} alt={options.slug} />
            </div>
        </div>
    );
}

export default ChooseOptionSelect;