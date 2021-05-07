import React from 'react'
import { CloudIcon } from '../CloudIcon'
import s from './aside.module.scss'
import { TargetIcon } from '../TargetIcon'
import { LocationIcon } from '../LocationIcon'

export const Aside = props => {
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
            <p>{props.currentLocation?.map(location => location.title)[0]}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
