import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import PriceCard from "./PriceCard";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

class CheckboxesGroup extends React.Component {
  state = {
    standard: true,
    premium: false,
    unlimited: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { standard, premium, unlimited } = this.state;
    const error = [standard, premium, unlimited].filter(v => v).length < 1;

    return (
      <div className={classes.root}>
        <FormControl
          required
          error={error}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">
            Choose Your Price Policy (판매 조건을 설정하세요.)
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={standard}
                  onChange={this.handleChange("standard")}
                  value="standard"
                />
              }
              label="Standard License"
            />
            {standard && <PriceCard priceType="standard" />}
            <FormControlLabel
              control={
                <Checkbox
                  checked={premium}
                  onChange={this.handleChange("premium")}
                  value="premium"
                />
              }
              label="Premium License"
            />
            {premium && <PriceCard priceType="premium" />}
            <FormControlLabel
              control={
                <Checkbox
                  checked={unlimited}
                  onChange={this.handleChange("unlimited")}
                  value="unlimited"
                />
              }
              label="Unlimited License"
            />
            {unlimited && <PriceCard priceType="unlimited" />}
          </FormGroup>

          {error && (
            <FormHelperText>
              최소 1개 이상의 판매 조건을 선택해야 합니다.
            </FormHelperText>
          )}
        </FormControl>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxesGroup);
