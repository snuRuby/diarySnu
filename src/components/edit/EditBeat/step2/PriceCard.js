import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 25
  }
};

const Capitalize = sentence => {
  // 첫 글자를 대문자로 바꿔주는 함수
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

const PriceCard = ({ classes, priceType }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/pattern-dummy.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {Capitalize(priceType)} License
          </Typography>
          <Typography component="p">
            The starter license. Receive an uncompressed WAV File version of
            your beat and use it on any one single format with a distribution of
            up to 2,000 units. Public performances and TV/radio plays are NOT
            included in this license.
          </Typography>
          <br />
          <Typography component="p">
            처음 시작하는 사람들을 위한 라이센스입니다. WAV 포맷으로 비트
            다운로드가 가능하며, 녹음된 파일은 최대 2000번 배포가 가능하나
            TV/Radio 등 공개된 플랫폼에서의 배포는 허락하지 않습니다.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TextField
          required
          id="price"
          name="price"
          label="$ Your Price (가격을 입력하세요)"
          fullWidth
          autoComplete="price"
          inputProps={{ type: "number" }}
        />
      </CardActions>
    </Card>
  );
};

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PriceCard);
