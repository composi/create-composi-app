import { h, render, run } from '@composi/core'
import { Title } from './components/title'

// Render title component:
render(<Title greeting='World' />, 'header')

// Import global types:
/**
 * @typedef {import('./types').Message} Message
 * @typedef {import('./types').Send} Send
 * @typedef {import('./types').Program} Program
 * @typedef {import('./types').State} State
 * @typedef {import('./types').GetState} GetState
 */
/**
 * Default program for `run` function.
 * @type {Program}
 */
const program = {
  init() {

  },
  /**
   * @param {State} state
   * @param {Send} send
   */
  view(state, send) {

  },
  /**
   * @param {State} state
   * @param {Message} msg
   * @param {Send} send
   */
  update(state, msg, send) {

  },
  /**
   * @param {GetState} getState
   * @param {Send} send
   */
  subscriptions(getState, send) {

  },
  /**
   * @param {State} state
   */
  done(state) {

  }
}

run(program)