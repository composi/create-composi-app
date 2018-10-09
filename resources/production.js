const fs = require('fs-extra')
const pkg = require('../package.json')

// Import local values:
const p = require("path")
const homedir = (process.platform === "win32") ? process.env.HOMEPATH : process.env.HOME

console.log('Creating production version of project.')
console.log('Please wait...')

const path = p.join(path, pkg.name)
let splitName = process.cwd().split(p.sep)
let Production_Name = `${splitName[splitName.length - 1]}-production`
fs.copy(p.join(process.cwd(), 'index.html'), p.join(path, Production_Name, 'index.html'))
fs.copy(p.join(process.cwd(), 'js'), p.join(path, Production_Name, 'js'))
fs.copy(p.join(process.cwd(), 'css'), p.join(path, Production_Name, 'css'))
fs.copy(p.join(process.cwd(), 'icons'), p.join(path, Production_Name, 'icons'))
  .catch(err => console.log('No icons to copy.'))
fs.copy(p.join(process.cwd(), 'images'), p.join(path, Production_Name, 'images'))
  .catch(err => console.log('No images to copy.'))
console.log('Deployment version created.')
