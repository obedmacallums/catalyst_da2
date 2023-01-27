import Button from "../components/button";
import {ws_connect} from "../hooks/connect"

const Home = ()=>{


const{data, error} = ws_connect('ws://127.0.0.1:9635')

return (


    
<>
<h1 className="text-2xl">Test DA2</h1>
<br />

<Button text='conectar'/>
<Button text='desconectar'/>

<div type="text"></div>


</>);


}

export default Home