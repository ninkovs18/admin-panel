import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import App from './router/'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  },
])

root.render(
  <FluentProvider theme={webLightTheme}>
    <RouterProvider router={router} />
  </FluentProvider>,
)
