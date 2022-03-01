import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom"
import "../css/view.css"
import Cards from "./Cards.jsx"
import Nav from "./Nav.jsx"
import Heading from './Heading'
import Images from './Images'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Error from "./Error.jsx"
import "../css/cart.css";
import  img from "../images/icon.jpg"
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';


// var input_style={
//     width: '100%',
//     margin: 'auto, 5%',
//     marginTop:'10px',
//     height: 'auto'
// }

// var s={
//     fontSize: '15px'
// }
// var last;
// function hide(){
//     var user_div= document.querySelector("#userDetails")
//     user_div.style.display="none";
// }
// function det(){
//     var name= document.getElementById("name").value;
//     var email= document.getElementById("email").value;
//     var phone= document.getElementById("phone").value;
//     var whatsapp= document.getElementById("whatsapp").value;
//     var address= document.getElementById("address").value;

//     var verify_email
//     if(!email.includes("@")){
//         alert("Include Valid Email")
//         verify_email= false
//     }
//     else{
//             verify_email= true
//             if(name.length>5 && verify_email && phone.length>8 && address.length>10){

//                 var nameInfo= document.getElementById("nameInfo");
//                 var emailInfo= document.getElementById("emailInfo");
//                 var phoneInfo= document.getElementById("phoneInfo");
//                 var whatsappInfo= document.getElementById("whatsappInfo");
//                 var addressInfo= document.getElementById("addressInfo");

//                 nameInfo.value=name;
//                 emailInfo.value=email;
//                 phoneInfo.value=phone;
//                 whatsappInfo.value=whatsapp;
//                 addressInfo.value=address;
                
//                 var userDet= document.querySelector("#userDetails");
//                 var orderDet= document.querySelector("#orderDetails")
//                 userDet.style.display="none";
//                 orderDet.style.display="block";
//             }
//             else{
//                 alert("Include Valid Details")
//             }
//         }

    
// }
    
// function h(){
//         var orderDet= document.querySelector("#orderDetails");
//         orderDet.style.display="none";
//     }
// async function place(e){
//     try{
//     e.preventDefault()
//     let id= e.target[0].value
//     let img= e.target[1].value
//     let title= e.target[2].value
//     let price= e.target[3].value
//     let quantity= e.target[4].value
//     let colors= e.target[5].value
//     let sizes= e.target[6].value
//     let name= e.target[7].value
//     let email= e.target[8].value
//     let phone= e.target[9].value
//     let whatsapp= e.target[10].value
//     let address= e.target[11].value
//     let paymentMethod= e.target[12].value
//     let message= e.target[13].value

//     let orderDiv= document.getElementById("orderDetails");
//     orderDiv.style.display="none"
//     let o= await fetch("https://tmword.herokuapp.com/order/unregistered",{
//         method: 'post',
//         mode:"cors",
//         credentials:"include",
//         headers:{"Content-Type": "application/json"},
//         body:JSON.stringify({paymentMethod, id, price, img, title, quantity, colors, sizes, message, name, email, phone, whatsapp, address}) 

//     })
//     let r= await o.json();
//     console.log(r)
//     if(r){

//         var x = document.getElementById("snackbar");
//         x.className = "show";
//         x.textContent="Order Placed"
//         x.style.display="block"
//         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//     }
//     else{

