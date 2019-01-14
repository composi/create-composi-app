#!/usr/bin/env node
// @ts-nocheck

// Import packages:
const fs = require('fs-extra')
const createPackage = require('./resources/createPackage')
const createHTML = require('./resources/createHTML')
const createREADME = require('./resources/README.js')
const chalk = require('chalk')

// Import local values:
const p = require("path")
const IS_WINDOWS = process.platform === 'win32'
const HOME_DIR = (process.platform === "win32") ? process.env.HOMEPATH : process.env.HOME
const USER = IS_WINDOWS ? process.env.USERNAME : process.env.USER
const PKG = require('./package.json')

const composi = (() => {

  // Provide help is needed:
  function getHelp() {
    console.log(' ')
    console.log(chalk`{bgRed.bold Do you need help?}`)
    console.log(' ')
    console.log(chalk`{green.bold To create a new Composi project you need to provide a name for the project.}`)
    console.log(chalk`{white.bold This should be the first argument after "create-composi-app".}`)
    console.log(' ')
    console.log(chalk`{bold Example: create-composi-app "Project Name"}`)
    console.log(' ')
    console.log(chalk`{green.bold You can also provide a path for where to create the project.}`)
    console.log(chalk`{green.bold This should be the second argument.}`)
    console.log(' ')
    console.log(chalk`{green.bold Mac & Linux:} create-composi-app "Project Name" "~/Desktop/dev/personal"`)
    console.log(' ')
    console.log(chalk`{green.bold Windows:} create-composi-app "Project Name" "~\\Desktop\\dev\\personal"`)
    console.log(' ')
    console.log('If no path is provided, the new project will be created on the Desktop.')
    console.log(' ')
    console.log('If a folder already exists with your project\'s name, it will be overwritten.')
    console.log(' ')
    console.log('To get more help for using create-composi-app visit the website:'); console.log(chalk`{green.cyan https://composi.github.io/en/docs/create-composi-app/usage.html}`)
    console.log(' ')
  }

  /**
   * Create variables based on command line arguments.
   */
  let ORIGINAL_NAME = '', PATH = ''

  // Get help:
  if (!process.argv[2] || process.argv[2] === '-h' || process.argv[2] === '--help') {
    getHelp()
    return
  }
  // Get version of cli:
  if (process.argv[2] === '-v' || process.argv[2] === '--version') {
    console.log(PKG.version)
    return
  }
  // Get first argument as project name:
  if (process.argv[2]) {
    ORIGINAL_NAME = process.argv[2]

  }
  // Get second argument as project path:
  if (process.argv[3]) {
    PATH = process.argv[3]
    // Handle path with "~" for home directory:
    if (/^~/.test(PATH)) {
      let HOME_SUB_DIR = PATH.split('~')[1]
      PATH = p.join(HOME_DIR, HOME_SUB_DIR)
    }
  } else {
    PATH = p.join(HOME_DIR, 'Desktop')
  }


  // Create path for new project based on name and PROJECT_PATH:
  const PROJECT_PATH = p.join(PATH, ORIGINAL_NAME)

  console.log(`Going to make a folder for new project: ${PROJECT_PATH}`)

  const name = ORIGINAL_NAME ? ORIGINAL_NAME.toLowerCase() : ''
  // Get path of cli:
  const SOURCE_PATH = __dirname
  const PACKAGE_NAME = name.replace(/\s/g, '-')

  const PACKAGE = createPackage({ name: PACKAGE_NAME, user: USER, version: PKG.version })

  const HTML = createHTML({
    name: ORIGINAL_NAME
  })

  const README = createREADME({
    name: PACKAGE_NAME
  })

  fs.outputFile(
    p.join(PROJECT_PATH, 'package.json'),
    PACKAGE
  ).catch(err => console.error(err))

  fs.outputFile(
    p.join(PROJECT_PATH, 'index.html'),
    HTML
  ).catch(err => console.error(err))

  fs.outputFile(
    p.join(PROJECT_PATH, 'README.md'),
    README
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', '.babelrc'),
    p.join(PROJECT_PATH, '.babelrc')
  ).catch(err => console.error(err))

  fs.copy(p.join(
    SOURCE_PATH, 'resources', '.editorconfig'),
    p.join(PROJECT_PATH, '.editorconfig')
  ).catch(err => console.error(err))

  fs.copy(p.join(
    SOURCE_PATH, 'resources', 'gitignore'),
    p.join(PROJECT_PATH, '.gitignore')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'jsconfig.json'),
    p.join(PROJECT_PATH, 'jsconfig.json')
  ).catch(err => console.error(err))

  fs.copy(p.join(
    SOURCE_PATH, 'resources', '.eslintrc.json'),
    p.join(PROJECT_PATH, '.eslintrc.json')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'gulpfile.js'),
    p.join(PROJECT_PATH, 'gulpfile.js')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'src', 'js'),
    p.join(PROJECT_PATH, 'src', 'js')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'src', 'css'),
    p.join(PROJECT_PATH, 'src', 'css')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'src', 'images'),
    p.join(PROJECT_PATH, 'src', 'images')
  ).catch(err => console.error(err))

})()
