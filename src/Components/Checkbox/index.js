import React, { PropTypes } from 'react';

const CheckBox = ({name, value, label, checked, onCheckboxClick, className}) => {
    return (
        <label className={className}>
            <input type="checkbox"  name={name} value={value} checked={checked} onClick={onCheckboxClick} />
            {label}
        </label>
    );
};

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onCheckboxClick: PropTypes.func,
    className: PropTypes.string,
};

export default CheckBox;