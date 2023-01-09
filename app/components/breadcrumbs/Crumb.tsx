import {Link} from '@remix-run/react'

type Props = {
  href: string
  isCurrentPage: boolean
  children: React.ReactNode
}

export function Crumb({href, isCurrentPage, children}: Props) {
  return (
    <li className="crumbWrapper" key={href}>
      <Link
        to={href}
        className="crumbLink"
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {children}
      </Link>
    </li>
  )
}
