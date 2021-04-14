import s from './progressBar.module.scss'

interface ProgressBarProps {
  value: number
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className={s.container}>
      <div className={s.complete} style={{ width: `${value}%` }}>
        <div className={s.liquid}></div>
      </div>
      <span className={s.progress}>{value}%</span>
    </div>
  )
}
