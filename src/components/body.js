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
  StocksCard: {
    width: "200px",
    border: "none",
    height: "180px",
    boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
    "&:hover": {
      transform: "scale(1.01)",
    },
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
          <Card variant="outlined" className={classes.StocksCard}>
            <img
              className={classes.iconClass}
              src={item.logo}
              alt={item.title}
            ></img>
            <CardContent>
              <TypoGraphy
                variant="body1"
                style={{
                  marginBottom: "20px",
                  wordWrap: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </TypoGraphy>
              <TypoGraphy variant="body1">{item.price}</TypoGraphy>
              <TypoGraphy
                variant="body2"
                color={item.growth ? "primary" : "secondary"}
              >
                {item.change}
              </TypoGraphy>
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
          <Card
            variant="outlined"
            className={classes.StocksCard}
            style={{
              width: "200px",
              border: "none",
              height: "180px",
              boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
            }}
          >
            <img
              className={classes.iconClass}
              src={item.logo}
              alt={item.title}
            ></img>
            <CardContent>
              <TypoGraphy
                variant="body1"
                style={{
                  marginBottom: "20px",
                  wordWrap: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </TypoGraphy>
              <TypoGraphy variant="body1">{item.price}</TypoGraphy>
              <TypoGraphy
                variant="body2"
                color={item.growth ? "primary" : "secondary"}
              >
                {item.change}
              </TypoGraphy>
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
          <Card
            variant="outlined"
            className={classes.StocksCard}
            style={{
              width: "200px",
              border: "none",
              height: "190px",
              boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
            }}
          >
            <img
              className={classes.iconClass}
              src={item.logo}
              alt={item.title}
            ></img>
            <CardContent>
              <TypoGraphy
                variant="body1"
                style={{
                  marginBottom: "20px",
                  wordWrap: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </TypoGraphy>
              <TypoGraphy variant="body1">{item.price}</TypoGraphy>
              <TypoGraphy
                variant="body2"
                color={item.growth ? "primary" : "secondary"}
              >
                {item.change}
              </TypoGraphy>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  });

  const data = new Array(40).fill(0).reduce(
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
        <LineSeries data={data} style={{ mark: { stroke: "blue" } }} />
      </XYPlot>
    );
  }

  return (
    <div style={{ width: "1100px", height: "100vh", margin: "10px auto" }}>
      <Grid container spacing={2} style={{ background: "none" }}>
        <Grid container spacing={2} item lg={8} md={8} sm={8}>
          <Grid item xs={12} sm={12} lg={12}>
            <TypoGraphy
              variant="body-2"
              style={{ fontWeight: "600", color: "#7c7e8c" }}
            >
              {" "}
              MARKET OPENS AT 9:15 AM
            </TypoGraphy>
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
                boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
              }}
            >
              <div style={{ padding: " 0px 10px", margin: "10px" }}>
                <Typography variant="body1">Nifty</Typography>
                <Typography variant="caption">NSE</Typography>
              </div>
              <div>
                <XYPlot height={80} width={120}>
                  <XAxis hideTicks={true} />
                  <LineSeries data={data} animation />
                </XYPlot>
              </div>
              <div style={{ padding: " 0px 10px", margin: "10px" }}>
                <Typography variant="body1">14570.15</Typography>
                <Typography variant="caption">+3.1%</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid contaner item xs={12} sm={6} lg={6} spacing={2}>
            <Paper
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
              }}
            >
              <div style={{ padding: " 0px 10px", margin: "10px" }}>
                <Typography variant="body1">Sensex</Typography>
                <Typography variant="caption">BSE</Typography>
              </div>
              <div style={{ backGroundColor: "yellow" }}>
                <XYPlot height={80} width={120}>
                  <XAxis hideTicks={true} />
                  <LineSeries data={data} animation />
                </XYPlot>
              </div>

              <div style={{ padding: " 0px 10px", margin: "10px" }}>
                <Typography variant="body1">48448.15</Typography>
                <Typography variant="caption">+3.5%</Typography>
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
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "356px",
              margin: "10px 0",
              padding: "10px",
              border: "1px solid rgba(192,192,192,0.3) ",
              boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src="https://assets-netstorage.groww.in/website-assets/prod/1.5.5/build/client/images/fno_icon.2067f0e1.svg"
                alt="f&o"
                style={{
                  width: "40px",
                  margin: "20px",
                  height: "40px",
                  aspectRatio: "auto 40/40",
                  backgroundColor: "#f6f6f7",
                }}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6">Futures and Options</Typography>
                <Typography variant="p">High risk markets</Typography>
              </div>
            </div>
            <Divider variant="middle" style={{ width: "90%" }} />

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src="https://assets-netstorage.groww.in/website-assets/prod/1.5.5/build/client/images/ipo_icon.45b3f2d8.svg"
                alt="f&o"
                style={{
                  width: "40px",
                  margin: "20px",
                  height: "40px",
                  aspectRatio: "auto 40/40",
                  backgroundColor: "#f6f6f7",
                }}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6">
                  Initial Public Offerings -IPO
                </Typography>
                <Typography variant="p">Invest in new stocks</Typography>
              </div>
            </div>
          </Paper>

          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              boxShadow: "0px 0px 10px rgba(192,192,192,0.3)",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                style={{ margin: "10px", padding: "10px" }}
              >
                Your Investments
              </Typography>
              <img
                alt="expand icon"
                style={{ margin: "10px", padding: "10px" }}
                src="https://assets-netstorage.groww.in/website-assets/prod/1.5.5/build/client/images/icon.08841a89.svg"
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">-2844</Typography>
                <Typography variant="p">Returns</Typography>
              </div>
              <div
                style={{
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">50,785</Typography>
                <Typography variant="p">Current</Typography>
              </div>
            </div>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    Union bank of India
                  </Typography>
                  <Typography variant="caption">90 shares @ ₹36.70</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹3411</Typography>
                  <Typography variant="body2">(₹3303)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    Wipro
                  </Typography>
                  <Typography variant="caption">
                    10 shares @ ₹1336.70
                  </Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹13311</Typography>
                  <Typography variant="body2">(₹12903)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    State bank of india
                  </Typography>
                  <Typography variant="caption">80 shares @ 136.70</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹9830</Typography>
                  <Typography variant="body2">(₹10300)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    Infosys
                  </Typography>
                  <Typography variant="caption">20 shares @ 1500</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹30000</Typography>
                  <Typography variant="body2">(₹31250)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    HDFC Bank
                  </Typography>
                  <Typography variant="caption">5 shares @ 1800.45</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹9523</Typography>
                  <Typography variant="body2">(₹9830)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    Reliance Industries
                  </Typography>
                  <Typography variant="caption">20 shares @ 2500</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹56000</Typography>
                  <Typography variant="body2">(₹62300)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    Punjab National Bank
                  </Typography>
                  <Typography variant="caption">100 shares @ 35.40</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹3543</Typography>
                  <Typography variant="body2">(₹3320)</Typography>
                </div>
              </div>
            </Grid>
            <Divider variant="middle" style={{ width: "90%" }} />

            <Grid item lg={12} md={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                    Hindustan Unilever
                  </Typography>
                  <Typography variant="caption">200 shares @ 27</Typography>
                </div>
                <div style={{ margin: "5px 20px", padding: "10px" }}>
                  <Typography variant="h6">₹5400</Typography>
                  <Typography variant="body2">(₹5358)</Typography>
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
