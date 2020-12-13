const Item = ({ children, mr, text, type }) => (
  children
    ? <span style={{ marginRight: mr }} className={`line-${type}`}>{children}</span>
    : <span style={{ marginRight: mr }} className={`line-${type}`}>{text}</span>
)

Item.defaultProps = {
  mr: '5px',
  type: ''
}

export default Item
