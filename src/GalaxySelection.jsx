import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const galaxy1 = require('../public/images/1.jpg');
const galaxy2 = require('../public/images/2.jpg');

class GalaxySelection extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e.target.alt);
    }

    render() {
        return (
            <div>
                <GridList>
                    <GridTile
                        className={this.props.activeGalaxy === '1' ? 'tile-selected' : ''}
                        onClick={this.handleClick}
                    >
                        <img src={galaxy1} alt="1" />
                    </GridTile>
                    <GridTile
                        className={this.props.activeGalaxy === '2' ? 'tile-selected' : ''}
                        onClick={this.handleClick}
                    >
                        <img src={galaxy2} alt="2" />
                    </GridTile>
                </GridList>
            </div>
        );
    }
}

export default GalaxySelection;
