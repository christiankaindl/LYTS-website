import { bundleMDX } from "mdx-bundler"
import path from "path"
const {
  vanillaExtractPlugin
} = require('@vanilla-extract/esbuild-plugin');

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
    file: path.join(process.cwd(), `/docs/components/${component}.mdx`),
    cwd: process.cwd(),
    esbuildOptions(options, frontmatter) {
      options.platform = 'browser'
      // Use the esbuild vanilla-extract plugin to get the bundled classNames.
      // The actual CSS is already bundled on the page globally (by the Next.js vanilla-extract plugin)
      // Thankfully, the hashes are the same between the Next.js (webpack) plugin and the esbuild plugin
      options.plugins?.unshift(vanillaExtractPlugin())
      // The outfile does nothing and is not outputted anywhere as far as I can tell, but the vanilla-extract plugin errors otherwise.
      options.outfile = 'out.js'
      return options
    }
  });
  return {
    code,
    meta: frontmatter
  }
}