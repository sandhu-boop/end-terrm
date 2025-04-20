const Card = ({ title, children, className = "" }) => {
    return (
      <div className={`card p-6 ${className}`}>
        {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
        {children}
      </div>
    )
  }
  
  export default Card
  