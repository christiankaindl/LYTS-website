import path from "path"
import fs from 'fs'
import { mdxBundlerSetup } from "./mdxBundlerSetup";
import { getComponentPage } from "./getComponentPage";

// Rename to getMdxPage
export async function getFilteredExamples (filters?: string[]) {
  mdxBundlerSetup()
  // 1. Get all Component.mdx files in the example folder
  const availableExamples = fs
    .readdirSync(path.join(process.cwd(), `docs/examples`))
    .filter((dirName) => dirName !== 'template' && dirName !== '.DS_Store' && !dirName.endsWith('.mdx'))

  // 2. Bundle them all
  const bundledExamples = await Promise.all(availableExamples.map(async (dirName) => {
    return await getComponentPage(`examples/${dirName}/story`)
  }))

  if (!filters) return bundledExamples

  // 3. Filter based on the meta data
  return bundledExamples.filter(({ meta }) => {
    return meta.components?.some((componentName) => {
      return filters.includes(componentName)
    })
  })
}
