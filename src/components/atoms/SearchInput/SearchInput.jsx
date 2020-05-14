import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const propTypes = {
    initialValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default function SearchInput({
    initialValue = '',
    value = '',
    onChange,
    className = '',
}) {
    return (
        <Input
            value={initialValue || value}
            onChange={onChange}
            className={className}
        />
    );
}

SearchInput.propTypes = propTypes;
