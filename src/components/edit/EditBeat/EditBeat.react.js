import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import BeatInfoForm from "components/edit/EditBeat/step1/BeatInfoForm";
import PriceForm from "components/edit/EditBeat/step2/PriceForm";
import Review from "components/edit/EditBeat/step3/Review";
import * as api from "lib/api";
import * as BeatsActions from "store/modules/beats";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["기본 곡 정보", "판매 조건 설정", "작성 정보 확인"];

function getStepContent(step, beat, onChange, addTag, removeTag) {
  switch (step) {
    case 0:
      return (
        <BeatInfoForm
          beat={beat}
          onChange={onChange}
          addTag={addTag}
          removeTag={removeTag}
        />
      );
    case 1:
      return <PriceForm beat={beat} onChange={onChange} />;
    case 2:
      return <Review beat={beat} onChange={onChange} />;
    default:
      throw new Error("Unknown step");
  }
}

class EditBeat extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  onSubmit = async () => {
    const title = "석찬바보";

    try {
      const response = await api.createBeat({ title });
      console.log(response);
      if (response.status === 200) {
        console.log("post");
        return BeatsActions.postBeatsSuccess(response.data);
      }
      // return AccountsActions.loginFailure(response.data['error']); // TODO: collab. needed with server side
    } catch (e) {
      const error = { error: e.message };
      // AccountsActions.loginFailure(error);
    }
  };

  render() {
    const { classes, beat, onChange, addTag, removeTag } = this.props;
    const { activeStep } = this.state;
    const { onSubmit } = this;
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4" align="center">
              Spread Your Beat
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    비트 등록이 완료되었습니다.
                  </Typography>
                  <Typography variant="body1">
                    비트 등록이 성공적으로 이루어졌습니다. 비트 판매 정보는
                    프로필과 장르/무드 페이지에서 확인할 수 있으며, 다른 사람이
                    구매한 경우 이메일과 문자로 상세 정보를 보내드립니다.
                  </Typography>
                  <div className={classes.buttons}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/beatpost"
                      onClick={onSubmit}
                    >
                      게시글 확인하기
                    </Button>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(
                    activeStep,
                    beat,
                    onChange,
                    addTag,
                    removeTag
                  )}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Upload" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

EditBeat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditBeat);
