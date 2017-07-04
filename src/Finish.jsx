import React from 'react';
import { Card, CardMedia, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';




export default class Finish extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelectedGalaxy = this.handleSelectedGalaxy.bind(this);
        this.handleSelectedAnimation = this.handleSelectedAnimation.bind(this);
        this.handleCombineSelections = this.handleCombineSelections.bind(this);
    }

    componentDidMount() {
        this.handleCombineSelections();
    }

    handleSelectedGalaxy(){

        let galaxy1 = new Image();
        galaxy1.src = require('../public/images/1.jpg');

        let galaxy2 = new Image();
        galaxy2.src = require('../public/images/2.jpg');

        if(this.props.activeGalaxy === 'galaxy1'){
            return galaxy1
        }
        return galaxy2
    }

    handleFaceUploaded(){
        let faceUploaded = new Image();
        faceUploaded.src = this.props.faceUploadedUrl;
        return faceUploaded
    }

    handleSelectedAnimation(){
    }

    handleCombineSelections(){
        const ctx = this.refs.canvas.getContext('2d');
        const canvas = document.getElementById('canvas');

        let galaxyImage = this.handleSelectedGalaxy();
        let faceImage = this.handleFaceUploaded();

        galaxyImage.onload = function() {
            ctx.drawImage(galaxyImage, 0, 0, galaxyImage.width, galaxyImage.height);
        };

        faceImage.onload = function() {
            ctx.drawImage(faceImage, canvas.width / 2 - faceImage.width / 2,
                canvas.height / 2 - faceImage.height / 2, 150, 150);
        };

    }

    render() {
        return (
            <div className="finish-card">
                <Card>
                    <CardMedia>
                        <canvas id="canvas" ref="canvas" width="1920" height="1080"/>
                    </CardMedia>
                    <CardActions>
                        <RaisedButton label="Download" primary={true} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}
