import { useState } from "react"

export default function ToDoList() {

  const [tasks , setTasks] = useState([]);
  const [newTask , setNewTask ] = useState();


const addTask = () => {

if (newTask.trim() !== '') {
setTasks([...tasks , newTask ]);
setNewTask('')
}
}



  return (
    <div >

<h2 className="mt-10 mb-5 text-clip tracking-wider text-2xl text-indigo-500">Write What You Want To Do :</h2>

<input type="text" 
value={newTask}
onInput={(e) => setNewTask(e.target.value)}
className="bg-indigo-200 w-96 h-14 text-xl p-5" 
/>

<button onClick={addTask} className="bg-indigo-500 p-3 ml-5">
  Add
</button>

<ul>
 
    {tasks.map((task , index) => 
<li key={index}>
<p>{task}</p>
<button>Delete</button>
</li>
    )}

</ul>


</div>

  )
}
