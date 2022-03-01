import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

var s={
    fontSize: '15px'
}

function p_tr(str,n){
    return str?.length>n ? str.substr(0,n - 1)+ "...": str;
}

const Cards = ({data,cl}) => {
    if (data.main_video || data.main_img !== undefined||null){
        return (
            <>
                <a href={`/view/${data._id}`} className="link">
                        <div className={cl}>
                            <div className="img_div">
                            <img src={data.main_img.link} alt="images" />
                            </div>
                        
                            <div className="title">
                            <p className="t">{p_tr(data.title,20)}</p>
                            <p><span style={{color:"grey"}}>Category: </span>{data.category}</p>
                            <p><span style={{color:"grey"}}>Language: </span>{data.language}</p>
                            </div>

                            
                            

                        </div>
                        </a>
            </>
        )
    //DISCOUNT
    // if(data.discount){
    //     if(data.brand){
    //         return (
    //             <>
    //                 <a href={`/view/${data._id}`} className="link">
    //                         <div class="cards">
    //                             <div className="img_div">
    //                             <img src={data.main_img.link} alt="images" />
    //                             </div>
                            
    //                             <div className="title">
    //                             <p>{data.title}</p>
    //                             </div>

    //                             <div className="title">
    //                             <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.cut_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
    //                             </div>
                                
    //                             <div className="brand_div">
    //                             <p>{data.brand_name}</p>
    //                             </div>

    //                             <div className="ex">
    //                         <p><StarIcon style={s}/><StarIcon style={s}/>DISCOUNT<StarIcon style={s}/><StarIcon style={s}/></p>
    //                             </div>
        
    //                         </div>
    //                         </a>
    //             </>
    //         )
    //     }
    //     else{
    //         return (
    //             <>
    //                 <a href={`/view/${data._id}`} className="link">
    //                         <div class="cards">
    //                             <div className="img_div">
    //                             <img src={data.main_img.link} alt="images" />
    //                             </div>
                            
    //                             <div className="title">
    //                             <p>{data.title}</p>
    //                             </div>
                                
    //                             <div className="title">
    //                             <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.cut_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
    //                             </div>

    //                             <div className="ex">
    //                             <p><StarIcon style={s}/><StarIcon style={s}/>DISCOUNT<StarIcon style={s}/><StarIcon style={s}/></p>
    //                             </div>
        
    //                         </div>
    //                         </a>
    //             </>
    //         )

    //     }
    // }

    // //SALE
    // else if(data.sell){

    //     if(data.brand){
    //         return (
    //             <>
    //                 <a href={`/view/${data._id}`} className="link">
    //                         <div class="cards">
    //                             <div className="img_div">
    //                             <img src={data.main_img.link} alt="images" />
    //                             </div>
                            
    //                             <div className="title">
    //                             <p>{data.title}</p>
    //                             </div>
                                
    //                             <div className="title">
    //                             <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.sell_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
    //                             </div>

    //                             <div className="brand_div">
    //                             <p>{data.brand_name}</p>
    //                             </div>
                                
    //                             <div className="ex">
    //                             <p><StarHalfIcon style={s}/><StarHalfIcon style={s}/>SALE<StarHalfIcon style={s}/><StarHalfIcon style={s}/></p>
    //                             </div>
        
    //                         </div>
    //                         </a>
    //             </>
    //         )
    //     }
    //     else{
    //         return (
    //             <>
    //                 <a href={`/view/${data._id}`} className="link">
    //                         <div class="cards">
    //                             <div className="img_div">
    //                             <img src={data.main_img.link} alt="images" />
    //                             </div>
                            
    //                             <div className="title">
    //                             <p>{data.title}</p>
    //                             </div>
                                
    //                             <div className="title">
    //                             <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.sell_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
    //                             </div>

    //                             <div className="ex">
    //                             <p><StarHalfIcon style={s}/><StarHalfIcon style={s}/>SALE<StarHalfIcon style={s}/><StarHalfIcon style={s}/></p>
    //                             </div>
        
    //                         </div>
    //                         </a>
    //             </>
    //         )
    //     }
    // }

    // //NORMAL
    // else{
    //     if(data.brand){
    //         return (
    //             <>
    //                 <a href={`/view/${data._id}`} className="link">
    //                         <div class="cards">
    //                             <div className="img_div">
    //                             <img src={data.main_img.link} alt="images" />
    //                             </div>
                            
    //                             <div className="title">
    //                             <p>{data.title}</p>
    //                             </div>
                                
    //                             <div className="title">
    //                             <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.price}</p>
    //                             </div>

    //                             <div className="brand_div">
    //                             <p>{data.brand_name}</p>
    //                             </div>
    //                         </div>
    //                         </a>
    //             </>
    //         )

    //     }
    //     else{
    //         return (
    //         <>
    //             <a href={`/view/${data._id}`} className="link">
    //                     <div class="cards">
    //                         <div className="img_div">
    //                         <img src={data.main_img.link} alt="images" />
    //                         </div>
                        
    //                         <div className="title">
    //                         <p>{data.title}</p>
    //                         </div>

                            
    //                         <div className="title">
    //                             <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.price}</p>
    //                             </div>

    //                     </div>
    //                     </a>
    //         </>
    //     )

    //     }

    
    // }
    // }
    // else{
        
    //     return("")
    // }
    // return (
    //     <>
    //         <a href={`/view/${data._id}`} className="link">
    //                 <div class="cards">
    //                     <div className="img_div">
    //                     <img src={data.main_img.link} alt="images" />
    //                     </div>
                    
    //                     <div className="title">
    //                     <p>{data.title}</p>
    //                     </div>

    //                 </div>
    //                 </a>
    //     </>
    // )
}
}
export default Cards
