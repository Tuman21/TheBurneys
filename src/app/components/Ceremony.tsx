import { PhotoGallery } from './PhotoGallery'

export function Ceremony() {
  const photos = [
    {
      url: 'https://i.imgur.com/XgYb9u7.jpeg', 
      alt: 'Beautiful outdoor ceremony venue',
    },
    {
      url: 'https://i.imgur.com/6N05Fi2.jpeg',
      alt: 'Elegant aisle with white and pink flowers',
    },
    {
      url: 'https://i.imgur.com/AsEnnLe.jpeg',
      alt: 'Beach wedding ceremony',
    },
    {
      url: 'https://i.imgur.com/Z1huYzr.jpeg',
      alt: 'Elegant ceremony seating',
    },
    {
      url: 'https://i.imgur.com/oTPvTcf.jpeg',
      alt: 'Couple at ceremony with chandelier',
    },
    {
      url: 'https://i.imgur.com/2kyDjLD.jpeg',
      alt: 'Ceremony on grass field',
    },
    {
      url: 'https://i.imgur.com/Vv4a2MP.jpeg',
      alt: 'Outdoor ceremony under trees',
    },
    {
      url: 'https://i.imgur.com/6bD3b68.jpeg',
      alt: 'Courtyard ceremony with white flowers',
    },
    {
      url: 'https://i.imgur.com/XJZv9OR.jpeg',
      alt: 'Sacred ceremony moment',
    },
    {
      url: 'https://i.imgur.com/OGdawPK.jpeg',
      alt: 'Ceremony setup with mirror',
    },
    {
      url: 'https://i.imgur.com/rtNp1ZC.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/TVsfjLR.jpeg',
      alt: 'Outdoor ceremony with white chairs',
    },
    {
      url: 'https://i.imgur.com/3syiA21.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/A5HNWsC.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/51jiDgI.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/N0T96cH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/GvjC6LF.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Ay6i3aW.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/PB14yta.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ppW3kqV.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/r96FhFp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZLOIj8s.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/qlxeEWT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/gqhCQiF.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZOEKIxT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/06JRHu5.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/wc8Dt65.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZXhGgbz.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/fq4UEs6.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/aV2oh14.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/1NDmbUa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/sGgmOsS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/bCM5Oby.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/fBbHGC9.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/CbWJ3Yv.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jRZDkze.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/NhF9VF2.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/zXFBIum.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/450kwcS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/0KWIvgd.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/qIAKu0R.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Ok9NHWy.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/kFDitFa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/WH4O1Ui.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/BEZSown.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/pxZr86V.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/XM8EsVS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/IG4U4Ev.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/rwTSSZw.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/ORJpolT.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/yemKYlf.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/uAzrt5X.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/Wy0xMQI.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/3ROh731.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/OhgPSFG.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/YvmWaLI.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/IBGNXIS.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/CLfzS6t.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/IcZsBMx.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/AlsFcHw.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/6hbPHab.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/DOUT2gm.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/6sXy6cg.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/7OBOkcn.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/72AYTpI.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/rGwzMOt.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/mLHoKCc.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/F9nCjmm.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: '',
      alt: 'First look in blue suit',
    },
    {
      url: '',
      alt: 'Emotional reveal moment',
    },
    {
      url: '',
      alt: 'First look in blue suit',
    },
    {
      url: '',
      alt: 'First look in blue suit',
    },
    {
      url: '',
      alt: 'Emotional reveal moment',
    },
    {
      url: '',
      alt: 'First look in blue suit',
    },

  ]

  return (
    <PhotoGallery
      photos={photos}
      title="Ceremony"
      description="The sacred moments where we pledged our forever"
    />
  )
}
