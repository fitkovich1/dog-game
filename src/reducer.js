const INCREMENT_COUNT = 'INCREMENT_COUNT';
const SET_POSITION = 'SET_POSITION';

const initialState = {
    dogs: [
        {id: 0, isHidden: false},
        {id: 1, isHidden: false},
        {id: 2, isHidden: false},
        {id: 3, isHidden: false},
        {id: 4, isHidden: false},
        {id: 5, isHidden: false},
        {id: 6, isHidden: false},
        {id: 7, isHidden: false},
        {id: 8, isHidden: false}
    ],
    count: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case SET_POSITION:
            let randomImageId = Math.floor(Math.random()*9);
            return {
                ...state,
                dogs: state.dogs.map(d => {
                    if(d.id === randomImageId){
                        return {...d, isHidden: true}
                    }else {
                        return {...d, isHidden: false}
                    }
                })
            };

        default:
            return state
    }
};

export const incrementCount = () => ({
    type: 'INCREMENT_COUNT'
});
export const setPosition = () => ({
    type: 'SET_POSITION'
});

