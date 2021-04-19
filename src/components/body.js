import React from "react";
//import '../node_modules/react-vis/dist/style.css';
import "../../node_modules/react-vis/dist/style.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TypoGraphy from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { XYPlot, LineSeries, XAxis } from "react-vis";
import { Divider, Typography } from "@material-ui/core";
import news from "../components/news";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
  },
  iconClass: {
    maxWidth: "36px",
    height: "36px",
    margin: "15px",
    aspectRatio: "16/9",
    border: "1px solid #ecedef",
    borderRadius: "20%",
  },
}));

const Body = () => {
  console.log(news["Stocks in News"]);
  const classes = useStyles();

  let StocksInNews = news["Stocks in News"].map((item) => {
    return (
      <>
      {/* <TypoGraphy>Stocks in news</TypoGraphy> */}
      <Grid style={{ display: "flex" }} item sm={3} lg={3} md={3}>
        <Card variant="outlined" style={{ width: "200px", height: "180px" }}>
          <img
          className={classes.iconClass}
            src={item.logo}
            alt={item.title}
          ></img>
          <CardContent>
            <TypoGraphy variant="p" component="h5" style={{marginBottom:'20px'}}>
              {item.title}
            </TypoGraphy>
            <TypoGraphy variant="body2" component="h3">
              {item.price}
            </TypoGraphy>
            <TypoGraphy  variant ="p" color={item.growth?'primary':'secondary'}>{item.change}</TypoGraphy>
          </CardContent>
        </Card>
      </Grid>
      </>
    );
  });
  let TopGainers = news["Top Gainers"].map((item) => {
    return (
      <>
      {/* <TypoGraphy>Top Gainers</TypoGraphy> */}
      <Grid style={{ display: "flex" }} item sm={3} lg={3} md={3}>
        <Card variant="outlined" style={{ width: "200px", height: "180px" }}>
          <img
            className={classes.iconClass}
            src={item.logo}
            alt={item.title}
          ></img>
          <CardContent>
            <TypoGraphy variant="p" component="h5" style={{marginBottom:'20px'}}>
              {item.title}
            </TypoGraphy>
            <TypoGraphy variant="body2" component="p">
              {item.price}
            </TypoGraphy>
            <TypoGraphy color={item.growth?'primary':'secondary'}>{item.change}</TypoGraphy>
          </CardContent>
        </Card>
      </Grid>
      </>
    );
  });
  let TopLosers = news["Top Losers"].map((item) => {
    return (
      <>
      {/* <TypoGraphy>Top Losers</TypoGraphy> */}
      <Grid style={{ display: "flex" }} item sm={3} lg={3} md={3}>
        <Card variant="outlined" style={{ width: "200px", height: "180px" }}>
          <img
            className={classes.iconClass}
            src={item.logo}
            alt={item.title}
          ></img>
          <CardContent>
          <TypoGraphy variant="body2" component="h5" style={{marginBottom:'20px'}}> 
              {item.title}
            </TypoGraphy>
            <TypoGraphy variant="p" component="h3">
              {item.price}
            </TypoGraphy>
            <TypoGraphy color={item.growth?'primary':'secondary'}>{item.change}</TypoGraphy>
          </CardContent>
        </Card>
      </Grid>
      </>
    );
  });

  const data = new Array(200).fill(0).reduce(
    (prev, curr) => [
      ...prev,
      {
        x: prev.slice(-1)[0].x + 1,
        y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2),
      },
    ],
    [{ x: 10, y: -10 }]
  );

  function Chart({ data }) {
    return (
      <XYPlot width={200} height={60}>
        <LineSeries data={data} style={{mark:{stroke: 'blue'}}} />
      </XYPlot>
    );
  }

  return (
    <div style={{ width: "1100px", height: "100vh", margin: "10px auto" }}>
      <Grid container spacing={2}>
        <Grid container spacing={2} item lg={8} md={8} sm={8}>
          <Grid item xs={12} sm={12} lg={12}>
            <TypoGraphy variant="body-2" style ={{fontWeight:'600',color:'#7c7e8c'}}> MARKET OPENS AT 9:15 AM</TypoGraphy>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <TypoGraphy variant="h5">Index</TypoGraphy>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} spacing={2}>
            <Paper
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{padding:' 0px 10px'}}>
                <h4>Nifty</h4>
                <p>NSE</p>
              </div>
              <XYPlot height={40} width={150}>
                <XAxis hideTicks={true} />
                <LineSeries data={data} animation />
              </XYPlot>
              <div style={{padding:' 0px 10px'}}>
                <h3>14570.15</h3>
                <p>+3.1%</p>
              </div>
            </Paper>
          </Grid>
          <Grid contaner item xs={12} sm={6} lg={6} spacing={2}>
          
            <Paper
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{padding:' 0px 10px'}}>
                <h3>Sensex</h3>
                <p>BSE</p>
              </div>
              <XYPlot height={40} width={150}>
                <XAxis hideTicks={true} />
                <LineSeries data={data} />
              </XYPlot>
              <div style={{padding:' 0px 10px'}}>
                <h3>48448.15</h3>
                <p>+3.5%</p>
              </div>
            </Paper>
            
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
          <TypoGraphy variant="h5"> Stocks in News</TypoGraphy>
          </Grid>
          {StocksInNews}
          <Grid item xs={12} sm={12} lg={12}>
          <TypoGraphy variant="h5"> Top Gainers</TypoGraphy>
          </Grid>
          {TopGainers}
          <Grid item xs={12} sm={12} lg={12}>
          <TypoGraphy variant="h5"> Top Losers</TypoGraphy>
          </Grid>
          {TopLosers}
        </Grid>
        <Grid container item lg={4} md={4} sm={4}>
          <Paper
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h3>IPO</h3>
            <p style={{ fontSize: "14px" }}>Initial public offering</p>
            <ArrowForwardIcon />
          </Paper>

          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div>
              <h2>Your Investments</h2>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>-140</h3>
                <p>Returns</p>
              </div>
              <div>
                <h3>25387</h3>
                <p>Current</p>
              </div>
            </div>
            <Divider />

            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
            <Divider />
            <Grid item lg={12} md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <h3>Union bank of India</h3>
                  <p>90 shares at 36.70</p>
                </div>
                <div>
                  <h3>3411</h3>
                  <p>(3303)</p>
                </div>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
