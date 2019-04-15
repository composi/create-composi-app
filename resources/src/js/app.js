import { h, render, run, union } from '@composi/core'
import { clone } from '@composi/merge-objects'
import { Title } from './components/title'

// Render title component:
render(<Title greeting='World' />, 'header')
