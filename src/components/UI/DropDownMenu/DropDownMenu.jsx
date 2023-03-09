import { useState } from 'react';
import classes from './dropDownMenu.module.scss'

function DropDownMenu({ name, IncludedComponent }) {
    let [isDropListShow, setIsDropListShow] = useState(false)

    return (
        <div className={classes.dropDownMenu}>
            <div onClick={() => isDropListShow = setIsDropListShow(!isDropListShow)} className={classes.titleDropList}>
                <p>{name}</p>
                <div className={classes.arrow}><i className={isDropListShow ? classes.arrow_down : classes.arrow_right}></i></div>
            </div>
            <div className={classes.dropList}>
                {isDropListShow && IncludedComponent}
            </div>
        </div>
    );
}

export default DropDownMenu;