import React from 'react';
import { DottedDropdownMenu as DottedDropdownMenuComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'DottedDropdownMenu',
    component: DottedDropdownMenuComponent,
    args: {
        dropdownContent: [
            (
                <div>Hello world</div>
            ),
        ],
    },
    argTypes: {
        dropdownContent: {
            ...getComponentPropType('Array<ReactNode>'),
        },
    },
};

const Template = args => <DottedDropdownMenuComponent {...args} />;

export const DottedDropdownMenu = Template.bind({});
