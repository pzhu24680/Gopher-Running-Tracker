import React,{useState} from 'react';

const SortButton=({handleSort})=>{
    const[type,setType]=useState('')
    return(
        <div>
        <select onChange={(e)=>setType(e.target.value)}>
            <option value={'date'}>Date</option>
            <option value={'miles'}>Miles</option>
        </select>
        <button onClick={()=>handleSort(type)}>Sort</button>
        </div>

    )
}
export default SortButton