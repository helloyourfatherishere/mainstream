import React, {useState, useEffect} from 'react'
import "../css/subnav.css"
const SubNav = () => {
    let [data, setData]= useState([]);
    let [cate, setCate]= useState([]);
    useEffect(()=>{
        let find = async function(){
            try{
                let data= await fetch("https://tmword.herokuapp.com/main",{
                    method:'post',
                    headers:{"Content-Type": "application/json"},
                    body: ""
                });
                let res= await data.json()
                let c= res.main_data.cate[0].split(",")
                setData(res.main_data)
                setCate(c)
            }
            catch(e){
            }
        };
        find();
    }, [])
    return (
        <>
            <div className="items">
               {cate.map((val, i)=>{
                   return(
                       <>
                       <div className="item">
                           <a href={`/category/${val}`}>{val}</a>
                       </div>
                       </>
                   )
               })}
            </div>
            
            <div className="cate_pc">
                <p>Categories:</p>
            <div className="vertical_items">
            {cate.map((val, i)=>{
                   return(
                       <>
                       <div className="vertical_item">
                           <a href={`/category/${val}`}>{val}</a>
                       </div>
                       </>
                   )
               })}
               
            </div>
            </div>
        </>
    )
}

export default SubNav
