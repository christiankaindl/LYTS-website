import { bundleMDX } from "mdx-bundler"
import path from "path"
import { lyts } from "utils";
import { mdxBundlerSetup } from "./mdxBundlerSetup";
import rehypeHighlight from 'rehype-highlight'
const {
  vanillaExtractPlugin
} = require('@vanilla-extract/esbuild-plugin');

mdxBundlerSetup()

// Rename to getMdxPage
export async function getComponentPage (pathname: string) {
  const { code, frontmatter } = await bundleMDX<{title: string, description?: string, components?: string[], id?: string}>({
    file: path.join(process.cwd(), `/docs/${pathname}.mdx`),
    cwd: process.cwd(),
    globals: {
      '@christiankaindl/lyts': {
        varName: 'lyts',
        namedExports: Object.keys(lyts),
        type: 'esm',
        defaultExport: false
      }
    },
    xdmOptions (options) {
      options.rehypePlugins = [...(options.rehypePlugins || []), rehypeHighlight]
      return options
    },
    esbuildOptions (options, frontmatter) {
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
  frontmatter.id = path.basename(path.dirname(pathname))
  console.log('frontmatter', frontmatter)
  return {
    code,
    meta: frontmatter,
  }
}
