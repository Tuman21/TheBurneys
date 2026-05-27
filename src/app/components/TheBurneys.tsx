import { PhotoGallery } from './PhotoGallery'

export function TheBurneys() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1776266100990-8e18cffe2f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple embracing at sunset',
    },
    {
      url: 'https://images.unsplash.com/photo-1767790692829-4b5f70919881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Intimate moment at golden hour',
    },
    {
      url: 'https://images.unsplash.com/photo-1776266099566-676119a0f06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Romantic outdoor embrace',
    },
    {
      url: 'https://images.unsplash.com/photo-1776266099675-f8b0792a497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple in sunlight',
    },
    {
      url: 'https://images.unsplash.com/photo-1776267288022-e67809841fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Tender moment together',
    },
    {
      url: 'https://images.unsplash.com/photo-1772412930813-240058af1107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple sharing intimate moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1778143366796-bad738f96f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Romantic outdoor portrait',
    },
    {
      url: 'https://images.unsplash.com/photo-1770582071285-e5d2ef206180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple back to back',
    },
    {
      url: 'https://images.unsplash.com/photo-1765292784329-7dd08ad946f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Holding hands outdoors',
    },
    {
      url: 'https://images.unsplash.com/photo-1765292783742-d056b0794ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Embracing and looking at each other',
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="The Burney's"
      description="Our love story captured in intimate and personal moments"
    />
  )
}
