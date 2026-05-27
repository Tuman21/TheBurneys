import { PhotoGallery } from './PhotoGallery'

export function FamilyAndFriends() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Celebratory toast with loved ones',
    },
    {
      url: 'https://images.unsplash.com/photo-1612599542558-f3022089fb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Guests celebrating together',
    },
    {
      url: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Dancing and celebration',
    },
    {
      url: 'https://images.unsplash.com/photo-1723373457175-31b09fa7d405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Family gathering at table',
    },
    {
      url: 'https://images.unsplash.com/photo-1529636600939-9edeb1f9719f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Group prayer moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1632429098857-f419c08f87ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Friends and family together',
    },
    {
      url: 'https://images.unsplash.com/photo-1745402695755-0c1694dfc93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Confetti celebration',
    },
    {
      url: 'https://images.unsplash.com/photo-1767917638686-6d5faa2336c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Wedding party outdoors',
    },
    {
      url: 'https://images.unsplash.com/photo-1766104808202-452a13239cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Beach ceremony gathering',
    },
    {
      url: 'https://images.unsplash.com/photo-1773688189344-efbe0538e963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Ceremony kiss with guests',
    },
    {
      url: 'https://images.unsplash.com/photo-1776267887521-96838af82b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Walking down the aisle',
    },
    {
      url: 'https://images.unsplash.com/photo-1775126964466-ff3133e8fd2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Lakeside ceremony with guests',
    },
    {
      url: 'https://images.unsplash.com/photo-1779055660953-f5578f90066a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Petal celebration',
    },
    {
      url: 'https://images.unsplash.com/photo-1764380749992-76b85cce5a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride with family',
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="Family & Friends"
      description="Celebrating with the people we love most"
    />
  )
}
