import { useRef, useState } from "react"
import { Robot } from "./Robot"

import RobotDisplay from "./RobotDisplay"

function App() {
  const inputCode = useRef(null)
  const [robotSteps, setRobotSteps] = useState(null)

  function execute() {
    const code = inputCode.current?.value
    const robot = new Robot()
    robot.execute(code)
    setRobotSteps(robot.getSteps())
  }

  return (
    <div >
      <div className="container flex flex-row gap-4 p-4">
        <div className="flex flex-col p-4 gap-4 ">
          <h1 className=" text-2xl">Robot Walk</h1>
          <div className="flex flex-col gap-4">
            <h2>คำสั่ง Robot Walk</h2>
            <input ref={inputCode} type="text" name="code" id="code" className="flex flex-row justify-center px-4 py-2 border bg-white text-slate-800 rounded"/>
            <button onClick={execute} className="flex flex-row justify-end px-4 py-2">
              คำนวณ
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <RobotDisplay robotSteps={robotSteps} />
        </div>
      </div>
    </div>
  )
}

export default App
