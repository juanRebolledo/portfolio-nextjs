import CodeHeader from "../CodeHeader/CodeHeader"

const ContainerCode = ({ children, front = false }) => (
  <div className={`container-code ${front ? 'front' : ''}`}>
    <div className="content-code">
      <CodeHeader />
      {children && (<div className="code">
        {children}
      </div>)}
    </div>
  </div>
)

export default ContainerCode