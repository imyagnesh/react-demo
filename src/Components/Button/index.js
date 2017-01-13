import React, { PropTypes } from 'react';

const Button = ({ label, onClickButton }) => {
    return (
        <div>
            <button
                onClick={onClickButton}
                className="buttonStyle">
                {label}
            </button>
        </div>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClickButton: PropTypes.func,
};

export default Button;