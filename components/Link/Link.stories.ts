import { Meta, StoryObj } from '@storybook/react'

import Link,  { LinkProps } from './Link'

const meta: Meta<LinkProps> = {
    title: 'Molecules/Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta

export const Primary: StoryObj<LinkProps> = {
    args: {
        children: 'Link',
        href: '/',
    },
}