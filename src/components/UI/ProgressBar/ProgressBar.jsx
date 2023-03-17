import classes from './ProgressBar.module.scss';

const ProgressBar = ({percent}) => {
    return (
        <div className={classes.progress_bar}>
            <span>Готово: <strong>{percent}%</strong></span>
            <div className={classes.progress_bar_line}>
                <div className={classes.progress_status_line} style={{width: percent + '%'}}>

                </div>
            </div>
        </div>
    );
}

export default ProgressBar;