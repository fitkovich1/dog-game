import React from 'react';
import './App.css';
import Dog from "./Dog";
import Counter from "./Counter";
import dogAudio from './image/dogWhining.mp3';

class App extends React.Component {
    constructor() {
        super();
        this.dogAudioRef = React.createRef();
    }

    state = {
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
        count: 0,
        randomImageId: 0,
        showGame: true
    };

    componentDidMount() {
        setInterval(
            () => {
                this.setState(
                    {dogs: this.getRandomImageId()}
                )
            }, 700);
    }

    getRandomImageId = () => {
        let randomImageId = Math.floor(Math.random() * 9);
        let newDogs = this.state.dogs.map(el => {
            if (el.id === randomImageId) {
                return {...el, isHidden: true}
            } else {
                return {...el, isHidden: false}
            }
        });
        return newDogs;
    };

    onImageHandleClick = () => {
        this.dogAudioRef.current.currentTime = 0;
        this.dogAudioRef.current.play();
        this.setState({
            count: this.state.count + 1
        }, () => {
            if (this.state.count === 10) {
                this.setState({
                    showGame: true,
                    count: this.state.count = 0

                });
                return alert('Congratulations, you are Win!!!!');
            }
        })
    };
    onStartHandleClick = () => {
        this.setState({
            showGame: false
        })
    };

    render() {
        let dogsElement = this.state.dogs.map(el => <Dog id={el.id} isHidden={el.isHidden}
                                                         onImageHandleClick={this.onImageHandleClick}/>);
        return (
            <div className="wrapper">
                <audio src={dogAudio} ref={this.dogAudioRef}></audio>
                {
                    this.state.showGame ?
                        <div className="button">
                            <button onClick={this.onStartHandleClick}>Start Game</button>
                        </div>
                        :
                        <div className="wrapper">
                            {dogsElement}
                            <Counter count={this.state.count}/>
                        </div>
                }
            </div>
        );
    }
}

export default App;
