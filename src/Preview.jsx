import React from 'react';
import { Card, CardMedia } from 'material-ui/Card';

export default class Preview extends React.Component {
    render() {
        return (
            <Card>
                <CardMedia>
                    <img src={this.props.src} alt={this.props.alt} />
                </CardMedia>
            </Card>
        );
    }
}
