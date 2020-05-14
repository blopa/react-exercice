import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResultsLi from '../../atoms/ResultsLi';
import SearchInput from '../../atoms/SearchInput';
import searchBooks from '../../../stories/utils/searchBooks';

const propTypes = {
    className: PropTypes.string,
};

export default function DropdownTypeahead({ className = '' }) {
    const [searchValue, setSearchValue] = useState([]);
    const [listData, setListData] = useState([]);

    const onChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        searchBooks(value).then((data) => {
            setListData(data);
        });
    };

    return (
        <Fragment>
            <SearchInput
                value={searchValue}
                onChange={onChange}
                className={className}
            />
            <ResultsLi listData={listData} />
        </Fragment>
    );
}

DropdownTypeahead.propTypes = propTypes;
