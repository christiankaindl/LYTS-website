const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const componentsSortOrder = [
  'stack',
  'row',
  'clamp',
  'columns',
  'grid',
  'box',
  'split',
  'breakout'
]


const examples = fs
  .readdirSync(path.join(process.cwd(), './docs/examples'))
  .filter((name) => name !== '.DS_Store' && name !== 'template')
  .map((name) => {
    // Extract metadata using gray-matter
    const data = matter(fs.readFileSync(path.join(process.cwd(), './docs/examples', `${name}/story.mdx`)))

    return {
      id: name,
      ...data?.data
    }
  })

const components = fs
  .readdirSync(path.join(process.cwd(), './docs/components'))
  .map((name) => {
    // Extract metadata using gray-matter
    const data = matter(fs.readFileSync(path.join(process.cwd(), './docs/components', `${name}/${name}.mdx`)))

    return {
      id: name,
      ...data?.data
    }
  })
  .sort(function(a, b){  
    return componentsSortOrder.indexOf(a.id) - componentsSortOrder.indexOf(b.id);
  })

const topLevel = fs
  .readdirSync(path.join(process.cwd(), './pages'))
  .filter((pageName) => pageName.endsWith('.mdx'))
  .map((name) => {
    // Extract metadata using gray-matter
    const data = matter(fs.readFileSync(path.join(process.cwd(), './pages', `${name}`)))

    return {
      id: name.split('.')[0],
      ...data?.data
    }
  })
  .filter(({ draft }) => draft !== true)

fs.writeFileSync(path.join(process.cwd(), './navigation-data.json'), JSON.stringify({
  sections: [
    // ...topLevel,
    {
      content: topLevel
    },
    {
      title: 'Components',
      id: 'components',
      content: components
    },
    {
      title: 'Examples',
      id: 'examples',
      content: examples
    }
  ]
}, null, 2))
