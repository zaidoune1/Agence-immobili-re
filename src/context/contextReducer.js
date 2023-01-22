
    export const contextReducer = (state, action) => {

        switch (action.type) {

            case  "ADD-APART" : return {...state, arr:[{...action.payload}]}

            default : return state;

        }
    
    };

