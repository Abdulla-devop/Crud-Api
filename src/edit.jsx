import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editNewMember } from "./helper/helper";

export function EditDetails ({infoData,setInfodata,editId}) {
      //state to update data for each input
    const navigate = useNavigate("");
    const [fullName,setName]= useState(""); 
    const [Username,setUserName]= useState("")
    const [Email,setEmail] = useState("")
    const [Street,setstreet] = useState("")
    const[Suite,setsuite] = useState("")
    const[City,setcity] = useState("")
    const[Zipcode,setzipcode] = useState("")
    const [Lat,setlat] = useState("")
    const [Lng,setlng] = useState("")
    const[Number,setNumber] = useState("")
    const [ Website,setWebsite] = useState("");
    const [CompanyName,setCompanyName] = useState("");
    const[CatchPhrase,setCatchPhrase] = useState("");
    const[CompanyBs,setCompanyBs] = useState("");
    const[index,setIndex] = useState();

     //using useeffect to update the information 
    
    useEffect(() => {
        const selectedMember = infoData.filter((mem) => mem.id == editId);
        const selectedMemIndex = infoData.findIndex((mem) => mem.id == editId);
         setIndex(selectedMemIndex);
         setName(selectedMember[0].name); 
         setUserName(selectedMember[0].username);
        setEmail(selectedMember[0].email);
        setstreet(selectedMember[0].street)
        setsuite(selectedMember[0].suite)
        setcity(selectedMember[0].city)
        setzipcode(selectedMember[0].zipcode)
         setNumber(selectedMember[0].phone);
         setWebsite(selectedMember[0].website);
         setCompanyName(selectedMember[0].company);
         setCatchPhrase(selectedMember[0].catchPhrase);
         setCompanyBs(selectedMember[0].bs)
    },[editId]);
    const updateMemberDetails = () => {
        const editedMember = {
            name:fullName,
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
            bs:CompanyBs
        }
         //edit data update in api functionalities
        editNewMember(editId,editedMember)
        .then((data) => {
            if (data){
                infoData[index] = editedMember;
                setInfodata([...infoData,editedMember]);
                navigate("/");
            } else{
                console.log("Error");
            }
        });
    }
    return(
           //input of updating data
        <div className="bg-warning">
        <form 
           className="grid grid-rows-4 justify-center gap-4"
           >
        <input 
           type="text" 
           placeholder="Enter Name" 
           className="input input-bordered w-80" 
           value={fullName}
           onChange={(e) =>{setName(e.target.value)}}

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
           placeholder="Enter Address" 
           className="input input-bordered w-80" 
           value={Street}
           onChange={(e)=>setstreet(e.target.value)}
           />
          <input 
           type="text" 
           placeholder="Enter suite" 
           className="input input-bordered w-80" 
           value={Suite}
           onChange={(e)=>{setsuite(e.target.value),console.log(Suite)}}
           />
               <input 
           type="text" 
           placeholder="Enter city" 
           className="input input-bordered w-80" 
           value={City}
           onChange={(e)=>setcity(e.target.value)}
           />
               <input 
           type="text" 
           placeholder="Enter Zipcode" 
           className="input input-bordered w-80" 
           value={Zipcode}
           onChange={(e)=>setzipcode(e.target.value)} />
           
         <input 
           type="text" 
           placeholder="Enter phone number" 
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
           placeholder="Bs" 
           className="input input-bordered w-80"
           value={CompanyBs}
           onChange={(e)=>setCompanyBs(e.target.value)}
           />

           </form>
           <div className="grid justify-center p-2">
           <button className="btn bg-accent-content w-50 "onClick={updateMemberDetails}>Update</button>
           </div>
        </div>
    )
}