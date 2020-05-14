import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ResultsLi.css';

const propTypes = {
    listData: PropTypes.array.isRequired,
    selectedValueIndex: PropTypes.number,
};

export default function ResultsLi({
    listData,
    selectedValueIndex = null,
}) {
    return (
        <ul>
            {listData.map((data, index) => {
                let className;

                debugger;
                if (index === selectedValueIndex) {
                    // TODO use classNames
                    className = styles.selected;
                }

                return (<li className={className}>{data.title}</li>);
            })}
        </ul>
    );
}

ResultsLi.propTypes = propTypes;
