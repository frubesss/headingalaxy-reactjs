import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const cat = require('../public/images/grumpy_cat.jpg');

class AnimationSelection extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e.currentTarget.id);
    }

    render() {
        return (
            <div>
                <GridList>
                    <div className="tile-background" id="rotation" onClick={this.handleClick}>
                        <GridTile
                            className={
                                this.props.activeAnimation === 'rotation' ? 'tile-selected' : ''
                            }
                        >
                            <img className="image-rotate" src={cat} alt="1" />
                        </GridTile>
                    </div>
                    <div className="tile-background" id="circumference" onClick={this.handleClick}>
                        <GridTile
                            className={
                                this.props.activeAnimation === 'circumference' ? 'tile-selected' : ''
                            }
                        >
                            <img className="image-circumference" src={cat} alt="2" />
                        </GridTile>
                    </div>
                </GridList>
            </div>
        );
    }
}

export default AnimationSelection;
