import React from 'react'
import { CloudIcon } from '../CloudIcon'
import s from './aside.module.scss'
import { TargetIcon } from '../TargetIcon'
import { LocationIcon } from '../LocationIcon'
import { useQuery } from 'react-query'

export const Aside = () => {
  const showPosition = position => {
    console.log(
      'Latitude: ' +
        position.coords.latitude +
        '\nLongitude: ' +
        position.coords.longitude
    )
  }
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  const toJSON = (_: Response) => _.json()
  const fetcher = () =>
    fetch(
      'https://www.metaweather.com/api/location/search/?lattlong=-12.9606136,-38.4744683'
    ).then(toJSON)

  const { data } = useQuery('cu', fetcher)
  console.log(data)

  return (
    <aside className={s.today}>
      <div className={s.climate}>
        <CloudIcon className={s.svg} />
        <CloudIcon className={s.svg} />
        <CloudIcon className={s.svg} />
        <CloudIcon className={s.svg} />

        <div className={s.search}>
          <button>Search for places</button>
          <button onClick={getLocation}>
            <TargetIcon />
          </button>
        </div>

        <div className={s.todayTemp}>
          <img src="icons/hail.svg" />
          <span className={s.degrees}>
            <div className={s.number}>15</div>ºC
          </span>
          <p>Shower</p>

          <div className={s.localization}>
            <LocationIcon fill="#88869D" />
            <p></p>
          </div>
        </div>
      </div>
    </aside>
  )
}
