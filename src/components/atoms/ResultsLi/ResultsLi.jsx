import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    listData: PropTypes.array.isRequired,
};

export default function ResultsLi({
    listData,
}) {
    return (
        <ul>
            {listData.map((data) => (<li>{data.title}</li>))}
        </ul>
    );
}

ResultsLi.propTypes = propTypes;
