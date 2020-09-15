


const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      SET_USERS = "SET_USERS";

let initialState = {
    users : [
        {id : "1",  followed : false,
                    photoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    fullName : 'Dmitry', 
                    status : 'I am a boss',
                    location : {
                        city : 'Minsk',
                        country : 'Belarus'
                    }},
        {id : "2",  followed : true,
                    photoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    fullName : 'Alex', 
                    status : 'I am a boss too',
                    location : {
                        city : 'Moscow',
                        country : 'Russia'
                    }},
        {id : "3",  followed : false,
                    photoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    fullName : 'Andrew', 
                    status : 'I am a boss too',
                    location : {
                        city : 'Kiev',
                        country : 'Ukraine'
                    }}
    ]};

const usersReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FOLLOW : 
            return {
                ...state,
                users : state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed : true}
                    }
                    return user;   
                })
            }
        
        case UNFOLLOW : 
            return {
                ...state,
                users : state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed : false}
                    }
                    return user;     
                })
            }
        
        case SET_USERS : 
            return {
                ...state,
                users : [...state.users, ...action.users]
            }
        
        default :
            return state;
    } 
    
}

export const followCreator = (userId) =>  ({type: FOLLOW, userId});
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users});
export default usersReducer;