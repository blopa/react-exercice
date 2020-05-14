import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ResultsLi.scss';

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
                const arrow = index === selectedValueIndex ? '=>' : ''; // TODO

                return (
                    <li
                        className={classNames({
                            // TODO this is not working for some reason
                            [styles.selected]: index === selectedValueIndex,
                        })}
                    >
                        {`${arrow} ${data.title}`}
                    </li>
                );
            })}
        </ul>
    );
}

ResultsLi.propTypes = propTypes;
