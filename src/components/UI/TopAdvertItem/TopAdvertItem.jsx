import classes from './TopAdvertItem.module.scss'

const TopAdvertItem = ({content}) => {
    return (
        <div className={classes.item}>
            <img src={content.image} alt="" />
            <div className={classes.text}>
                <strong>{content.boldText}</strong>
                <p>{content.text}</p>
            </div>
        </div>
    );
}

export default TopAdvertItem;