import path from "path"

/**
 * Set up path for mdx-bundler's esbuild binary.
 * As recommended here: https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
 */
export function mdxBundlerSetup () {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe',
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild',
    )
  }
}
