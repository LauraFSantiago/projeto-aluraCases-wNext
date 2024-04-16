import Link from 'next/link'

export default function page404() {
  return (
    <div>
      <h1>Você se perdeu e caiu na pagina 404 :O</h1>
      {/* <a href="/">home page</a> */}
      <Link href="/">
        ir para home page
      </Link>
    </div>
  )
}