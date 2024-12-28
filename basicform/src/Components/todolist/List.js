import { ItemsContext, EditingIDContext } from "./todoHelper";
import { useContext ,useDeferredValue , Suspense , useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createPortal } from 'react-dom';
import "./todolist.scss";
export default function List(){
    const {  items } = useContext(ItemsContext);
    const deferredValue = useDeferredValue(items);
    return (
       <Suspense fallback = { <p>Loding todo....</p>}>
         {
            deferredValue.map((obj)=>{
                return <ListItem id={obj.id} object={obj} key={obj.id}></ListItem>
            })
         }
       </Suspense>
    );
}
function ListItem({object}){
    const [ edetingId , setEditingId] = useState("");
    const [showModel , setShowModel] = useState(false);
    let obj = {
        edetingId , 
        setEditingId,
        showModel,
        setShowModel,
    }
    return (
    <div className = "listItem">
     <p>{object.value}</p>
     <DeleteButton object={object}/>
    <ErrorBoundary fallback={ <p>Something wrong</p>}>
    <EditingIDContext.Provider value={obj}>
          <EditButton item = { object }></EditButton>
          { showModel && createPortal(<Popup />, document.getElementsByClassName("popupHolder")[0])}
     </EditingIDContext.Provider>
    </ErrorBoundary>
    </div>
    );
}
function DeleteButton({object}){
    const { dispatch }  = useContext(ItemsContext);
    function handleDelete(){
        dispatch({
            type: "Deleted",
            id: object.id,
        });
    }
    return (
        <button onClick = {handleDelete}>Delete</button>
    );
}
function EditButton({item}){
    const { setEditingId, setShowModel } = useContext(EditingIDContext)
    function handleEditButton(){
     setEditingId(item);
     setShowModel(true);
    }
    return (
        <button onClick = {handleEditButton}>Edit</button>
    );
}

function Popup(){
    const {  edetingId , setEditingId, setShowModel } = useContext(EditingIDContext);
    const [inputF, setInputF] = useState(edetingId.value);    
    const {  dispatch } = useContext(ItemsContext)
    function handleEdit(){
      dispatch({
        type: "Edited",
        id: edetingId.id,
        value: inputF
      });
      setShowModel(false);
      setEditingId(null);
    }

    return (
        <div className = "popUp">
            <p>Please Save after editing to reflect the changes..</p>
            <input value={inputF} onChange = { (e)=>setInputF(e.target.value)}></input>
            <button onClick= { handleEdit }>Save</button>
        </div>
    );
}