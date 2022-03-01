import React from 'react'
import {useHistory} from "react-router-dom"
import "../css/more.css"
import SnackBar from './SnackBar';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';
const MoreOptions = () => {
    var history= useHistory();
    var logout = async function(){
        try{
            let data= await fetch("https://streamback.herokuapp.com/logout",{
                method:"get",
                mode:"cors",
                credentials:"include"
            });
            // let data= await fetch("/logout",{
            //     method:"get",
            //     credentials:"include"
            // });
            // let data= await fetch("/logout");
            let res= await data.json();
            if(!res){
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.textContent="login first"
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }
            else{
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.textContent="logged out"
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                window.location.reload();
            }
        }
        catch(e){
        }
    };
    return (
        <>
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" className="close_btn" id="close_btn" onclick="closeNav()">&times;</a>
            <ul class="nav_ul">
                <a href="/login" className="more_links"><li> Login</li></a>
                <a href="/forgot/pass" className="more_links"><li> Change Password</li></a>
                <a href="/forgot/security_code" className="more_links"><li> Change Security Key</li></a>
                <a href="/f/contact" className="more_links"><li> Contact</li></a>
                <a href="/f/feedback" className="more_links"><li> Feedback</li></a>
                <a onClick={()=>{logout()}} className="more_links"><li> Logout</li></a>
            </ul>
      </div>
        
        </>
    )
}

export default MoreOptions;
