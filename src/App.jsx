import './App.css'
import img1 from './assets/Frame-1.png'
import img2 from './assets/Frame-2.png'
import img3 from './assets/Frame-3.png'
import img4 from './assets/Frame-4.png'
import img5 from './assets/Frame-5.png'
import img6 from './assets/Frame.png'
import img7 from './assets/Frame6.png'
import ToDoList from './components/ToDoList'
function App() {


  return (
    <div>
      <h1 className='text-6xl text-center -tracking-tighter mt-3 text-indigo-500'>ToDo List</h1>

<img src={img1} alt="" className='fixed top-10 right-56'/>
<img src={img2} alt="" className='fixed top-24 left-56'/>
<img src={img3} alt="" className='fixed top-52 right-80'/>
<img src={img4} alt="" className='fixed top-96 right-44'/>
<img src={img5} alt="" className='fixed bottom-80 left-20'/>
<img src={img6} alt="" className='fixed bottom-20 left-56'/>
<img src={img7} alt="" className='fixed bottom-20 right-56'/>


<div className='flex justify-center items-center mt-9'>
<ToDoList />
</div>
    </div>
  )
}

export default App
