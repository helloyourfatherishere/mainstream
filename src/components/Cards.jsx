import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

var s={
    fontSize: '15px'
}
const Cards = ({data}) => {

    if(data.images.length>0){
        
    //DISCOUNT
    if(data.discount){
        if(data.brand){
            return (
                <>
                    <a href={`/view/${data._id}`} className="link">
                            <div class="cards">
                                <div className="img_div">
                                <img src={data.main_img.link} alt="images" />
                                </div>
                            
                                <div className="title">
                                <p>{data.title}</p>
                                </div>

                                <div className="title">
                                <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.cut_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
                                </div>
                                
                                <div className="brand_div">
                                <p>{data.brand_name}</p>
                                </div>

                                <div className="ex">
                            <p><StarIcon style={s}/><StarIcon style={s}/>DISCOUNT<StarIcon style={s}/><StarIcon style={s}/></p>
                                </div>
        
                            </div>
                            </a>
                </>
            )
        }
        else{
            return (
                <>
                    <a href={`/view/${data._id}`} className="link">
                            <div class="cards">
                                <div className="img_div">
                                <img src={data.main_img.link} alt="images" />
                                </div>
                            
                                <div className="title">
                                <p>{data.title}</p>
                                </div>
                                
                                <div className="title">
                                <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.cut_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
                                </div>

                                <div className="ex">
                                <p><StarIcon style={s}/><StarIcon style={s}/>DISCOUNT<StarIcon style={s}/><StarIcon style={s}/></p>
                                </div>
        
                            </div>
                            </a>
                </>
            )

        }
    }

    //SALE
    else if(data.sell){

        if(data.brand){
            return (
                <>
                    <a href={`/view/${data._id}`} className="link">
                            <div class="cards">
                                <div className="img_div">
                                <img src={data.main_img.link} alt="images" />
                                </div>
                            
                                <div className="title">
                                <p>{data.title}</p>
                                </div>
                                
                                <div className="title">
                                <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.sell_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
                                </div>

                                <div className="brand_div">
                                <p>{data.brand_name}</p>
                                </div>
                                
                                <div className="ex">
                                <p><StarHalfIcon style={s}/><StarHalfIcon style={s}/>SALE<StarHalfIcon style={s}/><StarHalfIcon style={s}/></p>
                                </div>
        
                            </div>
                            </a>
                </>
            )
        }
        else{
            return (
                <>
                    <a href={`/view/${data._id}`} className="link">
                            <div class="cards">
                                <div className="img_div">
                                <img src={data.main_img.link} alt="images" />
                                </div>
                            
                                <div className="title">
                                <p>{data.title}</p>
                                </div>
                                
                                <div className="title">
                                <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.sell_price} <del style={{color:'darkgray',fontSize:'17px'}}>{data.price}</del></p>
                                </div>

                                <div className="ex">
                                <p><StarHalfIcon style={s}/><StarHalfIcon style={s}/>SALE<StarHalfIcon style={s}/><StarHalfIcon style={s}/></p>
                                </div>
        
                            </div>
                            </a>
                </>
            )
        }
    }

    //NORMAL
    else{
        if(data.brand){
            return (
                <>
                    <a href={`/view/${data._id}`} className="link">
                            <div class="cards">
                                <div className="img_div">
                                <img src={data.main_img.link} alt="images" />
                                </div>
                            
                                <div className="title">
                                <p>{data.title}</p>
                                </div>
                                
                                <div className="title">
                                <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.price}</p>
                                </div>

                                <div className="brand_div">
                                <p>{data.brand_name}</p>
                                </div>
                            </div>
                            </a>
                </>
            )

        }
        else{
            return (
            <>
                <a href={`/view/${data._id}`} className="link">
                        <div class="cards">
                            <div className="img_div">
                            <img src={data.main_img.link} alt="images" />
                            </div>
                        
                            <div className="title">
                            <p>{data.title}</p>
                            </div>

                            
                            <div className="title">
                                <p style={{fontSize:'18px',fontWeight:"bold"}}>Rs. {data.price}</p>
                                </div>

                        </div>
                        </a>
            </>
        )

        }

    }
    }
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

export default Cards
