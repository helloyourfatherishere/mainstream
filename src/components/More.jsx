import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MoreOptions from "../components/MoreOptions";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

function Category (){
  var[v, setV]= useState(null);
  // var[g, setG]= useState(null);
  // var[name, setName]= useState(null);
  useEffect(()=>{
    var ver= async function(){
      try{
            let verify= await fetch("https://streamback.herokuapp.com/verify_user",{
                      method:"get",
                      mode:"cors",
                      credentials:"include"
            })
          //   let get_data= await fetch("https://streamback.herokuapp.com/user_data",{
          //     method:"post",
          //     mode:"cors",
          //     credentials:"include"
          // })

            // let verify= await fetch("/verify_user",{
            //     method:"get",
            //     credentials:"include"
            // })
          //   let get_data= await fetch("/user_data",{
          //     method:"post",
          //     credentials:"include"
          // })
            let ve= await verify.json();
            // let g= await get_data.json();
            let verified= ve.verify_user;
            // let get= g.data;
            // let n=get.name.split(" ")[0]
            setV(verified)
            // setG(get)
            // setName(n)
      }
      catch(e){
  
      }
    };
    ver();
  },[v])

  
    const classes = useStyles();
    const [state, setState] = useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <MoreOptions></MoreOptions>
        </List>
        
      </div>
    );
    if(v){
      return (
        <>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <AccountCircleIcon onClick={toggleDrawer(anchor, true)} style={{fontSize : '1.8rem',color:"#3466fc"}} id="more"></AccountCircleIcon>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </>
      );

    }
    else{
      return (
        <>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <AccountCircleIcon onClick={toggleDrawer(anchor, true)} style={{fontSize : '1.8rem',}} id="more"></AccountCircleIcon>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </>
      );

    }
    // return (
    //   <>
    //     {['right'].map((anchor) => (
    //       <React.Fragment key={anchor}>
    //         <AccountCircleIcon onClick={toggleDrawer(anchor, true)} style={{fontSize : '1.8rem',color:"red"}} id="more"></AccountCircleIcon>
    //         <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
    //           {list(anchor)}
    //         </Drawer>
    //       </React.Fragment>
    //     ))}
    //   </>
    // );
}
export default Category;