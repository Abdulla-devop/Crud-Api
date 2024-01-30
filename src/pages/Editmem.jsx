import { useParams } from "react-router";
import { EditDetails } from "../edit";
import WorkSpace from "../worspace";

// edit page given inside workspace as children used params to update the selected id
export default function EditUser({infoData,setInfodata}){
    const {id} = useParams();
    return <WorkSpace>
        <EditDetails 
        infoData={infoData} 
        setInfodata={setInfodata}
        editId={id}/>
    </WorkSpace>
}