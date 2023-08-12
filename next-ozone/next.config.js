const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Your Company',
    siteDescription: 'Your company description.',
    siteKeywords: 'your company keywords',
    siteUrl: 'https://next-ozone.vercel.app',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@your_handle'
  }  
})
