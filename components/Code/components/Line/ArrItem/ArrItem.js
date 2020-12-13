import Item from 'components/Code/components/Line/Item/Item'
import Line from '../Line'

const ArrItem = ({ name, values }) => (
  <>
    <Item>{name}<Item text=":" type="bracket" /></Item>
    <Item>
      [{" "}<Item type="bracket">
        {values.map(value => (
          <>'<Item mr="0px" type="array_value">{value}<Item text="'," type="bracket" /></Item></>
        ))}
      </Item>]
      <Item mr="0" text="," type="bracket" />
    </Item>
  </>
)

export default ArrItem