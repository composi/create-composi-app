import { h, render, run, union, batchEffects } from '@composi/core'
import { clone } from '@composi/merge-objects'
import { Title } from './components/title'

// Render title component:
render(<Title greeting='World' />, 'header')

/**
 * @typedef {import('@composi/core').Message} Message
 * @typedef {import('@composi/core').Send} Send
 * @typedef {import('@composi/core').Program} Program
 */
/**
 * Default program for `run` function.
 * @type {Program}
 */
const program = {
  init() {

  },
  view(state, send) {

  },
  update(state, msg, send) {

  },
  subscriptions(getState, send) {

  },
  done(state) {

  }
}

run(program)
