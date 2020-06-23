import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import ProfileBody from "components/profile/ProfileBody";
import * as baseActions from "store/modules/base";

// TODO: 서버에서 프로필을 보려는 유저의 정보를 모두 받아온 뒤 profileBody의 props로 넘겨주어야 한다
// TODO: 존재하지 않는 유저면 프로필 없음 페이지로 redirection 해야함

class ProfileContainer extends Component {
  state = {
    redirect: false
  };
  clickAddButton = () => {
    return this.setState({ redirect: true });
  };

  render() {
    // currentUserid: 로그인한 유저의 아이디
    // userid: 프로필 페이지 유저의 아이디
    // 프로필 페이지는 내가 보든 남이 보든 똑같이 생겼지만 내 프로필 페이지라면 게시글을 올릴 수 있는 버튼 등을 활성하화기 위하여 isMyProfile 값을 넣어준다
    const { logged, currentUserid, userid } = this.props;
    const isMyProfile = logged && currentUserid === userid;
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/uploadBeat" />;
    return (
      <React.Fragment>
        <ProfileBody
          isMyProfile={isMyProfile}
          userid={userid}
          clickAddButton={this.clickAddButton}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    logged: state.accounts.get("logged"),
    currentUserid: state.accounts.get("username")
    // userNickname,profileImage, ... 와 같은 정보를 받아와야 함(TODO)
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ProfileContainer);
