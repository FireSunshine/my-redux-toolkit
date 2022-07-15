import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// 引入相关的hooks
import {useSelector, useDispatch} from 'react-redux';
// 引入对应的方法
import {increment, decrement} from './store/festures/counterSlice';
import {getMovieData} from './store/festures/movieSlice';


function App() {
  // 通过useSelector直接拿到store中定义的value
  const {value} = useSelector((store)=>store.counter)
  // 通过useSelector直接拿到store中定义的list
  const {list} = useSelector((store)=>store.movie)
  // 通过useDispatch 派发事件
  const dispatch = useDispatch()
  // 变量
  const [amount, setAmount] = useState(1);
  console.log(list);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{value}</p>
        <input value={amount} onChange={(e) => setAmount(+e.target.value)}/> <br />
        <button onClick={()=>{dispatch(increment({value: amount}))}}>加</button>
        <button onClick={()=>{dispatch(decrement())}}>减</button> <br />
        <button onClick={()=>{dispatch(getMovieData())}}>获取数据</button>
        <ul>
          {
            list.map(item=><li key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App
