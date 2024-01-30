import { useState } from "react";
import { useNavigate } from "react-router"
import { addNewMemberDetails } from "./helper/helper";

export function AddDetails({infoData,setInfodata}){
    // state for each input to update details
    const [Name,setName]= useState(""); 
    const [Username,setUserName]= useState("")
    const [Email,setEmail] = useState("")
    const [Street,setStreet] = useState("")
    const[Suite,setSuite] = useState("")
    const[City,setCity] = useState("")
    const[Zipcode,setZipcode] = useState("")
    const[Number,setNumber] = useState("")
    const [ Website,setWebsite] = useState("");
    const [CompanyName,setCompanyName] = useState("");
    const[CatchPhrase,setCatchPhrase] = useState("");
    const[CompanyBs,setCompanyBs] = useState("");
    const navigate = useNavigate();
    const addNewMember = () => {
        // adding data object
        const newMemberDetails = {
            name:Name,
            username:Username,
            email:Email,
            street:Street,
            suite:Suite,
            city:City,
            zipcode:Zipcode,
            phone:Number,
            website:Website,
            company:CompanyName,
            catchPhrase:CatchPhrase,
            bs:CompanyBs,

        }
         //adding data in api function
        addNewMemberDetails(newMemberDetails).then((data) => {
            if(data){
                setInfodata([...infoData, newMemberDetails]);
           navigate("/");
            }else{
                console.log("Sorry cannot add new Member");
            }
         }) ;
     };
    
    return(
        //input for adding data
        <div className="bg-primary">
         <form 
            className="grid grid-rows-4 justify-center gap-4"
            >
         <input 
            type="text" 
            placeholder="Enter Name" 
            className="input input-bordered w-80" 
            value={Name}
            onChange={(e)=>{setName(e.target.value)}}
            />
              <input 
            type="text" 
            placeholder="Enter username" 
            className="input input-bordered w-80" 
            value={Username}
            onChange={(e)=>setUserName(e.target.value)}
            />
                <input 
            type="text" 
            placeholder="Enter Email" 
            className="input input-bordered w-80" 
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            />
                <input 
            type="text" 
            placeholder="Enter street" 
            className="input input-bordered w-80" 
            value={Street}
            onChange={(e)=>setStreet(e.target.value,)}
            />
                  <input 
            type="text" 
            placeholder="Enter Suite" 
            className="input input-bordered w-80" 
            value={Suite}
            onChange={(e)=>{setSuite(e.target.value)}}
            />
                  <input 
            type="text"
            placeholder="Enter city" 
            className="input input-bordered w-80" 
            value={City}
            onChange={(e)=>setCity(e.target.value)}
            />
                  <input 
            type="text" 
            placeholder="Enter zipcode" 
            className="input input-bordered w-80" 
            value={Zipcode}
            onChange={(e)=>setZipcode(e.target.value)}
            />
           <input 
            type="text" 
            placeholder="Enter Phone Number" 
            className="input input-bordered w-80" 
            value={Number}
            onChange={(e)=>setNumber(e.target.value)}
            />
                <input 
            type="text" 
            placeholder="Enter website" 
            className="input input-bordered w-80" 
            value={Website}
            onChange={(e)=>setWebsite(e.target.value)}
            />
                <input 
            type="text" 
            placeholder="Enter Company Name" 
            className="input input-bordered w-80" 
            value={CompanyName}
            onChange={(e)=>setCompanyName(e.target.value)}
            />
                  <input 
            type="text" 
            placeholder="CatchPhrase" 
            className="input input-bordered w-80" 
            value={CatchPhrase}
            onChange={(e)=>setCatchPhrase(e.target.value)}
            />
                     <input 
            type="text" 
            placeholder="website" 
            className="input input-bordered w-80" 
            value={CompanyBs}
            onChange={(e)=>setCompanyBs(e.target.value)}
            />

            </form>
            <div className="grid justify-center p-2">
            <button className="btn btn-accent w-70"onClick={addNewMember}>Add</button>
            </div>
         </div>

    )
}