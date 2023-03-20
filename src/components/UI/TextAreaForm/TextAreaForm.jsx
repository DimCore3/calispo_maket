import classes from './TextAreaForm.module.scss'

const TextAreaForm = () => {
    return (
        <div className={classes.text_area_form}>
            <textarea 
                placeholder='Укажите размеры кухни' 
                rows="5" 
                cols="30" 
                name="text"
                onChange={e => console.log(e.target.value)}    
            ></textarea>
        </div>
    );
}

export default TextAreaForm;