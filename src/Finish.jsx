import React from 'react';
import { Card, CardMedia, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class Finish extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelectedGalaxy = this.handleSelectedGalaxy.bind(this);
        this.handleSelectedAnimation = this.handleSelectedAnimation.bind(this);
    }

    handleSelectedGalaxy(){
        let galaxy1 = new Image();
        galaxy1.src = require('../public/images/1.jpg');

        let galaxy2 = new Image();
        galaxy2.src = require('../public/images/2.jpg');

        if(this.props.activeGalaxy === 'galaxy1'){
            return galaxy1.src
        }
        return galaxy2.src
    }

    handleFaceUploaded(){
        let faceUploaded = new Image();
        faceUploaded.src = this.props.faceUploadedUrl;
        return faceUploaded.src
    }

    handleSelectedAnimation(){
        if(this.props.activeAnimation === 'rotation'){
            return 'final-animation-rotation'
        }
        return 'final-animation-circumference'
    }

    render() {
        return (
            <div className="finish-card">
                <Card>
                    <CardMedia>
                        <div className="final-image-container">
                            <img src={this.handleSelectedGalaxy()} className="final-galaxy-selected"/>
                            <img src={this.handleFaceUploaded()} className={this.handleSelectedAnimation()}/>
                        </div>
                    </CardMedia>
                    <CardActions>
                        <RaisedButton label="Download" primary={true} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}
