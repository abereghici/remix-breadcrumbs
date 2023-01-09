import {Crumb} from '~/components/breadcrumbs'

export const handle = {
  breadcrumb: ({isCurrentPage}: {isCurrentPage: boolean}) => (
    <Crumb href="/living/couch" isCurrentPage={isCurrentPage}>
      Couch
    </Crumb>
  ),
}

export default function Couch() {
  return <div>Couch</div>
}
