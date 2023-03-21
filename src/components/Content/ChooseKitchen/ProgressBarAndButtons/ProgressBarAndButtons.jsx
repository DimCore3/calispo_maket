import Arrow from '../../../UI/Arrow/Arrow';
import ButtonNext from '../../../UI/ButtonNext/ButtonNext';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import './ProgressBarAndButtons.scss';

const ProgressBarAndButtons = ({ optionsLength, indexOpenedView, setIndexOpenedView, selectedOptions }) => {
    const pagePercent = Math.round(100 / optionsLength);

    function previousPage() {
        setIndexOpenedView(indexOpenedView - 1)

    }

    function nextPage() {
        setIndexOpenedView(indexOpenedView + 1)
    }

    return (
        <div className="progressbar_and_buttons">
            <div>
                {
                    indexOpenedView !== 0 &&
                    <ProgressBar percent={pagePercent * indexOpenedView} />
                }
            </div>
            <div className="content_buttons">
                {
                    indexOpenedView !== 0 &&
                    <button className='previous_button' onClick={previousPage}><Arrow rotate={0} /></button>
                }
                <ButtonNext
                    isEnable={selectedOptions[indexOpenedView] !== undefined}
                    action={nextPage}>
                        Далее
                        <Arrow
                            display={selectedOptions[indexOpenedView] !== undefined ? 'block' : 'none'}
                            rotate={180}
                            color={'white'}
                        />
                </ButtonNext>
            </div>
        </div>
    );
}

export default ProgressBarAndButtons;