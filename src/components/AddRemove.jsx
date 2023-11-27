import { useGlobalContext } from "../hooks/useGlobalContext";



function AddRemove() {
  const {count, dispatch} = useGlobalContext()


  return (
    <div>
    <h2 className="title text-lg">{count}</h2>
    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" onClick={()=>dispatch({type:"ADD"})}>ADD</button>
    <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-5" onClick={()=>dispatch({type:"REMOVE"})}>REMOVE</button>
    </div>
  );
}

export default AddRemove;
