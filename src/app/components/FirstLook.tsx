import { PhotoGallery } from './PhotoGallery'

export function FirstLook() {
  const photos = [
    {
      url: 'https://i.imgur.com/S8sy7pK.jpeg',
      alt: 'them',
    },
    {
      url: 'https://i.imgur.com/iOf93nc.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/yUQEpO4.jpeg',
      alt: 'them',
    },

    {
      url: 'https://i.imgur.com/fhTmoHm.jpeg',
      alt: 'Emotional first embrace',
    },
    {
      url: 'https://i.imgur.com/pKEuGTI.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/4x0RQ4f.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/ckGqw7G.jpeg',
      alt: 'First look moment',
    },
    {
      url: 'https://i.imgur.com/ibrajeh.jpeg',
      alt: 'Couple in dramatic archway',
    },
    {
      url: 'https://i.imgur.com/GXcNRZT.jpeg',
      alt: 'Couple in dramatic archway',
    },
    {
      url: 'https://i.imgur.com/5hGOY21.jpeg',
      alt: 'Emotional father-daughter moment',
    },
    {
      url: 'https://i.imgur.com/g9XlIQm.jpeg',
      alt: 'First look in front of house',
    },
    {
      url: 'https://i.imgur.com/bN1VVpc.jpeg',
      alt: 'Dramatic first look reveal',
    },
    {
      url: 'https://i.imgur.com/8EWSysQ.jpeg',
      alt: 'Emotional black and white moment',
    },
    {
      url: 'https://i.imgur.com/mchPMLH.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/4H0NtRA.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/12NTkxK.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/4g0QxfS.jpeg',
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
      url: 'https://i.imgur.com/BoF3Meg.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/HfjhyZh.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/hl6Vaz0.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/9HdfVo4.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/r5dMbpf.jpegs',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/xIGCm0L.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/AbCem3b.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/NTENe9o.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/32589Mi.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/F6ZbkNU.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/bK4THfL.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/gvXQZ15.jpeg',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://i.imgur.com/Fo971Jf.jpeg',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://i.imgur.com/U58WTXT.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/vMlO4vp.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/L6ahwW3.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/suNsc05.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/1TUC9Tu.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/CLBXMDo.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/tqt6pEU.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/XT57u0F.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/pT0aF12.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/o1AzWWa.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/y5FCteh.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/3oXL0c6.jpeg',
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
      url: 'https://i.imgur.com/27ZVD3G.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/t7Fojee.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/u7OWjMt.jpeg',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://i.imgur.com/pd53WZl.jpeg',
      alt: 'First look in blue suit',
    },
    {
      url: 'https://i.imgur.com/W3ZriN5.jpeg',
      alt: 'Emotional reveal moment',
    },

  ]

  return (
    <PhotoGallery
      photos={photos}
      title="First Look"
      description="The emotional moment when we first saw each other"
    />
  )
}
