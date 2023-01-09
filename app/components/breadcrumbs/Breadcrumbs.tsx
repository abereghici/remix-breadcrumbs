import {BreadcrumbList} from './BreadcrumbList'

type Props = {
  children: React.ReactNode
}

export function Breadcrumbs({children}: Props) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  )
}
