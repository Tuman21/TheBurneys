import { PhotoGallery } from './PhotoGallery'

export function Gallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1596457221755-b96bc3a6df18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple kissing in elegant wedding attire',
    },
    {
      url: 'https://images.unsplash.com/photo-1591604442449-ecc9943efabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride holding beautiful bouquet',
    },
    {
      url: 'https://images.unsplash.com/photo-1655901856612-a7f76949fb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Romantic couple kiss',
    },
    {
      url: 'https://images.unsplash.com/photo-1721401870202-8e2264ecced2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Elegant couple portrait',
    },
    {
      url: 'https://images.unsplash.com/photo-1698802060978-84008afaeb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Wedding couple standing together',
    },
    {
      url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Outdoor wedding ceremony setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Wedding aisle with beautiful flowers',
    },
    {
      url: 'https://images.unsplash.com/photo-1576694667642-6f289dd54187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Beach wedding ceremony',
    },
    {
      url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Wedding celebration toast',
    },
    {
      url: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Guests dancing at reception',
    },
    {
      url: 'https://images.unsplash.com/photo-1510181414401-d3f2aa71a124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride and groom smiling',
    },
    {
      url: 'https://images.unsplash.com/photo-1654994088648-e18f010da116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Romantic couple kiss outdoors',
    },
    {
      url: 'https://images.unsplash.com/photo-1679599441274-6dcac44dba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple under wedding veil',
    },
    {
      url: 'https://images.unsplash.com/photo-1680624629496-0a2c2444153e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple dancing in elegant setting',
    },
    {
      url: 'https://images.unsplash.com/photo-1652950618856-2f19ae98297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple by the ocean',
    },
    {
      url: 'https://images.unsplash.com/photo-1694575173261-7c557fd2652b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride and groom kissing under veil',
    },
    {
      url: 'https://images.unsplash.com/photo-1683238085829-f571c9097d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple embracing',
    },
    {
      url: 'https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Outdoor ceremony moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939413139-19eeeb3a198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Ceremony seating under trees',
    },
    {
      url: 'https://images.unsplash.com/photo-1612599542558-f3022089fb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Wedding guests celebrating',
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="Wedding Gallery"
      description="A complete collection of our special day, capturing every beautiful moment"
    />
  )
}
