import { useNavigate } from "react-router"
import { deleteMember } from "./helper/helper";
import { useState } from "react";

export function MainPage({infoData,setInfodata}){
    const navigate = useNavigate();
    const [editId,setEditId] = useState("");

    // handling edit navigating to edit page
    const handleEdit = (id) => {  
      navigate(`/edit/${id}`)
  };

   //deleting functionalities

const deleteMemberDetails = (id) => {
  deleteMember(id).then((data) => {
    if (data){
    const remainingMembers = infoData.filter((MemInfo) => MemInfo.id != id);
    setInfodata([...remainingMembers]);
  }else {
      console.log("Error deleting data")
  }
  })  
};
    // functionalities of card details and main page 
    return( 
        <div className="grid">
           <div className="grid justify-end p-2">
          <button className="btn btn-primary next" onClick={() => navigate("/addpg")}>Add New Member</button>
         </div>
         <div className="grid grid-rows-4 grid-cols-3 gap-4">
          {infoData && (
            <>
       {infoData?.map((MemInfo,idx) =>(
           <div 
           key={idx}  
           className=" change card w-96 bg-neutral text-primary-content p-2 m-4">
           <div className="card-body">
             <h2 className="card-title">Name: {MemInfo.name}</h2>
             <p>Username: {MemInfo.username}</p>
             <p>Email: {MemInfo.email}</p>
             <p>Street: {MemInfo.street}</p> 
             <p>Suite: {MemInfo.suite}</p> 
             <p>City: {MemInfo.city}</p> 
             <p>Zipcode: {MemInfo.zipcode}</p> 
             <p>Phone: {MemInfo.phone}</p>
             <p>Website: {MemInfo.website}</p>
             <p>Company: {MemInfo.company}</p>
             <p>CatchPhrase: {MemInfo.catchPhrase}</p>
             <p>Bs: {MemInfo.bs}</p>
             <div className="card-actions justify-end">
             </div>
           </div>
           {/* edit & delete buttons */}
           <div className="flex">
           <button className="btn btn-primary w-20" onClick={() => handleEdit(MemInfo.id)}>Edit</button>
           <button className="btn btn-secondary w-20"onClick={()=>deleteMemberDetails(MemInfo.id)}>Delete</button>
           </div>
         </div>
         
       ))}
            </>  
          )}  
          </div>
      </div>
    )
}