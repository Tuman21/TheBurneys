import { PhotoGallery } from './PhotoGallery'

export function Gallery() {
  const photos = [
    {
      url: 'https://i.imgur.com/o7fqXLx.jpeg',
      alt: 'Couple kissing in elegant wedding attire',
    },
    {
      url: 'https://i.imgur.com/Pe9Y2mU.jpeg',
      alt: 'Bride holding beautiful bouquet',
    },
    {
      url: 'https://i.imgur.com/myAs3qz.jpeg',
      alt: 'Romantic couple kiss',
    },
    {
      url: 'https://i.imgur.com/5aQcmbj.jpeg',
      alt: 'Elegant couple portrait',
    },
    {
      url: 'https://i.imgur.com/XgYb9u7.jpeg',
      alt: 'Wedding couple standing together',
    },
    {
      url: 'https://i.imgur.com/3Ogzknm.jpeg',
      alt: 'Outdoor wedding ceremony setup',
    },
    {
      url: 'https://i.imgur.com/tT92JVq.jpeg',
      alt: 'Wedding aisle with beautiful flowers',
    },
    {
      url: 'https://i.imgur.com/taj29oQ.jpeg',
      alt: 'Beach wedding ceremony',
    },
    {
      url: 'https://i.imgur.com/jDwd5L3.jpeg',
      alt: 'Wedding celebration toast',
    },
    {
      url: 'https://i.imgur.com/ivXbRMM.jpeg',
      alt: 'Guests dancing at reception',
    },
    {
      url: 'https://i.imgur.com/6N05Fi2.jpeg',
      alt: 'Bride and groom smiling',
    },
    {
      url: 'https://i.imgur.com/CK0PuBb.jpeg',
      alt: 'Romantic couple kiss outdoors',
    },
    {
      url: 'https://i.imgur.com/AsEnnLe.jpeg',
      alt: 'Couple under wedding veil',
    },
    {
      url: 'https://i.imgur.com/8CjzZfr.jpeg',
      alt: 'Couple dancing in elegant setting',
    },
    {
      url: 'https://i.imgur.com/fhTmoHm.jpeg',
      alt: 'Couple by the ocean',
    },
    {
      url: 'https://i.imgur.com/ckGqw7G.jpeg',
      alt: 'Bride and groom kissing under veil',
    },
    {
      url: 'https://i.imgur.com/ibrajeh.jpeg',
      alt: 'Couple embracing',
    },
    {
      url: 'https://i.imgur.com/5hGOY21.jpeg',
      alt: 'Outdoor ceremony moment',
    },
    {
      url: 'https://i.imgur.com/Z1huYzr.jpeg',
      alt: 'Ceremony seating under trees',
    },
    {
      url: 'https://i.imgur.com/6bD3b68.jpeg',
      alt: 'Wedding guests celebrating',
    },
    {
      url: 'https://i.imgur.com/g9XlIQm.jpeg',
      alt: 'Bride and groom first look',
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
      url: 'https://i.imgur.com/cxN3lLR.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/z3sT2S7.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/l9Uo3kC.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/aCMoNMz.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/wSTEv3Q.jpeg',
      alt: 'a thing',
    },
    {
      url: 'https://i.imgur.com/l6Ytwtf.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/64TM8aQ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/V7LEoA6.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/6K3cp5y.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ujZXcLD.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/earisOH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/2eQ5jct.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/w9VJyF3.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Op1ZZmB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/tDW2pvT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/3XjR2m9.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/DSdtj0m.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/91HaDlH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/0UkH5Ut.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/SuXuTYB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/VhlgqRE.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/VKHDixd.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/EYhgMKy.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/qiJEEN4.jpeg',
      alt: 'hands'
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
      url: 'https://i.imgur.com/HUYi5gM.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/r96FhFp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/rKXIw0H.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/3Ymb6w4.jpeg',
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
      url: 'https://i.imgur.com/vDb7qLT.jpeg',
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
      url: 'https://i.imgur.com/b104LO4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/06JRHu5.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/AdjE6Gd.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/wc8Dt65.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/XiJ7vuo.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/J8pAA37.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZXhGgbz.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/olJ27tI.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Y7beWxH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/S4Y27OA.jpeg',
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
      url: 'https://i.imgur.com/e17LBsK.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/NgppC5Q.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/l8UFd99.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/1jR56Ge.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/09kNVLu.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/gJZHkei.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jaAm9Hf.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/nx4e58L.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/voE9t8M.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/cvyU3qP.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jzy3Q2q.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/yGgggWx.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/tBQYDAN.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/aWXGY7W.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ds3Ilfa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/1NDmbUa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/keHPMbp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/S6cLAAT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/JgWPVrp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/U1SD3qh.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/sGgmOsS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/GemfdjB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/OteMcXD.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/bCM5Oby.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/hwRKCwC.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/MLK81hE.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Qz5iRZO.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/N0gc2kh.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/fBbHGC9.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/P8qbp9z.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/CbWJ3Yv.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Aw49JCa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/JvA51ro.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/IgA9WzN.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/eGEtlC4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jRZDkze.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/aMeeITJ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Rcfr6oK.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/NhF9VF2.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/bN1VVpc.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Kv6BwoA.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/pq3N28U.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/P8UrtHf.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/BCMujAv.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/oNEztk7.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/8EWSysQ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/mchPMLH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/hqLXxKO.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/4H0NtRA.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/12NTkxK.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/4g0QxfS.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/zXFBIum.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/vWwVxIc.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/20Xu0pk.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/450kwcS.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/0KWIvgd.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/qIAKu0R.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/BoF3Meg.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/HfjhyZh.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/hl6Vaz0.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/9HdfVo4.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/Ok9NHWy.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/r5dMbpf.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/kFDitFa.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/AbCem3b.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/NTENe9o.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/WH4O1Ui.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/32589Mi.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/F6ZbkNU.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/bK4THfL.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/BEZSown.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/pxZr86V.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/XM8EsVS.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/IG4U4Ev.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/rwTSSZw.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/yUQEpO4.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/S8sy7pK.jpeg ',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/gvXQZ15.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/Fo971Jf.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/U58WTXT.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/iOf93nc.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/ORJpolT.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/GXcNRZT.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/yemKYlf.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/uAzrt5X.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/Wy0xMQI.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/vMlO4vp.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/L6ahwW3.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/3ROh731.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/suNsc05.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/1TUC9Tu.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/OhgPSFG.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/CLBXMDo.jpeg',
      alt: 'First look in blue suit',
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
      url: 'https://i.imgur.com/tqt6pEU.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/CLfzS6t.jpeg',
      alt: 'First look in blue suit',
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
      url: 'https://i.imgur.com/XT57u0F.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/6hbPHab.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/pT0aF12.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/4x0RQ4f.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/DOUT2gm.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/o1AzWWa.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/6sXy6cg.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/y5FCteh.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/3oXL0c6.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/pKEuGTI.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/kwgDifk.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/fnWKhIY.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/xIGCm0L.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/27ZVD3G.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/t7Fojee.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/7OBOkcn.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/72AYTpI.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/u7OWjMt.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/pd53WZl.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/rGwzMOt.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/mLHoKCc.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/wMX06Ck.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/33fkFFf.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/I9H693a.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/Moh5JQt.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/FhQEpqs.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/F9nCjmm.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/bYynyrP.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/zKu4tDb.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/7CZC1XI.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/MxFOwJZ.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/JdFou1h.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/V76G1G6.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/AkQPrzF.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/eqg9Pe3.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/YmWRcf0.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/W3ZriN5.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/4YJQec5.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/NpPmWSl.jpeg',
      alt: 'First look in blue suit',
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
      url: 'https://i.imgur.com/igdAAXe.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/El2BkeR.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/2u36Nhy.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/IkDIOSo.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/VYURvRd.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/PBN4a4D.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/lB4JTmi.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/SSaiBvT.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/FT2ff61.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/VHY5cOk.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/girsKFY.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/cQFgmhY.jpeg',
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
      url: 'https://i.imgur.com/tnoVCFq.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/CcOwPy2.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/QlXmffm.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/oBG9PF3.jpeg',
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
      url: 'https://i.imgur.com/h7YJPWt.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/Z3aNzgn.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/sEmXm2B.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/tjkL57t.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/13U2hrg.jpeg',
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
      url: 'https://i.imgur.com/ZFjkEbL.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/Y8RYP5x.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/1TTnrAD.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/DGYWkZV.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/sKvs9eG.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/I3YJBU2.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/3beCgvT.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/DpXSQYf.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/Xbbgvjk.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/F81UCeH.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/KjtbbiA.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/JwpDLNU.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/NPyz12P.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/l2WXWxx.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/BovtUjC.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/t1d8G0K.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/4hHSybn.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/13okFQV.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/7gAqCzm.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/75vqmh1.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/WsBjKou.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jzRkaiJ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/CgeGzHS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/siMFTdq.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/VWvaKuX.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/nbkd3mM.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/vJJyE1s.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/kvM87IB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/sadwRlS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/iF9lq7c.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/UWfr7gV.jpeg',
      alt: 'hands'
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
