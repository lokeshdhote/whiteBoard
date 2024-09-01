import { useEffect, useRef, useState } from "react";
import WhiteBoard from "./whiteBoard.jsx"; // Ensure WhiteBoard is properly implemented and ref-forwarding is handled
import MoveIcon from "../assets/drag-move-line.png";
import PenIcon from "../assets/pen-nib-fill.png";
import RectangleIcon from "../assets/rectangle-line.png";
import CircleIcon from "../assets/circle-line.png";
import EraseIcon from "../assets/eraser-line.png";
import rough from "roughjs/bin/rough";

const BoardPage = () => {
  const canvasRef = useRef(null);
  const [selectedTool, setSelectedTool] = useState("");

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const getCursorStyle = () => {
    switch (selectedTool) {
      case "Move":
        return `url(${MoveIcon}), auto`;
      case "Pen":
        return `url(${PenIcon}), auto`;
      case "Rectangle":
        return `url(${RectangleIcon}), auto`;
      case "Circle":
        return `url(${CircleIcon}), auto`;
      case "Erase":
        return `url(${EraseIcon}), auto`;
      default:
        return "auto";
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure the canvas exists
    const rc = rough.canvas(canvas);

    const handleCanvasClick = (event) => {
      const { offsetX, offsetY } = event;

      switch (selectedTool) {
        case "Rectangle":
          rc.rectangle(offsetX, offsetY, 100, 60, { stroke: "black", roughness: 2.8 });
          break;
        case "Circle":
          rc.circle(offsetX, offsetY, 50, { stroke: "red", fill: "blue", fillStyle: "solid" });
          break;
        case "Pen":
          // Implement pen drawing logic if needed
          break;
        case "Erase":
          // Implement eraser logic if needed
          break;
        default:
          break;
      }
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick); // Cleanup event listener
    };
  }, [selectedTool]);

  return (
    <div className="cursors w-screen h-screen bg-zinc-400">
      <div className="text-center text-black text-xl capitalize gilroy font-[900] pt-4">
        <h1>White Board</h1>
      </div>

      <div className="navOfBoard w-screen h-[5vw]"></div>

      <div className="toolKit w-screen h-[5vw] flex flex-col gap-[2vw] px-5">
        <h5 className="text-lg font-500 gilroy pl-[2vw]">Tools</h5>
        <div className="flex flex-col gap-[1vw]">
          <label>
            <input type="radio" name="tool" value="Move" onClick={() => handleToolClick("Move")} />
            Move
          </label>
          <label>
            <input type="radio" name="tool" value="Pen" onClick={() => handleToolClick("Pen")} />
            Pen
          </label>
          <label>
            <input type="radio" name="tool" value="Rectangle" onClick={() => handleToolClick("Rectangle")} />
            Rectangle
          </label>
          <label>
            <input type="radio" name="tool" value="Circle" onClick={() => handleToolClick("Circle")} />
            Circle
          </label>
          <label>
            <input type="radio" name="tool" value="Erase" onClick={() => handleToolClick("Erase")} />
            Eraser
          </label>
        </div>

        <div className="flex gap-2">
          <label htmlFor="Color">Color:</label>
          <input type="color" />
        </div>
      </div>

      <div style={{ cursor: getCursorStyle() }} className="h-[3vw] flex justify-center">
      <WhiteBoard ref={canvasRef} selectedTool={selectedTool} />

      </div>
    </div>
  );
};

export default BoardPage;
