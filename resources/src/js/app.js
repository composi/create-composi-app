import {h, render, run, union, batch} from '@composi/core'
import {clone} from '@composi/clone'
import {Title} from './components/title'

// Render title component:
render(<Title greeting="World" />, 'header')

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
    // return state here

  },
  /**
   * @param {State} sta
   * @param {Send} send
   */
  view(state, send) {
    // return renderer here

  },
  /**
   * @param {State} state
   * @param {Message} msg
   * @param {Send} send
   */
  update(state, msg, send) {
    // return actions here

  },
  /**
   * @param {Send} [send]
   * @param {GetState} [getState]
   */
  subscriptions(send, getState) {
    // return subscriptions here

  },
  /**
   * @param {State} [state]
   */
  done(state) {
    // handle cleanup here
    
  }
}

run(program)
