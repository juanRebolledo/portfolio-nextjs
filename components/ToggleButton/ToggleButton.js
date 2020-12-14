import { useState } from "react"

const ToggleButton = ({handlerDarkMode}) => {
  const [checked, setChecked] = useState(false)
  
  const handlerChecked = () => {
    handlerDarkMode()
    setChecked(!checked)
  }

  return (
    <>
      <div onClick={handlerChecked}>
        <img className="sun" src="/images/sun.svg" />
        <img className="moon" src="/images/moon.svg" />
        <span /></div>
      <style jsx>{`
        div {
          align-items: center;
          background: ${checked ? "#272822" : "#F2E9E4"};
          border-radius: 22px;
          ${checked ? "border: 1px solid #F2E9E4;" : ''}
          box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.16);
          cursor: pointer;
          display: flex;
          height: 32px;
          justify-content: space-around;
          position: absolute;
          width: 80px;
          -webkit-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.16);
          -moz-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.16);
        }
        div span {
          background: ${checked ? "#F2E9E4" : "#fff"};
          border-radius: 99vw;
          box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.16);
          height: 26px;
          left: 8px;
          top: 3px;
          transition: all ease-in 0.3s;
          position: absolute;
          width: 26px;
          -webkit-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.16);
          -moz-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.16);
          transform: translateX(${checked ? "130%" : "0%"})
        }

        @media(max-width: 426px) {
          div {
            left: 25px;
          }
        }
      `}</style>
    </>
  )
}

export default ToggleButton
