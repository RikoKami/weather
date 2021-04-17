import Head from 'next/head'
import { useState } from 'react'
import { Card } from '../components/Card'
import { CloudIcon } from '../components/CloudIcon'
import { NavigationIcon } from '../components/NavigationIcon'
import { ProgressBar } from '../components/ProgressBar'
import s from '../styles/Home.module.scss'

interface degrees {
  name: 'celsius' | 'fahrenheit'
}

export default function Home() {
  const [degrees, setDegrees] = useState<degrees | string>()

// TODO CONTEXT API

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
        <aside className={s.today}>
          <div className={s.climate}>
            <CloudIcon className={s.svg} />
            <CloudIcon className={s.svg} />
            <CloudIcon className={s.svg} />
            <CloudIcon className={s.svg} />

            <div className={s.todayTemp}>
              <img src="icons/hail.svg" />
              <span className={s.degrees}>
                <div className={s.number}>15</div>ºC
              </span>
              <p>Shower</p>
            </div>
          </div>
        </aside>
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
          <h2 className={s.title}>{`Today's Highlights`}</h2>
          <div className={s.columnFour}>
            <Card title="Wind Status" className={s.windStatus}>
              <div className={s.groupInfo}>
                <span className={s.number}>7</span> mph
              </div>
              <div className={s.direction}>
                <div className={s.icon}>
                  <NavigationIcon style={{ transform: 'rotate(-90deg)' }} />
                </div>
                <span>ENE</span>
              </div>
            </Card>
            <Card title="Humidity" className={s.humidity}>
              <div className={s.groupInfo}>
                <span className={s.number}>85</span>%
              </div>
              <div className={s.progress}>
                <ProgressBar value={0} />
              </div>
            </Card>
            <Card title="Visibility">
              <div className={s.groupInfo}>
                <span className={s.number}>6,4</span> miles
              </div>
            </Card>
            <Card title="Air Pressure">
              <div className={s.groupInfo}>
                <span className={s.number}>998</span> mb
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
