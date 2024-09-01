
import  img from "../assets/Group 54.png"
const Home = ()=>{


    return(
        <div className="w-[100%] min-h-screen overflow-hidden">
             <div className="page1 w-full h-full " >
            <div className="w-full h-[4vw]  flex items-center justify-between px-[3vw] bg-red-100">   
                <div className="w-[8vw]  object-contain">
                     <img className="w-full   object-contain" src={img} alt="" />
                     </div>
                <div className="flex items-center justify-between gap-[5vw] mr-[8vw]  ">
<h1>Home</h1>
<h1>Details</h1>
<h1>Profile</h1>
</div>
                
                 </div>

<div className=" w-screen h-[41.7vw]">
<h2 className=" text-center text-2xl text-black pt-[3vw] ">Create your idea on white Board</h2>
<div  className="flex  items-center justify-around pt-[5vw] ">
    <div className="Create-Box border border-black   px-[3vw]  py-[3vw]">
<h1 className="gilroy  items-center font-400 text-black text-3xl pl-[1vw] ">Create Room</h1>
<form >
    <div className="flex flex-col  items-center gap-[0.7vw] ">
        <label className="pt-5 text-center " htmlFor="generator Code ">Generate Code</label>
        <input type="text" className="w-[15vw] h-[2.5vw] outline-none border border-black" />
        <h3 className="text-xl font-700 hover:text-gray-400 " >generate</h3>
    </div>
  

<div className="flex item-center text-center justify-center pt-[1vw]" ><button className=" monospace w-[5vw] h-[2.5vw] rounded text-white font-70 bg-blue-400">join</button></div>
</form>
    </div>
    <div className="Join-Box border border-black px-[3vw]  py-[3vw] ">
    <h1 className="gilroy  font-400 text-black  text-center text-3xl ">Join Room</h1>
<form  >
    <div className="flex flex-col items-center gap-[0.8vw] ">
        <label className="pt-5c text-center " htmlFor="generator Code  ca   ">Enter Code</label>
        <input type="text" className="w-[15vw] h-[2.5vw] outline-none border border-black" />
    </div>
<div className="flex item-center text-center justify-center pt-[1vw]" ><button className=" monospace w-[5vw] h-[2.5vw] rounded text-white font-70 bg-blue-400">join</button></div>
</form>
    </div>
</div>


</div>

           </div>

           <div className="page2" >
</div>

        </div>
    )
}
export default Home