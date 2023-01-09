import type {MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
} from '@remix-run/react'
import styles from '~/styles/global.css'
import {Breadcrumbs} from './components/breadcrumbs'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Breadcrumbs',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}
export default function App() {
  const matches = useMatches()
  const location = useLocation()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Breadcrumbs>
            {matches
              // skip routes that don't have a breadcrumb
              .filter(match => match.handle && match.handle.breadcrumb)
              // render breadcrumbs!
              .map(match =>
                match.handle?.breadcrumb({
                  isCurrentPage: match.pathname === location.pathname,
                }),
              )}
          </Breadcrumbs>
        </header>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
