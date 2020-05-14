import React from 'react';
import PropTypes from 'prop-types';
import DropdownTypeahead from '../../molecules/DropdownTypeahead';

const propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

export default function Input({
    value,
    onChange,
    className,
}) {
    return (
        <DropdownTypeahead
            value={value}
            onChange={onChange}
            className={className}
        />
    );
}

Input.propTypes = propTypes;
