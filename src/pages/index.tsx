import Head from 'next/head'
import { useState } from 'react'
import { Card } from '../components/Card'
import s from '../styles/Home.module.scss'

interface degrees {
  name: 'celsius' | 'fahrenheit'
}

export default function Home() {
  const [degrees, setDegrees] = useState<degrees | string>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDegrees = (values: degrees) => {
    setDegrees(values)
  }
  // Change mock to API!
  const week = [
    {
      id: 1,
      title: 'Tomorrow',
      max: 16,
      min: 11,
      abbreviation: 'hc'
    },
    {
      id: 2,
      title: 'Tomorrow',
      max: 16,
      min: 11,
      abbreviation: 's'
    },
    {
      id: 3,
      title: 'Tomorrow',
      max: 16,
      min: 11,
      abbreviation: 'lr'
    },
    {
      id: 4,
      title: 'Tomorrow',
      max: 16,
      min: 11,
      abbreviation: 'c'
    },
    {
      id: 5,
      title: 'Tomorrow',
      max: 16,
      min: 11,
      abbreviation: 'sl'
    },
    {
      id: 6,
      title: 'Tomorrow',
      max: 16,
      min: 11,
      abbreviation: 'sn'
    }
  ]

  return (
    <div className={s.container}>
      <Head>
        <title>Weather</title>
      </Head>

      <main className={s.main}>
        <aside className={s.today}></aside>
        <section className={s.week}>
          <div className={s.degrees}>
            <button
              // TODO: refactor select degrees active
              className={degrees === 'celsius' ? s.active : ''}
              // onClick={() => handleDegrees('')}
            >
              ºC
            </button>
            <button
              className={degrees === 'fahrenheit' ? s.active : ''}
              // onClick={() => handleDegrees('fahrenheit')}
            >
              ºF
            </button>
          </div>

          <div className={s.currentWeek}>
            {week.map(w => (
              <Card title={w.title} className={s.cardWeek} key={w.id}>
                <>
                  <img
                    src={`https://www.metaweather.com/static/img/weather/${w.abbreviation}.svg`}
                  />
                  <div className={s.temp}>
                    <span className={s.max}>{w.max}ºC</span>
                    <span>{w.min}ºC</span>
                  </div>
                </>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
