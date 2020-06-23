import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const products = [
  { name: "Standard License", desc: "부가 정보", price: "$9.99" },
  { name: "Unlimited License", desc: "부가 정보", price: "$3.45" }
];

const tags = ["boombap", "hopeful", "funky"];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

function Review(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Beat Info
          </Typography>
          <Typography gutterBottom>곡 정보가 들어갑니다</Typography>
          <Typography gutterBottom>{"#" + tags.join(" #")}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
