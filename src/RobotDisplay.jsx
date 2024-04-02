import { RobotPlate } from "./Robot"

export default function RobotDisplay({ robotSteps }) {
  const robotPlate = new RobotPlate(robotSteps)
  const plate = robotPlate.getPlate()
  const cellSize = 32

  return (
    <div style={{display: "grid",gridTemplateColumns: `repeat(${plate.length}, ${cellSize}px)`,gridTemplateRows: `repeat(${plate.length}, ${cellSize}px)`}}>
      {plate.map(row =>
        row.map(cell => {
          let color = "bg-white"
          if (cell == "O") {
            color = "bg-white"
          } else if (cell == "S") {
            color = "bg-[#A1C398]"
          } else if (cell == "P") {
            color = "bg-slate-100"
          } else if (cell == "E") {
            color = "bg-[#FA7070]"
          }
          return (
          <div className={`w-[${cellSize}px] h-[${cellSize}px] ${color} border`}></div>
          )
        })
      )}
    </div>
  )
}
