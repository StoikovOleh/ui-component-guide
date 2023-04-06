import React from 'react';
import { BoxInfo as BoxInfoComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'BoxInfo',
    component: BoxInfoComponent,
    args: {
        message: 'This is a message',
    },
    argTypes: {
        message: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => <BoxInfoComponent {...args} />;

export const BoxInfo = Template.bind({});
