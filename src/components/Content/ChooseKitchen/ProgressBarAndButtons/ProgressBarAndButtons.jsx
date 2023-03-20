import ButtonNext from '../../../UI/ButtonNext/ButtonNext';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import './ProgressBarAndButtons.scss';

const ProgressBarAndButtons = ({ optionsLength, indexOpenedView, setIndexOpenedView }) => {
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
                    <button onClick={previousPage}>previous</button>
                }
                <ButtonNext isEnable={true} action={nextPage}>Далее</ButtonNext>
            </div>
        </div>
    );
}

export default ProgressBarAndButtons;