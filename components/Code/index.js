import CodeHeader from './components/CodeHeader/CodeHeader'
import ContainerCode from './components/ContainerCode/ContainerCode'
import ArrItem from './components/Line/ArrItem/ArrItem'
import Item from './components/Line/Item/Item'
import Line from './components/Line/Line'

const Code = () => (
  <div className="container-codes">
    <ContainerCode />
    <ContainerCode front>
      <Line key="1" line="1" sz="1">
        <Item text="const" type="var" />
        <Item text="juanRebolledo" type="var_name" />
        <Item text="=" type="equal" />
        <Item mr="0" text="{" type="bracket" />
      </Line>
      <Line key="2" line="2" sz="2">
        <Item>age<Item text=":" type="bracket" /></Item>
        <Item type="truly">21<Item text="," type="bracket" /></Item>
      </Line>
      <Line key="3" line="3" sz="2">
        <ArrItem name="code" values={["Javascript", "PHP"]} />
      </Line>
      <Line key="4" line="4" sz="2">
        <ArrItem name="technologies" values={['React JS', 'Next JS']} />
      </Line>
      <Line key="5" line="5" sz="2">
        <ArrItem name="tools" values={['Firebase']} />
      </Line>
      <Line key="6" line="6" sz="1">
        <Item text="}" type="bracket" />
      </Line>
    </ContainerCode>
  </div>
)

export default Code