//         var x = document.getElementById("snackbar");
//         x.className = "show";
//         x.textContent="Order Placed"
//         x.style.display="block"
//         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//     }
//     }
//     catch(err){
//     }
// }
const View = () => {
    var {id}= useParams();
    var [data, setData]= useState([]);
    var [more, setMore]= useState([]);
    var [image ,setImage]= useState([])
    var [video ,setVideo]= useState([])
    var [table ,setTable]= useState([])
    var [comments ,setComments]= useState([])
    var [d ,setD]= useState([])
    var [comm ,setComm]= useState("")
    var [find ,setFind]= useState(null)
    var [user ,setUser]= useState(null)
    
    // var cutPrice;
    // var mainPrice;
    // var rate;
    // var name;
    // var email;
    // var phone;
    // var whatsapp;
    // var address;

    // var a;

 var sub = async function(){
        try{
            let com= document.getElementById("comment")
            let comment= com.value
            let d= await fetch(`https://streamback.herokuapp.com/comment/${id}`,{
                method: 'post',
                headers:{"Content-Type": "application/json"},
                mode:"cors",
                credentials:"include",
                body:JSON.stringify({comment: com.value}) 

            })
            
            // let d= await fetch(`/comment/${id}`,{
            //     method: 'post',
            //     headers:{"Content-Type": "application/json"},
            //     mode:"cors",
            //     credentials:"include",
            //     body:JSON.stringify({comment: com.value}) 

            // })
            let r= await d.json();
            if(r){
                com.value=""
                setComm(comment)
            }
            else{
                com.value=""
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.textContent="login first"
                x.style.display="block"
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

            }
        }
        catch(e){
    }
} 
    useEffect(()=>{
        let isMounted = true; 
        var findData= async function(){
            try{
                let data= await fetch(`https://streamback.herokuapp.com/view/${id}`,{
                    method:"post",
                    mode:"cors",
                    credentials:"include",
                    headers:{"Content-Type":"application/json"},
                    body:""
                });
                let u= await fetch(`https://streamback.herokuapp.com/verify_user`,{
                    method:"get",
                    mode:"cors",
                    credentials:"include",
                });
                // let data= await fetch(`/view/${id}`,{
                //     method:"post",
                //     credentials:"include",
                //     headers:{"Content-Type":"application/json"},
                //     body:""
                // });
                // let u= await fetch(`/verify_user`,{
                //     method:"get",
                // });
                // let data= await fetch(`/view/${id}`);
                let res= await data.json();
                let user= await u.json();
                console.log(user)
                setUser(user.verify_user)
                setFind(res)
                if(isMounted){
                     if(res.find){
                            setData(res.data)
                            // setImages(res.data.images)
                            setMore(res.more)
                            setD([res.data])
                            setImage(res.data.main_img.link)
                            setVideo(res.data.main_video.link)
                            setComments(res.data.comments)
                            var t= res.data.table.split(";")
                            
                            setTable(t);
                        }

                }

             return()=>{isMounted=false}

            }
            catch(e){
            }
        };
        findData();
        
    }, [comm]);
     
    if(find && user){
        return (
            <>
            <Nav></Nav>
            <div className="view_main">
            <div class="responsive-container">
                        <iframe src={video} frameborder="0" scrolling="no" seamless="" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="fullscreen"></iframe>
                        <div style={{"width": "80px", "height": "80px", "position": "absolute", "backgroundColor": "black", "right": "0px", "top": "0px", "display": "flex", "alignItems": "center", "justifycontent": "center",}}>
                             <img src={img} alt="avc" style={{"width": "100%", "height": "100%",}} />
                        </div>
            
                    </div>
                    {/* HEADING IMAGES */}
                    
                    <Heading data={data}></Heading>

                    {/* <div className="view_img">
                        <div className="main_view">
                            <div className="view_imgs">
                                <div className="container">
                                    <Images data={images}></Images>
                                </div>
                                <Heading data={data}></Heading>
                            </div>
                        </div>
                    </div> */}
                    

                    
                    

  
                    {/* DESCRIPTIONS AND NOTICE */}
                    <div className="view_des">
    
                        <div className="view_description">
    
                            <div className="descript">
                                <p><b style={{color:"grey", fontSize:"1.5rem"}}>Description:</b> {data.des}</p>
                            </div>
                            <br />
    
    
                        </div>
    
                            {/* TABLE */}
                        <div className="view_table">
    
                            <table border="1" className="table">
                                <tbody>
                                    {table.map((val, i)=>{
                                        var v= val.split(":")
                                        if(v[0].length>1){
                                            return(
                                                <tr>
                                                    <td>{v[0]}</td>
                                                    <td>{v[1]}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
    
                        </div>
                    </div>
                    
                    {/* MORE CARDS */}
                    <div className="view_more">
    
                        <div className="view_more_head">
                                <p>Suggested For You:</p>
                        </div>
    
                        <div className="view_more_card">
                            {more.map((val, i)=>{
                                return(
                                    <>
                                    <Cards data={val} cl={"cards"}></Cards>
                                    </>
                                )
                            })}
                        </div>
    
                    </div>
                    
                    {/* COMMENT INPUT */}
                    <div className="comment_div">
                            <form action={`/comment/${id}`} method="post" id="view_form" onSubmit={(e)=>{e.preventDefault()}}>
                                <div className="view_textarea">
                                <textarea type="text" name="comment" required={true} placeholder="comment here..." id="comment" style={{"resize": "none"}}></textarea>
                                </div>
                                <div className="view_btn">
                                <button type="submit" onClick={sub}>Comment</button>
                                </div>
                            </form>
                    </div>
                
                {/* COMMENTS */}
                <div className="comments_div">
                        <div className="comm_head">
                            <p>Comments:</p>
                        </div>
                            
                        <div className="comm_div">
                            {comments.map((val, i)=>{
                                        return(
                                            <>
                                            <fieldset className="fieldset">
                                                <legend className="legend"><CheckCircleOutlineIcon className="check" style={{'fontSize': '10px'}}/>verified</legend>
                                                <div className="comms">
                                                <p className="com"><b style={{'textTransform': 'capitalize'}}>{val.name}: </b>{val.comment}</p>
                                                </div>
                                            </fieldset>
                                            </>
                                        )
                                    })}
                        </div>
                </div>
                 <div id="snackbar"></div>         
    
            </div>
            </>
        )
    }
    else{
        return(
            <>
        <Error message="you must have an account to watch the video or the video may be temporarily unavailable.. plz contact us" valid={true}></Error>
        </>
        )
    }
    
}
    

 export default View