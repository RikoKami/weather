import s from './card.module.scss'

interface CardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, title, className }: CardProps) => {
  return (
    <div className={`${className} ${s.card}`}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
