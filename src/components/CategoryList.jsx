import React,{useState, useEffect} from 'react'
import "../css/category.css"
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const CategoryList = () => {
  let [category, setCategory]= useState([]);
  let [brand, setBrand]= useState([]);
  useEffect(()=>{
    var findMain= async function(){
      try{
        let data= await fetch("https://streamback.herokuapp.com/main",{
          method: "post",
          mode:"cors",
          credentials:"include",
          headers:{"Content-Type":"application/json"},
          body:""
        });


        // let data= await fetch("/main",{
        //   method: "post",
        //   credentials:"include",
        //   headers:{"Content-Type":"application/json"},
        //   body:""
        // });

        let res= await data.json();
        setCategory(res.main_data.cate[0].split(','))
      }
      catch(e){
      }
    };
    findMain();
  },[])
    return (
        <>
        
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0);" class="close_btn" id="close_btn" onclick="closeNav()">&times;</a>
            <ul class="nav_ul">
                {category.map((val, i)=>{
                    return(
                      <a href={`/category/${val}`} className="category_options"><li>{val}</li></a>
                    )
                 })}

               
            </ul>
      </div>
        </>
    )
}

export default CategoryList
