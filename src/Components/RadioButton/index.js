import React, { PropTypes } from 'react';

const RadioButton = ({label, name, value, checked, onRadioClick}) => {
    return (
        <label>
            <input type="radio" name={name} value={value} checked={checked} onClick={onRadioClick} />
            {label}
        </label>
    );
};

RadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onRadioClick: PropTypes.func.isRequired,
};

export default RadioButton;