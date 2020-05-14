import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default function Input({
    onClick,
    className = '',
    text,
}) {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
}

Input.propTypes = propTypes;
