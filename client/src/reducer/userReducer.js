export const initialState=[{
    usersReducerLoading: false,
    users:{},
    usersError: ""
}]

export const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}