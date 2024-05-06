import NavigationLink from './navigation-link'
import { Heart, ArrowRight } from '@phosphor-icons/react'

export default {
  title: '🧭 Navigation/NavigationLink',
  component: NavigationLink,
}

export const Default = {
  args: {
    active: false,
    disabled: false,
    leading: <Heart />,
    size: 'small',
    text: 'Navigation Link',
    trailing: <ArrowRight />,
  },
}