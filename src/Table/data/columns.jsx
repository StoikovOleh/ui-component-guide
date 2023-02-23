import React from 'react';
import { Dropdown } from '@paysera/react-common';

import TwoLineCell from '../Components/TwoLineCell';
import ExpanderButton from '../Components/ExpanderButton';
import CustomToggle from '../Components/CustomToggle';

export const getFieldColumns = [
    {
        id: 'date',
        Header: 'Date',
        headerClassName: 'text-left',
        className: 'text-left',
        width: 160,
        accessor: ({ date }) => {
            const [d, t] = date.split('T');
            return <TwoLineCell top={d} bottom={t} />;
        },
    },
    {
        id: 'transferNo',
        Header: 'Transfer.No',
        headerClassName: 'text-left',
        className: 'text-left',
        width: 150,
        accessor: 'transferNo',
    },
    {
        id: 'recipient-purpose',
        Header: 'Recipient / Purpose',
        headerClassName: 'text-left',
        className: 'menu-button text-left',
        minWidth: 260,
        accessor: ({ recipient, purpose }) => <TwoLineCell top={recipient} bottom={purpose} />,
    },
    {
        id: 'amount',
        Header: 'Amount',
        headerClassName: 'text-left',
        className: 'text-left',
        width: 140,
        accessor: 'amount',
    },
    {
        id: 'expander',
        Header: () => <strong>Actions</strong>,
        Expander: ({ isExpanded }) => <ExpanderButton isExpanded={!!isExpanded} />,
        headerClassName: 'hidden-xs actions-header',
        className: 'action-cell text-right',
    },
    {
        id: 'actions',
        Header: () => (
            <Dropdown id="dropdown-custom-menu" className="pull-right">
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item href="1">
                        <button className="btn btn-link" type="button">Repeat</button>
                    </Dropdown.Item>
                    <Dropdown.Item href="2">
                        <button className="btn btn-link" type="button">Export to PDF</button>
                    </Dropdown.Item>
                    <Dropdown.Item href="3">
                        <button className="btn btn-link" type="button">Print</button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        ),
        headerClassName: 'andes-table-mobile-header pull-right',
        Cell: () => (
            <Dropdown id="dropdown-custom-menu">
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item href="1">
                        <button className="btn btn-link" type="button">Repeat</button>
                    </Dropdown.Item>
                    <Dropdown.Item href="2">
                        <button className="btn btn-link" type="button">Export to PDF</button>
                    </Dropdown.Item>
                    <Dropdown.Item href="3">
                        <button className="btn btn-link" type="button">Print</button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        ),
        className: 'action-cell menu-button hidden-xs',
    },
];
