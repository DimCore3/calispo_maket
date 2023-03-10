import { useState } from 'react';
import classes from './DropDownHeader.module.scss'

function DropDownHeader({ name, IncludedComponent }) {
    let [isDropListShow, setIsDropListShow] = useState(false)

    return ( 
        <div className={isDropListShow ? classes.openedDropDownMenu : classes.closedDropDownMenu}>
            <div onClick={() => isDropListShow = setIsDropListShow(!isDropListShow)} className={classes.titleDropList}>
                <h3>{name.toUpperCase()}</h3>
                <div className={classes.arrow}>
                    <i className={classes.arrow_down}></i>
                </div>
            </div>
            <div className={classes.dropList}>
                {IncludedComponent}
            </div>
        </div>
     );
}

export default DropDownHeader;