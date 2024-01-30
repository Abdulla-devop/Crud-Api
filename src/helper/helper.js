import { API } from "./API";

export async function getAllMember(){
    const res = await fetch(API,{
        method:"GET",
    });
    const data = await res.json();
   return data;
}

export async function addNewMemberDetails(newMem){
    const res = await fetch (`${API}`,{
        method:"POST",
        body:JSON.stringify(newMem),
        headers:{
            "Content-type":"application/json",
        },
    });
    const data = await res.json();
    return data;
}
export async function editNewMember(id,editMem){
    console.log(API)
    const res = await fetch (`${API}/${id}`,{
        method:"PUT",
        body:JSON.stringify(editMem),
        headers:{
            "Content-type":"application/json",
        },
    });
    const data = await res.json ();
    return data;
}

export async function deleteMember(id){
    const res = await fetch (`${API}/${id}`,{
        method:"DELETE",
        header:{
            "Content-type":"application/json",
        },
    });
    const data = await res.json();
    return data;
}