import Button from "../components/button";
import {ws_connect} from "../hooks/connect"

const Home = ()=>{


const{data, error} = ws_connect('wss://127.0.0.1:9636')

return (


    
<>
<h1 className="text-2xl">Test DA2</h1>
<br />

<Button text='conectar'/>
<Button text='desconectar'/>

<input type="text" value={data}></input>


</>);


}

export default Home