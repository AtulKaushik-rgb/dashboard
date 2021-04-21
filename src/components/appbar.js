import React from "react";
import GrowLogo from './logo/GrowwLogo.svg';
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WavesIcon from "@material-ui/icons/Waves";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { TableContainer } from "@material-ui/core";

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
              underline = 'none'
              component="a"
              variant="a"
              spacing={2}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Explore
            </Link>
            <Link
            className={classes.linkClass}
            underline = 'none'
              component="a"
              variant="a"
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
              <Input variant="contained"></Input>
              <SearchOutlinedIcon />
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
