import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../images/platzi.png'
import video from '../video/que-es-core.mp4'
function App() {
    const [LoaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
    }
    return (
        <div>
            que linda aplicacion hecha en react.js
            <video src={video} width={360} controls poster={logo} ></video>
            <p>
                <img src={logo} alt="" width={40} />
            </p>
            <ul>
                {
                    LoaderList.map(item => <Loader {...item} key={item.id} />)
                }
            </ul>
            <button onClick={handleClick} >Mostrar lo aprendido hasta el momento</button>
            
        </div>
    )
}
export default App