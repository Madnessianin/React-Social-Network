import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getProfile } from "../../Redux/profile-selectors";
import { saveProfileInfo } from "../../Redux/profile-reducer";

import { compose } from "redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import Edit from "./Edit";

class EditConteiner extends React.Component {
  render() {
    if (this.props.profile == null) {
      return <Redirect to="/profile" />;
    }

    return (
      <Edit
        profile={this.props.profile}
        saveProfileInfo={this.props.saveProfileInfo}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
});

let mapDispatchToProps = { saveProfileInfo };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(EditConteiner);
