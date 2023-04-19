import React from 'react';
import { Pagination as PaginationComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

PaginationComponent.displayName = 'Pagination';

export default {
    title: 'Pagination/Pagination',
    component: PaginationComponent,
    args: {
        onPageChange: () => true,
        pages: 60,
        page: 7,
        prevBtnText: '',
        nextBtnText: '',
    },
    argTypes: {
        pages: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        page: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        onPageChange: {
            ...getComponentPropType('function'),
        },
        prevBtnText: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        nextBtnText: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
