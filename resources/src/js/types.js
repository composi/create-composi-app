/**
 * This file contains global types that you can use through your projedt.
 * As your project grows in complexity, you can store types here to use elsewhere.
 * When importing types from here, you'll need to use relative paths.
 * If you examine the `app.js` file, you'll find how we do this there.
 * Providing JSDoc type definitions gives you realtime type linting in VSCode.
 * This project is set up to do that already using TypeScript in the background.
 * You can also run a type test at any time from the command line: `npm run checkjs`
 * You can learn more about how to define your JavaScript's type information
 * in the following articles:
 * 1. https://medium.com/@trukrs/javascript-type-linting-5903e9e3625f
 * 2. Example projects: https://github.com/composi/examples
 * Read the documentation on how to use JSDoc to define types: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
 */


// A dummy export so that the type defined here are importable:
export function noop() {}


/**
 * Core types for use with view, update, subscriptions and actions.
 * @typedef {import('@composi/core').Message} Message
 * @typedef {import('@composi/core').Send} Send
 * @typedef {import('@composi/core').Program} Program
 * @typedef {import('@composi/core').VNode} VNode
 * @typedef {string | number | undefined | null | VNode | VNode[]} Children
 * @typedef {import('@composi/core').Props} Props
 * @typedef {() => State} GetState
 */

/**
 * Define your program's state here.
 * @typedef {Object} State
 */
