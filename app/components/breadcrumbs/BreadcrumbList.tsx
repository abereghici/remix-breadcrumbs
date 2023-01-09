type Props = {
  children: React.ReactNode
}

export function BreadcrumbList({children}: Props) {
  return <ol className="breadcrumbList">{children}</ol>
}
