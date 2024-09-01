import React, { useEffect, useRef, forwardRef } from 'react';
import rough from 'roughjs/bin/rough';

const WhiteBoard = forwardRef(({ selectedTool }, ref) => {
  const internalCanvasRef = useRef(null); // Local ref to manage canvas drawing internally

  useEffect(() => {
    const canvas = ref.current || internalCanvasRef.current;
    if (!canvas) return;

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
          // Implement pen drawing logic (e.g., free-hand drawing) here
          break;
        case 'Erase':
          // Implement eraser logic (e.g., clearing parts of the drawing) here
          break;
        default:
          break;
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    // Cleanup on component unmount
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [selectedTool, ref]);

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

