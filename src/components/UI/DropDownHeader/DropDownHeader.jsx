import classes from './DropDownHeader.module.scss'

function DropDownHeader({ name, IncludedComponent }) {

    return ( 
        <div className={classes.closedDropDownMenu}>
            <div className={classes.titleDropList}>
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