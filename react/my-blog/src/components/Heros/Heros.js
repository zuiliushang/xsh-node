import React,{Component} from 'react';



class Heros extends React.Component {
    constructor (props){
        super(props);
    }
    render(){
        const HEROS = this.props.HEROS;
        console.log(HEROS);
        const lis =  HEROS.map((v,k)=>
            <li key={k.toString()}>
                {v.name} : {v.age}
            </li>
        );
        return (
            <ul>
                {lis}
            </ul>
        );
    }
}
export default Heros;

