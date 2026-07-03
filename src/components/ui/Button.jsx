import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  outline: 'border border-white text-white hover:bg-white hover:text-primary',
  dark:    'bg-primary text-white hover:bg-slate-700',
  ghost:   'text-primary hover:text-accent underline-offset-4 hover:underline',
}

export default function Button({ children, to, href, onClick, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-colors duration-200 rounded px-6 py-3 ${variants[variant]} ${className}`

  if (to)   return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>{children}</a>
  return <button onClick={onClick} className={classes} {...props}>{children}</button>
}
