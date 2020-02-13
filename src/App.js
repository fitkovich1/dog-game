import React from 'react';
import './App.css';
import Dog from "./Dog";
import Counter from "./Counter";
import dogAudio from './image/zloy.mp3';
import {connect} from "react-redux";
import {incrementCount, setPosition} from "./reducer";

class App extends React.Component {
    constructor() {
        super();
        this.dogAudioRef = React.createRef();
    }

    componentDidMount() {
        setInterval(this.setNewPositionOfImage, 570);
    }

    setNewPositionOfImage = () => {
        this.props.setPosition();
    };

    onImageHandleClick = () => {
        this.dogAudioRef.current.currentTime = 0;
        this.dogAudioRef.current.play();
        this.props.incrementCount();
    };

    render() {
        let dogsElement = this.props.dogs.map(d => <Dog id={d.id} isHidden={d.isHidden}
                                                        onImageHandleClick={this.onImageHandleClick}/>);
        return (
            <div className="container">
                <h1 className="title">Click to Joker</h1>
                <audio src={dogAudio} ref={this.dogAudioRef}></audio>
                <div className="wrapper">
                    {dogsElement}
                </div>
                <Counter count={this.props.count}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs,
        count: state.count
    };
};


const ConnectedApp = connect(mapStateToProps, {incrementCount,setPosition})(App);

export default ConnectedApp;
