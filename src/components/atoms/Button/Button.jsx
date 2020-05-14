import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

export default function Input({
    onChange,
    className,
}) {
    return (
        <button
            onChange={onChange}
            className={className}
        />
    );
}

Input.propTypes = propTypes;
