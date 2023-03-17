import Advert from '../Advert/Advert';
import ChooseKitchen from './ChooseKitchen/ChooseKitchen';
import './Content.scss';

function Content() {
    return (
        <div className="root_content">
            <Advert />
            <div className="main_content">
                <ChooseKitchen />
            </div>
        </div>
    );
}

export default Content;