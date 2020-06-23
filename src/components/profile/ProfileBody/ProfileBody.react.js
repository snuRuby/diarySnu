import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import { withStyles, Typography } from "@material-ui/core";

import "./ProfileBody.css";

// import Button from '@material-ui/core/Button';
import BeatPreviewListContainer from "containers/list/BeatPreviewListContainer";

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit,
    position: "relative"
  },
  imageBox: {
    height: 250,
    overflow: "hidden",
    "& img": {
      filter: "grayscale(50%)",
      width: "100%",
      height: "auto"
    }
  },
  pageTitle: {
    height: 50,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
    fontSize: 32,
    alignText: "center"
  },
  titleSection: {
    height: 70,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  titleBox: {
    backgroundColor: "white",
    border: "2px solid black",
    maxWidth: 700,
    fontSize: 32,
    textAlign: "center",
    zIndex: 2,
    "& div": {
      padding: "1rem"
    }
  },
  stripe: {
    position: "absolute",
    top: "20%",
    left: 0,
    width: "100%",
    height: "60%",
    background:
      "repeating-linear-gradient(-45deg,#333333,#333333 2px,#FFFFFF 2px,#FFFFFF 12px)"
  },
  addButton: {
    fontSize: 32,
    textAlign: "center",
    margin: "0 auto",
    width: 120,
    cursor: "pointer"
  },
  section: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    margin: "4rem 0"
  },
  box: {
    position: "relative",
    flexDirection: "row",
    maxWidth: 900,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 2rem"
  },
  profilePicture: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-2rem",
    padding: "2rem",
    background: "white",
    overflow: "hidden",

    "& img": {
      position: "relative",
      width: "100%",
      "&:before": {
        content: `""`,
        display: "block",
        paddingTop: "100%"
      },
      overflow: "hidden",
      border: "1px solid black"
    }
  },
  borderBox: {
    position: "absolute",
    top: 0,
    left: 0,
    border: "1px solid black",
    width: "100%",
    "&:before": {
      content: `""`,
      display: "block",
      paddingTop: "100%"
    }
  },
  descriptionBox: {
    width: "100%",
    padding: "1rem"
  },
  snsIcon: {
    margin: "0.5rem",
    display: "inline-block",
    width: 24,
    height: 24,
    "& img": {
      width: "100%",
      height: "100%",
      filter: "grayscale(100%)"
    }
  },
  beatsBox: {
    height: 400,
    borderLeft: "1px solid black",
    borderBottom: "1px solid black"
  }
});

const SnsLink = ({ sns, to, snsIcon }) => {
  return (
    <div className={snsIcon}>
      <a href={`http://www.${to}`} rel="noopener noreferrer" target="_blank">
        <img className="img" src={`/images/${sns}.png`} alt={sns} />
      </a>
    </div>
  );
};

const ProfileBody = ({ isMyProfile, userid, classes, clickAddButton }) => {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.imageBox}>
        <img
          className="img"
          src="/images/background-dummy.jpg"
          alt="background"
        />
      </Grid>
      <Grid item xs={12} className={classes.pageTitle}>
        PROFILE PAGE
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <Grid container className={classes.box}>
          <Grid item xs={12} sm={6}>
            <div className={classes.profilePicture}>
              <picture>
                <img src="/images/profile-dummy.jpg" alt="profile" />
              </picture>
              <div className={classes.borderBox} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.descriptionBox}>
            <Typography variant="h5">{userid}</Typography>
            <br />
            <Typography paragraph>
              송금이 완료되었습니다. - 일시: 2019.01.21 00:41 - 받는사람: 김*영
              / 국민 / ***2701 - 보낸금액: 11,000원 - 충전금액: 10,000원 - 내
              계좌: KEB하나 / ***8507 / 박* - 페이머니 잔액: 2,900원
            </Typography>
            <Typography paragraph>
              송금이 완료되었습니다. - 일시: 2019.01.21 00:41 - 받는사람: 김*영
              / 국민 / ***2701 - 보낸금액: 11,000원 - 충전금액: 10,000원 - 내
              계좌: KEB하나 / ***8507 / 박* - 페이머니 잔액: 2,900원
            </Typography>
            <Typography paragraph>
              송금이 완료되었습니다. - 일시: 2019.01.21 00:41 - 받는사람: 김*영
              / 국민 / ***2701 - 보낸금액: 11,000원 - 충전금액: 10,000원 - 내
              계좌: KEB하나 / ***8507 / 박* - 페이머니 잔액: 2,900원
            </Typography>
            <Typography paragraph>
              송금이 완료되었습니다. - 일시: 2019.01.21 00:41 - 받는사람: 김*영
              / 국민 / ***2701 - 보낸금액: 11,000원 - 충전금액: 10,000원 - 내
              계좌: KEB하나 / ***8507 / 박* - 페이머니 잔액: 2,900원
            </Typography>
            <SnsLink
              sns="facebook"
              to="facebook.com/beatmarket"
              snsIcon={classes.snsIcon}
            />
            <SnsLink
              sns="instagram"
              to="instagram.com/login588"
              snsIcon={classes.snsIcon}
            />
            <SnsLink
              sns="soundcloud"
              to="soundcloud.com/don-malik"
              snsIcon={classes.snsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.titleSection}>
        <div className={classes.titleBox}>
          <div>RECENT WORKS</div>
        </div>
        <div className={classes.stripe} />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <Grid container className={classes.box}>
          {isMyProfile ? (
            <Grid item xs={12}>
              <div onClick={clickAddButton} className={classes.addButton}>
                +
              </div>
            </Grid>
          ) : null}
          <BeatPreviewListContainer />
        </Grid>
      </Grid>
    </Grid>
    // <div className='profilebody-wrapper'>
    //     <div className='background-wrapper'>

    //         <div className='cover'>
    //             <SocialBox title='FOLLOWER' content='15k'></SocialBox>
    //             <SocialBox title='FOLLOWING' content='42'></SocialBox>
    //             <SocialBox title='UPLOADS' content='29'></SocialBox>
    //             <SocialBox title='STAR' content='210k'></SocialBox>
    //         </div>
    //         {isMyProfile &&
    //             <div className="btn">
    //                 <Button> 수정 </Button>
    //             </div>
    //         }
    //     </div>

    //     <div className='profile-wrapper'>
    //         <Card>
    //             <div className='profile-img-wrapper'>
    //                 <img className='img' src='/images/profile-dummy.jpg' alt="profile"></img>
    //                 {isMyProfile &&
    //                     <div className="btn">
    //                         <Button> 수정 </Button>
    //                     </div>
    //                 }
    //             </div>

    //             <div className='profile-info-wrapper'>
    //                 <div className='name'>{userid}</div>
    //                 <div className='status'>비트 거래 및 프로듀싱 문의 <br></br> 010-9494-9494</div>
    //                 <div className='sns-wrapper'>
    //                     <SnsLink sns='facebook' to='facebook.com/beatmarket'></SnsLink>
    //                     <SnsLink sns='instagram' to='instagram.com/login588'></SnsLink>
    //                     <SnsLink sns='soundcloud' to='soundcloud.com/don-malik'></SnsLink>
    //                 </div>
    //             </div>
    //         </Card>

    //         {isMyProfile &&
    //             <div className="add-beat-btn">
    //                 <Button variant="contained" fullWidth to="/editbeatpost/1"> 새로운 비트 등록 </Button>
    //             </div>
    //         }

    //     </div>

    //     <div className='beat-list-wrapper'>
    //         <BeatPreviewListContainer/>
    //     </div>
    // </div>
  );
};

ProfileBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileBody);
