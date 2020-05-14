import React from 'react';
import { Button } from '@storybook/react/demo';
import DropdownTypeahead from '../../components/molecules/DropdownTypeahead';

export default {
    title: 'Exercise1',
    component: Button,
};

export const DropdownSearch = () => {
    console.log(1);
    return (
        <DropdownTypeahead />
    );
};
