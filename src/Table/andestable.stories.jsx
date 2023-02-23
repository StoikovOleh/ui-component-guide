import data from './data/data';
import { getFieldColumns } from './data/columns';

export const argTypes = {
    sortable: {
        control: 'boolean',
    },
    resizable: {
        control: 'boolean',
    },
    showPagination: {
        control: 'boolean',
    },
    filterable: {
        control: 'boolean',
    },
    horizontallyScrollable: {
        control: 'boolean',
    },
    loading: {
        control: 'boolean',
    },
};

export const args = {
    sortable: false,
    resizable: false,
    showPagination: false,
    filterable: false,
    horizontallyScrollable: false,
    loading: false,
    pageSizeOptions: [5, 10, 20, 25, 50, 100],
    data,
    columns: getFieldColumns,
};
