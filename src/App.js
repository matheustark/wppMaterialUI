import React from "react";
import { withStyles } from "@material-ui/core/styles";
 
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton } from "@material-ui/core";

const styles = () => ({
  root: {
     padding: "50px 100px",
     zIndex: 999,
     position: "absolute"
   },
   card: {
     display: "flex",
     height: "calc(100vh - 100px)"
   },
   rightBorder: {
     borderRight: "solid #d0D0D0 1px"
   },
   content: {
     marginTop: 0
   },
   background: {
     position: "absolute",
     height: 200,
     width: "100%",
     top: 0,
     background: "#7159C1"
   },
   rightContainer: {
     background:
       "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
     flex: 1
   },
   heightAdjust: {
     display: "flex",
     flexDirection: "column"
   },
   paper: {
     background: "#9de1fe",
     padding: 20
   },
   information: {
     color: "#444"
   }
 });

 const list = [
  { id: 1, name: "Matheus", text: "Lorem ipsum"},
  { id: 2, name: "Robson", text: "Lorem ipsum"},
  { id: 3, name: "Cleiton", text: "Lorem ipsum"}
];

const LeftContainer = ({ classes }) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder} 
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          H
        </Avatar>
      }
    />
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subheader">
        Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
    </Paper>
    <List>
      {list.map(item => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

const RightContainer = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={9}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}> 
        M
        </Avatar>
      }
      action={
        <IconButton>
        </IconButton>
      }
      title="Matheus"
    />
    <CardContent className={[classes.rightContainer, classes.content]} />
  </Grid>
);

 const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(App);
