import React, { PropTypes } from 'react';
import './style.css';

const CheckBox = ({name, value, label, checked, onCheckboxClick}) => {
    return (
        <label>
            <input type="checkbox" name={name} value={value} checked={checked} onClick={onCheckboxClick} />
            {label}
        </label>
    );
};

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onCheckboxClick: PropTypes.func,
};

export default CheckBox;