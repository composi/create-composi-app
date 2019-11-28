#!/usr/bin/env node
// @ts-nocheck

// Import packages:
const fs = require('fs-extra')
const createPackage = require('./resources/createPackage')
const createHTML = require('./resources/createHTML')
const createREADME = require('./resources/README.js')
const chalk = require('chalk')
const argv = require('yargs').argv

// Import local values:
const p = require("path")
const IS_WINDOWS = process.platform === 'win32'
const HOME_DIR = (process.platform === "win32") ? process.env.HOMEPATH : process.env.HOME
const USER = IS_WINDOWS ? process.env.USERNAME : process.env.USER
const PKG = require('./package.json')
let NAME = argv.name || argv.n
let ORIGINAL_NAME = ''
let PATH = argv.p || p.join(HOME_DIR, 'Desktop')
const HELP = argv.h
console.log(HELP)
const VERSION = argv.v

const createComposiApp = (() => {

  // Provide help is needed:
  function getHelp() {
    console.log(' ')
    console.log(chalk`{bgRed.bold Do you need help?}`)
    console.log(' ')
    console.log(chalk`{green.bold To create a new Composi project you need to provide a name for the project.}`)
    console.log(chalk`{white.bold This should come after the flag '-n'.}`)
    console.log(' ')
    console.log(chalk`{bold Example: create-composi-app -n "Project Name"}`)
    console.log(' ')
    console.log(chalk`{green.bold You can also provide a path for where to create the project.}`)
    console.log(chalk`{green.bold This should come after the flag '-p'.}`)
    console.log(' ')
    console.log(chalk`{green.bold Mac & Linux:} create-composi-app -n "Project Name" -p "~/Desktop/dev/personal"`)
    console.log(' ')
    console.log(chalk`{green.bold Windows:} create-composi-app -n "Project Name" -p"~\\Desktop\\dev\\personal"`)
    console.log(' ')
    console.log('If no path is provided, the new project will be created on the Desktop.')
    console.log(' ')
    console.log('If a folder already exists with your project\'s name, it will be overwritten.')
    console.log(' ')
    console.log('To get more help for using create-composi-app visit the website:'); console.log(chalk`{green.cyan https://composi.github.io/en/docs/create-composi-app/usage.html}`)
    console.log(' ')
  }
  // Get version of cli:
  if (VERSION) {
    console.log(PKG.version)
    return
  } else if (!NAME || HELP) {
    getHelp()
    return
  }

  // Get first argument as project name:
  ORIGINAL_NAME = NAME

  // Get second argument as project path:
  if (PATH) {
    // Handle path with "~" for home directory:
    if (/^~/.test(PATH)) {
      let HOME_SUB_DIR = PATH.split('~')[1]
      PATH = p.join(HOME_DIR, HOME_SUB_DIR)
    }
  }

  // Create path for new project based on name and PROJECT_PATH:
  const PROJECT_PATH = p.join(PATH, ORIGINAL_NAME)

  console.log(`Going to make a folder for new project: ${PROJECT_PATH}`)

  const name = ORIGINAL_NAME ? ORIGINAL_NAME.toLowerCase() : ''
  // Get path of cli:
  const SOURCE_PATH = __dirname
  const PACKAGE_NAME = name.replace(/\s/g, '-')

  const PACKAGE = createPackage({name: PACKAGE_NAME, user: USER, version: PKG.version})

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

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'tsconfig.json'),
    p.join(PROJECT_PATH, 'tsconfig.json')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', '.prettierignore'),
    p.join(PROJECT_PATH, '.prettierignore')
  ).catch(err => console.error(err))

  fs.copy(
    p.join(SOURCE_PATH, 'resources', 'settings.json'),
    p.join(PROJECT_PATH, '.vscode/settings.json')
  ).catch(err => console.error(err))

})()
