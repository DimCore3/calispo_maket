import { useState } from 'react';
import classes from './parameters.module.scss'

function Parameters() {
    const step = 1000;
    const min = 0;
    const max = 700000;
    const [values, setValues] = useState({ min: min, max: max })

    function changeMinValue(e) {
        let value = Number(e.target.value);

        if (value > values.max) {
            setValues({ min: value, max: value });
        } else {
            setValues({ min: value, max: values.max });
        }
        minMaxCheck(value)
    }

    function changeMaxValue(e) {
        let value = Number(e.target.value);

        if (value < values.min) {
            setValues({ min: value, max: value });
        } else {
            setValues({ min: values.min, max: value });
        };
        minMaxCheck(value)
    }

    function minMaxCheck(value) {
        if (value < min) {
            setValues({ min: min, max: min });
        };

        if (value > max) {
            setValues({ min: values.min, max: max });
        };
    }

    return (
        <div className={classes.parameters}>
            <div className={classes.rangeInput}>
                <section className={classes.range_slider}>
                    <input
                        onChange={changeMinValue}
                        type="number"
                        placeholder={min}
                        min={0}
                        max={max}
                        step={step}
                        value={values.min}
                    />
                    <input
                        onChange={changeMaxValue}
                        type="number"
                        placeholder={max}
                        min={0}
                        max={max}
                        step={step}
                        value={values.max}
                    />
                </section>
            </div>
            <div className={classes.range}>
                <section className={classes.range_slider}>
                    <input
                        value={values.min}
                        onChange={changeMinValue}
                        min={min}
                        max={max}
                        step={step}
                        type="range"
                    />
                    <input
                        value={values.max}
                        onChange={changeMaxValue}
                        min={min}
                        max={max}
                        step={step}
                        type="range"
                    />
                </section>
            </div>
        </div>
    );
}

export default Parameters;