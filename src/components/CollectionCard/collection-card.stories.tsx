import CollectionCard from './collection-card'
import Avatar from '../Avatar'
import CoverStack from '../CoverCard/cover-stack'
import Cover from '../CoverCard/cover'

export default {
  title: '📊 Data Presentation/CollectionCard',
  component: CollectionCard,
}

export const Default = {
  args: {
    leading: <Avatar size={20} text="Card" />,
    title: 'Card title',
    text: 'Text',
  },
  render: ({ ...args }) => {
    return (
      <CollectionCard
        title={args.title}
        text={args.text}
        leading={args.leading}
      >
        <CoverStack>
          <Cover alt="" src="" type="bd" />
          <Cover alt="" src="" type="bd" />
          <Cover alt="" src="" type="bd" />
          <Cover alt="" src="" type="bd" />
        </CoverStack>
      </CollectionCard>
    )
  },
}
