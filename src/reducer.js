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
        {id: 8, isHidden: false},
        {id: 9, isHidden: false},
        {id: 10, isHidden: false},
        {id: 11, isHidden: false},
        {id: 12, isHidden: false},
        {id: 13, isHidden: false},
        {id: 14, isHidden: false},
        {id: 15, isHidden: false},
        {id: 16, isHidden: false},
        {id: 17, isHidden: false},
        {id: 18, isHidden: false},
        {id: 19, isHidden: false},
        {id: 20, isHidden: false},
        {id: 21, isHidden: false},
        {id: 22, isHidden: false},
        {id: 23, isHidden: false},
        {id: 24, isHidden: false},
        {id: 25, isHidden: false},
        {id: 26, isHidden: false},
        {id: 27, isHidden: false},
        {id: 28, isHidden: false},
        {id: 29, isHidden: false}
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
            let randomImageId = Math.floor(Math.random()*30);
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

