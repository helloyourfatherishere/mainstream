import  {useState,useEffect} from "react";
import "../css/card.css";
import "../css/poster.css"
import Nav from "./Nav"
import Cards from "../components/Cards.jsx"
const Index= function(){
    var [hollywood, setHollywood]= useState([]);
    var [bollywood, setBollywood]= useState([]);
    var [tamil, setTamil]= useState([]);
    var [poster, setPoster]= useState([]);
    var p= function(){
        var slideIndex = 0;
        showSlides();

        function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}
    }
    function tr(str,n){
        return str?.length>n ? str.substr(0,n - 1)+ "...": str;
    }
    useEffect(()=>{
        var f= async function(){
            try{
                var res= await fetch("https://streamback.herokuapp.com/api",{
                    method:"post",
                    mode:"cors",
                    credentials:"include",
                    headers:{"Content-Type":"application/json"},
                    body:""
                })

                // var res= await fetch("/api",{
                //     method:"post",
                //     credentials:"include",
                //     headers:{"Content-Type":"application/json"},
                //     body:""
                // })
                // var res= await fetch("/api")
                // var a = await res.text()
                var a= await res.json();
                console.log(a[4])
                // var a= await res.json();
                // var a= JSON.parse(res); 
                setHollywood(a[0])
                setBollywood(a[1])
                setTamil(a[2])
                setPoster(a[4])
                p();
            }catch(e){
                document.write(e)
            }
        };f();
            
    }, [])
    return(
        <div className="main">
        <> 
        <Nav key="1"></Nav>
        <div className="slideshow-container">
    {poster.map((val,i)=>{
        return(
            <div className="mySlides fade">
            <img src={val.main_img.link} className="poster_img" alt="poster"/>
            <div className="p_more">
            <h1 className="p_p">{val.title}</h1>
            <p className="p_d">{tr(val.des,150)}</p>
            <a href={`/view/${val._id}`}><button className="p_btn">Watch Now</button></a>
            </div>
            </div>
        )
    })}
        </div>
        
<br/>
        <div className="card_div">
        <div className="parent_card">
            <div className="heading">
                <h1 className="heading_h1">Hollywood:</h1>
            </div>
            <div className="card">
            {hollywood.map((val,i)=>{
                    return(
                        <>
                            <Cards key={i} data={val} cl={"cards"}/>
                        </>
                    )
                })}
                </div>
                <div className="more">
                    <a href="/category/hollywood">more..</a>
                </div>
                
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Bollywood:</h1>
            </div>
            <div className="card">
            {bollywood.map((val,i)=>{
                    return(
                    <>
                    <Cards key={i} data={val} cl={"cards"}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/bollywood">more..</a>
                </div>
                 
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Tamil:</h1>
            </div>
            <div className="card">
            {tamil.map((val,i)=>{
                    return(
                    <>
                    <Cards key={i} data={val} cl={"cards"}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/tamil">more..</a>
                </div>
                 
        </div>

        {/* <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Jackets:</h1>
            </div>
            <div className="card">
            {jackets.map((val,i)=>{
                    return(
                    <>
                    <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/jackets">more..</a>
                </div>
                 
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Hoodies:</h1>
            </div>
            <div className="card">
            {hoodies.map((val,i)=>{
                    return(
                    <>
                      <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/hoodie">more..</a>
                </div>
                 
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Trousers:</h1>
            </div>
            <div className="card">
            {trouser.map((val,i)=>{
                    return(
                    <>
                    <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/trouser">more..</a>
                </div>
                 
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Shalwar kameez:</h1>
            </div>
            <div className="card">
            {shalwarKameez.map((val,i)=>{
                    return(
                    <>
                   <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/shalwar-kameez">more..</a>
                </div>
                 
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Ladies Kurti:</h1>
            </div>
            <div className="card">
            {kurti.map((val,i)=>{
                    return(
                    <>
                   <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/kurti">more..</a>
                </div>
                 
        </div>

        <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Collections:</h1>
            </div>
            <div className="card">
            {collections.map((val,i)=>{
                    return(
                    <>
                   <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/collection">more..</a>
                </div>
                 
        </div> */}

        {/* <div className="parent_card">
            <div className="heading">
            <h1 className="heading_h1">Undergarmens:</h1>
            </div>
            <div className="card">
            {undergarments.map((val,i)=>{
                    return(
                    <>
                   <Cards key={i} data={val}/>
                    </>)
                })}
                </div>
                <div className="more">
                <a href="/category/undergarment">more..</a>
                </div>
                 
        </div> */}

     </div>
     
     <div id="snackbar">logged out</div>
        </>
        </div>
    )
};
export default Index;