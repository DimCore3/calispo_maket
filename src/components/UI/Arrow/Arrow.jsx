import classes from './Arrow.module.scss';

const Arrow = ({rotate = 0, display = 'block', color}) => {
    return ( 
        <div style={{rotate:rotate+'deg', display: display}} className={classes.arrow}>
            <div style={{borderColor: color}} className={classes.line}>

            </div>
            <div style={{borderColor: color}} className={classes.corner}>

            </div>
        </div>
     );
}
 
export default Arrow;