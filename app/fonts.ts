import localFont from 'next/font/local';
export const lato = localFont({ 
  src: [
    {
      path: '../public/lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
 })