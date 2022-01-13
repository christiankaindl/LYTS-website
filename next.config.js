/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withVanillaExtract(withMDX({
  pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true
}))