import React, { useEffect, useRef, useState, forwardRef } from 'react';
import rough from 'roughjs/bin/rough';

const WhiteBoard = forwardRef(({ selectedTool }, ref) => {
  const internalCanvasRef = useRef(null); // Local ref to manage canvas drawing internally
  const [isDrawing, setIsDrawing] = useState(false); // State to track if the user is drawing
  const [currentPath, setCurrentPath] = useState([]); // State to store the current drawing path

  useEffect(() => {
    const canvas = ref.current || internalCanvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    const rc = rough.canvas(canvas);

    const handleCanvasClick = (event) => {
      const { offsetX, offsetY } = event;

      switch (selectedTool) {
        case 'Rectangle':
          rc.rectangle(offsetX, offsetY, 100, 60, { stroke: 'black', roughness: 2.8 });
          break;
        case 'Circle':
          rc.circle(offsetX, offsetY, 50, { stroke: 'red', fill: 'blue', fillStyle: 'solid' });
          break;
        case 'Pen':
          // Start drawing on mouse down
          break;
        case 'Erase':
          // Implement eraser logic (e.g., clearing parts of the drawing) here
          break;
        default:
          break;
      }
    };

    const handleMouseDown = (event) => {
      if (selectedTool === 'Pen') {
        setIsDrawing(true);
        const { offsetX, offsetY } = event;
        setCurrentPath([[offsetX, offsetY]]);
      }
    };

    const handleMouseMove = (event) => {
      if (isDrawing && selectedTool === 'Pen') {
        const { offsetX, offsetY } = event;
        setCurrentPath((prevPath) => [...prevPath, [offsetX, offsetY]]);
        context.lineTo(offsetX, offsetY);
        context.stroke();
      }
    };

    const handleMouseUp = () => {
      if (isDrawing && selectedTool === 'Pen') {
        setIsDrawing(false);
        context.closePath();
        setCurrentPath([]); // Clear the current path after drawing
      }
    };

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Cleanup on component unmount
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [selectedTool, ref, isDrawing, currentPath]);

  return (
    <canvas
      ref={ref || internalCanvasRef}
      className="bg-white w-[70vw] h-[32vw]"
      width={700} // Set the width and height as per your design requirements
      height={320}
    ></canvas>
  );
});

export default WhiteBoard;






// import rough from 'roughjs/bin/rough';




// const whiteBoard = ()=>{
//     // const [selectedTool ,setselectedTool] =useState("")
//     // const [Pen ,setPen] =useState("")
//     // const [Circle ,setCircle] =useState("")
//     // const [Rectangle ,setRectangle] =useState("")
//     // const [Line ,setLine] =useState("")
//     // const [Erase ,setErase] =useState("")
    

//     return(
//         <div className="bg-white w-[70vw] h-[32vw]  " >

//         </div>
//     )
// }
// export default whiteBoard

