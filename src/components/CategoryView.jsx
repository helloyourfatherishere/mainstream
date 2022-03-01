import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import "../css/card.css";
import "../css/searchPage.css";
//IMPORTED MODULES
import Cards from "./Cards.jsx"
import Nav from "./Nav.jsx"
import SubNav from "./SubNav.jsx"
const CategoryView = () => {
    var [value, setValue]= useState("");
    var [data, setData]= useState([]);
    var {cate}= useParams();
    useEffect(() => {  
        setValue(cate)
            var findCate= async function(){
                try{
                    var res= await fetch(`https://streamback.herokuapp.com/cate/${cate}`,{
                        method:"post",
                        mode:"cors",
                        credentials:"include",
                        headers:{"Content-Type":"application/json"}
                    });
                    
                    // var res= await fetch(`/cate/${cate}`,{
                    //     method:"post",
                    //     mode:"cors",
                    //     credentials:"include",
                    //     headers:{"Content-Type":"application/json"}
                    // });
                    var data= await res.json();
                    setData(data)
                }
                catch{
    
                }
            };
            findCate();
    }, [cate])
    return (
        <div className="main_search">
        <>
        <Nav></Nav>
        <SubNav></SubNav>
        <div className="info">
        <p><span class="first_letter">f</span>ound <span class="first_letter">r</span>esults <span class="first_letter">f</span>or: <span class="search_value">{value}</span></p>
            </div>
            <div className="card_div">
                 <div className="card_search">
                 {data.map((val,i)=>{
                        return(
                            <Cards key={i} data={val} cl={"cards_search"}/>
                        )
                    })}
                    </div>
                    
            </div>
        </>
        </div>
    )
}

export default CategoryView
