import { h, render, run, union, batchEffects } from '@composi/core'
import { clone } from '@composi/merge-objects'
import { Title } from './components/title'

// Render title component:
render(<Title greeting='World' />, 'header')

/**
 * Default program
 * You need to provide initial state in `init`,
 * a render function returned by `view`,
 * messages that are handled by actions,
 * which get returned by `update`,
 * effects to run at startup that get returned by `subscriptions`,
 * and a function to handle the possible shutdown of the program returned by `done`.
 * Note that `subscriptions` and `done` are totally optional. If you are not going to use them, you can delete them from your program.
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
