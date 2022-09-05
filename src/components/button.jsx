function Button({children, variant, size, color, onClick}) {
  return (
    <button className={`btn ${variant && 'btn-'+variant} ${size && 'btn-'+size} ${color && 'btn-'+color}`} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
