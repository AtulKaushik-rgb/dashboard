import React from "react";
import GrowLogo from './logo/GrowwLogo.svg';
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
  },
  container: {
    width: "100%",
    height: "20vh",
    maxWidth: "1200px",
    margin:'0 auto',
    marginTop:'20px',
    paddingBotton:'0'
  },
  input:{
    border:'1px solid #ecedef',
    background:'none',
    position:'relative',
    padding:'5px',
    width:'450px',
    height:'41px',
    fontSize:'17px',
    borderRadius:'5px',
    boxShadow: "0 1px 5px 0 rgb(0,0,0,0.1)",
  },
  iconClass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg":{
      marginRight:'20px'
    }
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // margin:'0px 10px'


  },
  badgeIcons:{
    margin:'0px 15px'
  },
  // linkButton:{
  //   color:'#000',
    
  //   '&:hover': {
  //     background: "#fff",
  //     color:theme.palette.primary
  //  },
  // },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer:{
    fontWeight:'600',
    paddingTop:'30px',
    marginLeft:'50px',
    "& button":{
      fontWeight:'400',
      fontSize:'18px',
      textTransform:'none'
    },
    '& MuiTabs-indicator':{
      width:'100px'
    }


  },
  linkClass:{
     margin: "0px 13px", 
     textDecoration: "none",
     fontSize:'16px',
     fontWeight:'600',
     color:'black',
     cursor:'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
        textDecoration:'none'
     },

     '&:selected':{
       color:theme.palette.primary.main
     }
     
  },

  inputs:{
   
      position:'relative',
      "& input":{
        width:'300px'
      },
      
      "& svg":{
        position:'absolute',
        top:'0',
        right:'10px'
      }

  }
}));

const Appbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <div style={{background:'none'}}>
        <Grid container style={{background:'none',width: "1200px"}} className={classes.container}>
          <Grid item md={5} lg={5} className={classes.iconClass}>
            {/* <Typography variant="h4">Groww</Typography> */}
            <img src={GrowLogo} width style={{width:'148px',height:'40px',marginRight:'10px'}}></img>
            <Link
              className={classes.linkClass}
              style={{fontWeight:400}}
              underline = 'none'
              variant="body2"
              spacing={2}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Explore
            </Link>
            <Link
            className={classes.linkClass}
            style={{fontWeight:400}}
            underline = 'none'
            variant="body2"
              spacing={2}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Investments
            </Link>
          </Grid>
          <Grid className={classes.inputContainer} item md={4} lg={4}>
            <div className={classes.inputs}>
            <InputBase
        className={classes.input}
        placeholder="Search stocks and mutual funds"
        inputProps={{ 'aria-label': 'Search stocks and mutual funds' }}
      />
      <div><img style={{position:'absolute', right:'10px',top:'12px'}} alt='search' width='19px'height='19px' src='https://assets-netstorage.groww.in/website-assets/prod/1.5.6/build/client/images/search.494f6987.svg'></img></div>
              
            </div>
          </Grid>
          <Grid item className={classes.iconContainer} md={3} lg={3}>
            <Badge className={classes.badgeIcons} spacing={1} badgeContent={0} color="secondary">
              <NotificationsNoneIcon style={{cursor:'pointer'}} />
            </Badge>
            <Badge className={classes.badgeIcons}  spacing={1} badgeContent={1} color="primary">
              <AccountBalanceWalletOutlinedIcon style={{cursor:'pointer'}}/>
            </Badge>
            <Badge className={classes.badgeIcons}  spacing={1} badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon style={{cursor:'pointer'}}/>
            </Badge>
            <Badge className={classes.badgeIcons}  spacing={1} badgeContent={0} color="primary">
              <AccountCircleOutlinedIcon style={{cursor:'pointer'}}/>
            </Badge>
          </Grid>
          {/* <Paper> */}
          <Tabs
            className={classes.tabContainer}
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered = {false}
          >
            <Tab disableRipple label="Stocks"/>
            <Tab disableRipple label="Mutual Funds" />
            <Tab disableRipple label="Fixed Deposits" />
            <Tab disableRipple label="Gold" />
            <Tab disableRipple label="US Stocks" />
          </Tabs>

          {/* </Paper> */}
        </Grid>

        <Divider light />
      </div>
    </>
  );
};

export default Appbar;
