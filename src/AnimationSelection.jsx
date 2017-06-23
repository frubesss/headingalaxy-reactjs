import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

class AnimationSelection extends React.Component {
    render() {
        return (
            <div>
                <GridList>
                    <GridTile>
                        <img
                            className="image-rotate"
                            src="http://makeameme.org/media/templates/120/grumpy_cat.jpg"
                        />
                    </GridTile>
                    <GridTile>
                        <img
                            className="image-circumference"
                            src="http://makeameme.org/media/templates/120/grumpy_cat.jpg"
                        />
                    </GridTile>
                </GridList>
            </div>
        );
    }
}

export default AnimationSelection;
