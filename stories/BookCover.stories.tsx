import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Props as BookCoverProps, BookCover } from '../src'

const meta: Meta = {
  title: 'BookCover',
  component: BookCover,
  argTypes: {
    imageUrl: {
      defaultValue: 'https://3dbook.xyz/demo-book.png',
    },
  },
}
export default meta

const Template: Story<BookCoverProps> = args => {
  return <BookCover {...args} />
}

export const Default = Template.bind({})
