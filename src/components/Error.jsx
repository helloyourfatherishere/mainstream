import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Nav from './Nav';
import "../css/error.css"
const Error = ({message, valid,path,title}) => {
    var [v, setV]= useState(false)
    useEffect(()=>{
        setV(valid)
    })
    if(!v){
        
        return(
            <p>LOADING...</p>
        )
    }
    else{
        return (
            <>
            
            <Nav key="1"></Nav>
                <div className="main">
                    <div className="err_div">
                        <div className="message_err_div">
                            <p align="center">{message}</p>
                        </div>
    
                        <div className="btn_err_div">
                                <NavLink exact to={path}>{title}</NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}

export default Error
