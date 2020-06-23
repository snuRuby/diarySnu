import { createMuiTheme } from "@material-ui/core/styles";

// TODO: Theme 구성을 어떻게 할 것인지 논의 필요
// 아래 속성 값들은 임시로 설정

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#006974"
    }
  },
  status: {
    danger: "orange"
  }
});

export default Theme;
