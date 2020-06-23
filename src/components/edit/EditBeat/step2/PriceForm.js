import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PriceSelect from "./PriceSelect";

function PriceForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Price Policy
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <PriceSelect />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember Price Policy Details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PriceForm;
