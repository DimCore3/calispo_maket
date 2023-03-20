import classes from './InputFile.module.scss';

function InputFile() {
    return ( 
        <div className={classes.form_file}>
            <input className={classes.input_file} type="file" name="" id="" />
        </div>
     );
}

export default InputFile;