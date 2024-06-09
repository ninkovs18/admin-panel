import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { defaultGlobalStyles } from './common/theme'
import App from './router/'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  },
])

const Element = () => {
  defaultGlobalStyles()
  return (
    <FluentProvider theme={webLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  )
}

root.render(<Element />)
