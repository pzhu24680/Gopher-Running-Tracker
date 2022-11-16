import React,{useState} from 'react';

const SortButton=({handleSort})=>{
    const[type,setType]=useState('')
    return(
        <div className='sortButtonWrapper'>
            <select className='selectSort' onChange={(e)=>setType(e.target.value)}>
                <option value={'date'}>Date</option>
                <option value={'miles'}>Miles</option>
            </select>
            <button className='sortButton' onClick={()=>handleSort(type)}>Sort</button>
        </div>

    )
}
export default SortButton