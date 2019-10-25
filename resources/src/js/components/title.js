import { h } from '@composi/core'

/**
 * @param {{greeting: string}} props
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
