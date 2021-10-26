import { Story, Meta } from '@storybook/react'
import { YouTube, YouTubeProps } from './'

export default {
  component: YouTube,
  title: 'YouTube'
} as Meta

const Template: Story<YouTubeProps> = args => <YouTube {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Video title',
  uid: ''
}
