module.exports = {
  siteUrl: 'https://lyts.christiankaindl.com',
  generateRobotsTxt: process.env.VERCEL_ENV === 'production',
  exclude: ['/og-images']
}
