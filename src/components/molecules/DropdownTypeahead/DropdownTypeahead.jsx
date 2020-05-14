import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResultsLi from '../../atoms/ResultsLi';
import SearchInput from '../../atoms/SearchInput';
import searchBooks from '../../../stories/utils/searchBooks';

const propTypes = {
    className: PropTypes.string,
};

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}

export default function DropdownTypeahead({ className = '' }) {
    const [searchValue, setSearchValue] = useState([]);
    const [listData, setListData] = useState([]);

    const ArrowUpPress = useKeyPress('ArrowUp');
    const ArrowDownPress = useKeyPress('ArrowDown');

    const onChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        searchBooks(value).then((data) => {
            if (data.length) {
                setListData(data);
            } else {
                // TODO
                setListData([{ title: 'no results' }]);
            }
        });
    };

    return (
        <Fragment>
            <SearchInput
                value={searchValue}
                onChange={onChange}
                className={className}
            />
            <ResultsLi
                listData={listData}
                selectedValueIndex={2}
            />
        </Fragment>
    );
}

DropdownTypeahead.propTypes = propTypes;
