import React from 'react';
import image from './image/panda.jpg';

import './App.css';


class Dog extends React.Component {
    render() {
        let classForImage = this.props.isHidden ? 'photo show' : 'photo';
        return (
                <div className="item">
                    <img src={image} className={classForImage} onClick={this.props.onImageHandleClick}/>
                </div>
        );
    }
}
export default Dog;
