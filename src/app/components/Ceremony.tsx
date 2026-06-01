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
      url: 'https://i.imgur.com/7CZC1XI.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/eqg9Pe3.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/YmWRcf0.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/4YJQec5.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/NpPmWSl.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/xCwWxzh.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/LqboDWy.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/OoC0McN.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/K9934uI.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/VYURvRd.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/VHY5cOk.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/E3lV6aT.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/fpLl37b.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/wU7CDOD.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/duJoH8w.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/5coOzN3.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/sEmXm2B.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/8bzlHEa.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/iTtGJyn.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/3jB1SzP.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/YYRAPrF.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/Wq55AC9.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/1RqUFMI.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/11NqtWT.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/QGzD3Ai.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/sz8Np96.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/ymF79r3.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/yFjfTvn.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/IO1XDFv.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/mNd4usz.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/sggbRui.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/jW0D6WX.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/iRJFBVM.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/yG6Qiv6.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/0UySRDs.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/jYw9KOU.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/AouKVyy.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/QTXuj8G.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/ThCApUh.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/YLcEgp1.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/0YjSvzN.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/geFuFHM.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/g7NdWRi.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/M6ZazhV.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/4X7Dnc6.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/wwR163w.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/uU3T6KM.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/KBGFte6.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/dnhTgEj.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/DkwSugu.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/DtReKig.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/DpXSQYf.jpeg',
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
