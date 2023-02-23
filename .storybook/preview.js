import React from 'react';
import { addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import '../src/styles/theme.css';
import '../src/styles/storybook.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const parameters = {
    docs: {
        source: {
            type: 'dynamic',
            excludeDecorators: true,
            container: DocsContainer,
            page: DocsPage,
        },
    },
}

addDecorator(storyFn => <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 0' }}>{storyFn()}</div>);
