import React from 'react';
import { PanelBlock as PanelBlockComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'PanelBlock',
    component: PanelBlockComponent,
    args: {
        title: 'This is a message',
        children: <div>Hello world</div>,
    },
    argTypes: {
        children: {
            ...getComponentPropType('ReactNode'),
        },
        title: {
            control: 'text',
            ...getComponentPropType('string', 'Title'),
        },
        className: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        bodyClassName: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => <PanelBlockComponent {...args} />;

export const PanelBlock = Template.bind({});
