import Head from 'next/head'
import s from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Weather</title>
      </Head>

      <main className={s.main}></main>
    </div>
  )
}
