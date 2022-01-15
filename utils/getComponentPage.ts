import { bundleMDX } from "mdx-bundler"
import path from "path"
export async function getComponentPage (component: string) {
  // const content = fs.readFileSync(path.join(process.cwd(), `/examples/${params.component}.mdx`))
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
  const { code, frontmatter } = await bundleMDX<{title: string}>({
    // source: content.toString(),
    file: path.join(process.cwd(), `/examples/${component}.mdx`),
    cwd: process.cwd(),
    esbuildOptions(options, frontmatter) {
      options.platform = 'node'
      // options.target = ['es6']
      options.target = ['es6']
      return options
    }
  });
  console.log('frontmatter', frontmatter)
  return {
    code,
    meta: frontmatter
  }
}