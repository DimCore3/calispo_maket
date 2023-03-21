import classes from './TextAreaForm.module.scss'

const TextAreaForm = ({placeholder, value, setValue}) => {
    return (
        <div className={classes.text_area_form}>
            <textarea 
                placeholder={placeholder} 
                rows="5" 
                cols="30" 
                name="text"
                value={value}
                onChange={e => setValue(e.target.value)}    
            ></textarea>
        </div>
    );
}

export default TextAreaForm;