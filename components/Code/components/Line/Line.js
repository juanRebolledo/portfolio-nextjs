const Line = ({ children, line, sz }) => (
  <div className="line">
    <span className={`line-number sp-${sz}`}>{line}</span>
    {children}
  </div>
)

export default Line
