import {h} from '@composi/core'

/**
 * @param {{greeting: string}} props
 * @returns {import('../types').VNode} VNode
 */
export function Title({greeting}) {
  return (
    <header>
      <nav>
        <h1 class="header--main">Hello, {greeting}!</h1>
      </nav>
    </header>
  )
}
