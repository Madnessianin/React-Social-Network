
import React from "react"
import { connect } from "react-redux";
import * as axios from "axios"
import { follow,  unfollow, setCurrentPage, getUsers } from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from '../../api/Api.js'
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";
import {getAllUsers, getCurrentPage, getFollowingIsProgress, getIsFetching, getPageSize, getTotalUsersCount} from "../../Redux/users-selectors"
import { getAutorizedUserId } from "../../Redux/profile-selectors";

class UsersConteiner extends React.Component {

    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }
    render() {
    return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                  pageSize = {this.props.pageSize}
                  currentPage = {this.props.currentPage}
                  onPageChanged = {this.onPageChanged}
                  users = {this.props.users}
                  follow = {this.props.follow}
                  unfollow = {this.props.unfollow}
                  followingIsProgress = {this.props.followingIsProgress}
                  autorizedUserId = {this.props.autorizedUserId}/>
    </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize : getPageSize(state),
        totalUsersCount : getTotalUsersCount(state),
        currentPage : getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingIsProgress : getFollowingIsProgress(state),
        autorizedUserId : getAutorizedUserId(state)
    }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersConteiner);

