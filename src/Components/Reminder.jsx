import React, { useState } from 'react'
import './Reminder.css'


function Reminder() {

 const [reminder, setReminder] = useState([]);
 const [newReminder, setNewReminder] = useState('');


const handleInputChange= (e)=>{
setNewReminder(e.target.value)
}

const handleAddReminder= () =>{
 
    if(newReminder.trim()){
        setReminder([...reminder,newReminder])
        setNewReminder('')
    }
}

const handleDelete= (index)=>{
setReminder(reminder.filter((item, itemindex) => itemindex != index))
}

  return (
  
    <div className='container'>
        <h1>Reminder App</h1>

   <div className='input-container'>
     <input type="text" 
     value={newReminder}
     placeholder='Enter a reminder'
     onChange={handleInputChange} 
      />

     <button className='add-btn' onClick={handleAddReminder}>Add Reminder</button>
      </div> 

{
     reminder.length >0?
    <ul className='reminder-item'> 
{
    reminder.map((reminder,index)=>(

        <li key={index}>
            {reminder}
          <button className='del-btn' onClick={()=>handleDelete(index)} >Delete</button>
        </li>
      
    ))
}
</ul> :
<p>No Reminders added</p>
}


    </div> 
    
  )
}

export default Reminder