import classes from './ButtonNext.module.scss';

const ButtonNext = ({isEnable, children, action}) => {
    let isEnableClass = isEnable ? classes.enabled : classes.disabled

    return ( 
        <button 
            className={classes.my_button + ' ' + isEnableClass} 
            disabled={!isEnable}
            onClick={action}    
        >
            <strong>{children}</strong>
        </button>
     );
}
 
export default ButtonNext