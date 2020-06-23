import React from "react";

import { withStyles } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Cancel from "@material-ui/icons/Cancel";

const styles = theme => ({
  tag: {
    margin: theme.spacing.unit,
    fontStyle: "italic"
  }
});

const BeatInfoForm = props => {
  const { beat, onChange, onUpload, addTag, removeTag, classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        기본 정보
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FormControl required fullWidth>
            <label htmlFor="title">Beat Title (비트 제목)</label>
            <input
              id="title"
              name="title"
              onChange={onChange}
              value={beat.title}
              autoFocus
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl required>
            <label htmlFor="tag">Tags (태그 목록)</label>
            <input id="tag" name="tag" onChange={onChange} value={beat.tag} />
            <Button variant="outlined" onClick={addTag}>
              추가
            </Button>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {beat.tags &&
            beat.tags.map((t, i) => (
              <React.Fragment>
                <span className={classes.tag} key={`tag-${i}`}>{`#${t}`}</span>
                <Cancel onClick={() => removeTag(t)} />
              </React.Fragment>
            ))}
        </Grid>

        <Grid item xs={12}>
          <FormControl required fullWidth>
            <label htmlFor="description">
              Describe Your Beat (비트에 대한 설명을 적어주세요.)
            </label>
            <textarea
              id="description"
              name="description"
              onChange={onChange}
              value={beat.description}
              rows="6"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="beat">Upload Beat</InputLabel>
          <Input
            type="file"
            name="beat"
            id="beat"
            onChange={e => onUpload("mbeat")(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="cover">Upload Cover Image</InputLabel>
          <Input
            type="file"
            name="cover"
            id="cover"
            onChange={e => onUpload("mimage")(e)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(BeatInfoForm);
