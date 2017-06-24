import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

class AnimationSelection extends React.Component {
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
                        className={
                            this.props.activeAnimation === '1' ? 'tile-selected' : ''
                        }
                        onClick={this.handleClick.bind(this)}
                    >
                        <img
                            className="image-rotate"
                            src="http://makeameme.org/media/templates/120/grumpy_cat.jpg"
                            alt="1"
                        />
                    </GridTile>
                    <GridTile
                        className={
                            this.props.activeAnimation === '2' ? 'tile-selected' : ''
                        }
                        onClick={this.handleClick.bind(this)}
                    >
                        <img
                            className="image-circumference"
                            src="http://makeameme.org/media/templates/120/grumpy_cat.jpg"
                            alt="2"
                        />
                    </GridTile>
                </GridList>
            </div>
        );
    }
}

export default AnimationSelection;
