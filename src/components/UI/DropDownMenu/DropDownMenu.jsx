import { useState } from 'react';
import classes from './dropDownMenu.module.scss'

function DropDownMenu({ name, children }) {
    let [isDropListShow, setIsDropListShow] = useState(false)

    return (
        <div className={isDropListShow ? classes.openedDropDownMenu : classes.closedDropDownMenu}>
            <div onClick={() => isDropListShow = setIsDropListShow(!isDropListShow)} className={classes.titleDropList}>
                <p>{name}</p>
                <div className={classes.arrow}><i className={isDropListShow ? classes.arrow_down : classes.arrow_right}></i></div>
            </div>
            <div className={classes.dropList}>
                {isDropListShow && children}
            </div>
        </div>
    );
};

export default DropDownMenu;