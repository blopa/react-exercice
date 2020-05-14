import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResultsLi from '../../atoms/ResultsLi';
import SearchInput from '../../atoms/SearchInput';
import Button from '../../atoms/Button';
import searchBooks from '../../../stories/utils/searchBooks';

const propTypes = {
    className: PropTypes.string,
};

export default function DropdownTypeahead({ className = '' }) {
    const [searchValue, setSearchValue] = useState([]);
    const [listData, setListData] = useState([]);
    const [selectedValueIndex, setSelectedValueIndex] = useState(null);

    const downHandler = ({ key }) => {
        if (key === 'ArrowDown') {
            let newValue = selectedValueIndex === null ? 0 : selectedValueIndex + 1;
            if (newValue > listData.length - 1) {
                newValue = 0;
            }

            setSelectedValueIndex(newValue);
        }

        if (key === 'ArrowUp') {
            let newValue = selectedValueIndex === null ? 0 : selectedValueIndex - 1;
            if (newValue < 0) {
                newValue = listData.length - 1;
            }

            setSelectedValueIndex(newValue);
        }

        if (key === 'Enter') {
            window.alert(listData[selectedValueIndex].title);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [downHandler]);

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
            <Button
                text="Clear"
                onClick={() => {
                    setSearchValue('');
                    setListData([]);
                }}
            />
            <ResultsLi
                listData={listData}
                selectedValueIndex={selectedValueIndex}
            />
        </Fragment>
    );
}

DropdownTypeahead.propTypes = propTypes;
