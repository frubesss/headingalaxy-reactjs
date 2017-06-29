import React from 'react';
import { Step, StepLabel, Stepper } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FaceUpload from './FaceUpload';
import GalaxySelection from './GalaxySelection';
import AnimationSelection from './AnimationSelection';
import Finish from './Finish'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
            galaxySelected: false,
            activeGalaxy: '',
            activeAnimation: '',
            faceUploaded: false,
            uploadedFileCloudinaryUrl: '',
            uploadedFilePublicId: '',
            nextDisabled: true
        };
        this.handleGalaxySelection = this.handleGalaxySelection.bind(this);
        this.handleFaceUpload = this.handleFaceUpload.bind(this);
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
            nextDisabled: true
        });
    };

    handleGalaxySelection = activeGalaxy => {
        this.setState({
            galaxySelected: true,
            activeGalaxy: activeGalaxy,
            nextDisabled: false
        });
    };

    handleAnimationSelection = activeAnimation => {
        this.setState({
            activeAnimation: activeAnimation,
            nextDisabled: false
        });
    };

    handleFaceUpload(uploadedFileCloudinaryUrl, uploadedFilePublicId) {
        this.setState({
            faceUploaded: true,
            uploadedFileCloudinaryUrl: uploadedFileCloudinaryUrl,
            uploadedFilePublicId: uploadedFilePublicId,
            nextDisabled: false
        });
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <GalaxySelection
                        onClick={this.handleGalaxySelection}
                        activeGalaxy={this.state.activeGalaxy}
                    />
                );
            case 1:
                return (
                    <FaceUpload
                        handleFaceUpload={this.handleFaceUpload}
                        faceUploaded={this.state.faceUploaded}
                        uploadedFileCloudinaryUrl={this.state.uploadedFileCloudinaryUrl}
                        uploadedFilePublicId={this.state.uploadedFilePublicId}
                    />
                );
            case 2:
                return (
                    <AnimationSelection
                        onClick={this.handleAnimationSelection}
                        activeAnimation={this.state.activeAnimation}
                    />
                );
            default:
                return '...';
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };
        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                {finished
                    ? <Finish activeGalaxy={this.state.activeGalaxy} activeAnimation={this.state.activeAnimation} />
                    :
                    <div className="test">
                        <Stepper activeStep={stepIndex}>
                            <Step>
                                <StepLabel>Select Galaxy</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Upload Image</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Select Animation</StepLabel>
                            </Step>
                        </Stepper>
                        <div style={contentStyle}>
                            <div className="stepper-buttons">
                                <div>{this.getStepContent(stepIndex)}</div>
                                <div style={{ marginTop: 12 }}>
                                    <RaisedButton
                                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                                        disabled={this.state.nextDisabled}
                                        primary={true}
                                        onTouchTap={this.handleNext}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Form;
