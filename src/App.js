import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Button from './_components/Button.mdx'

export const App = props => (
  <MDXProvider>
    <Button />
  </MDXProvider>
)
