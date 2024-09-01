import { useState } from "react"
import { useDispatch } from "react-redux"

const logIn = ()=>{
    const dispatch = useDispatch()
  
    const [ Email ,setEmail] =useState("")
    const [ Password ,setPassword] =useState("")
    const formSubmit = ()=>{
        // dispatch()
    // {Password,Email}
    
    
    }    
    return(
            <div>
                <form onSubmit={formSubmit}className="  w-fit h-fit border-2 border-black px-[4vw] py-[4vw]   "> 
                    <div className="flex flex-col gap-[0.7vw]  ">
                        
                        <div className="flex flex-col items-start gap-[0.5vw] " >
                            <label htmlFor="Email" className="pl-[0.3vw]">Email</label>
                            <input  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" value={Email} className=" pl-[1vw] w-[15vw] h-[2.7vw]   outline-none border rounded  border-zinc-700"  />
                        </div>
                        <div className="flex flex-col items-start gap-[0.5vw] " >
                            <label htmlFor="password" className="pl-[0.3vw]">Password</label>
                            <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" value={Password} className=" pl-[1vw] w-[15vw] h-[2.7vw]   outline-none border rounded  border-zinc-700"  />
                        </div>
                        <div className="pt-[0.7vw] ">
                    <button className="w-[9vw] h-[3vw]   rounded  bg-blue-400" >Submit</button>
                    </div>
                    </div>
                    
                </form>
    
            </div>
        )
}
export default logIn