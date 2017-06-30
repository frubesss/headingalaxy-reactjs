import React from 'react';
import { Card, CardMedia, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

let galaxy1 = require('../public/images/1.jpg');
let galaxy2 = require('../public/images/2.jpg');

export default class Finish extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelectedGalaxy = this.handleSelectedGalaxy.bind(this);
        this.handleSelectedAnimation = this.handleSelectedAnimation.bind(this);
    }

    handleSelectedGalaxy(){
        if(this.props.activeGalaxy === 'galaxy1'){
            return galaxy1
        }
        return galaxy2
    }

    handleSelectedAnimation(){
        if(this.props.activeAnimation === '1'){
            return galaxy1
        }
        return galaxy2
    }

    render() {
        return (
            <Card>
                <CardMedia>
                    <img src={this.handleSelectedGalaxy()} alt="selected-galaxy" />
                </CardMedia>
                <CardActions>
                    <RaisedButton label="Download" primary={true} />
                </CardActions>
            </Card>
        );
    }
}
