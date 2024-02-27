import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Hello Debug <br/>
      <Link href="/users/new">Link</Link>
    </main>
  )
}
