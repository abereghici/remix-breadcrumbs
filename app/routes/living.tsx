import {Outlet} from '@remix-run/react'
import {Crumb} from '~/components/breadcrumbs'

export const handle = {
  breadcrumb: ({isCurrentPage}: {isCurrentPage: boolean}) => (
    <Crumb href="/living" isCurrentPage={isCurrentPage}>
      Living
    </Crumb>
  ),
}

export default function Living() {
  return <Outlet />
}
