import InputFile from '../../../../UI/InputFile/InputFile';
import TextAreaForm from '../../../../UI/TextAreaForm/TextAreaForm';
import './ChooseOptionSelect.scss'

const ChooseOptionSelect = ({ options, selectedOptions, setSelectedOptions, indexOpenedView }) => {

    function clickRadio(e) {
        let addition = e.target.getAttribute('addition');
        setChoiseToList(Number(e.target.value));
        if (addition === 'file') {
            console.log('file')
        };
        if (addition === 'text') {
            console.log('text')
        };
    }

    function setChoiseToList(num) {
        let result = selectedOptions;
        result[indexOpenedView] = num;
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
                                defaultChecked={selectedOptions[indexOpenedView] === index}
                            />
                            <label htmlFor={element.slug}>{element.name}</label>
                            {selectedOptions[indexOpenedView] === index & element.addition === 'file' 
                                ? <InputFile/>
                                : null
                            }
                            {selectedOptions[indexOpenedView] === index & element.addition === 'text' 
                                ? <TextAreaForm/>
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