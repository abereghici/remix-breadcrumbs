import {Link} from '@remix-run/react'

export default function Index() {
  return (
    <>
      <div>Home</div>
      <Link to="/living">Go to living</Link>
    </>
  )
}
