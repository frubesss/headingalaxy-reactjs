import React from 'react';
import { Step, StepLabel, Stepper } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FaceUpload from './FaceUpload';
import GalaxySelection from './GalaxySelection';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
            galaxySelected: false,
            activeGalaxy: '',
            faceUploaded: false,
            nextDisabled: true,
            uploadedFileCloudinaryUrl: '',
            uploadedFilePublicId: ''
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

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
        this.setState({ nextDisabled: false });
    };

    handleGalaxySelection = activeIndex => {
        this.setState({
            galaxySelected: true,
            activeGalaxy: activeIndex,
            nextDisabled: false
        });
    };

    handleFaceUpload(uploadedFileCloudinaryUrl, uploadedFilePublicId) {
        this.setState({
            faceUploaded: true,
            nextDisabled: false,
            uploadedFileCloudinaryUrl: uploadedFileCloudinaryUrl,
            uploadedFilePublicId: uploadedFilePublicId
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
                return '...';
            default:
                return '...';
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
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
                    {finished
                        ? <div>
                            <a
                                href="#"
                                onClick={event => {
                                    event.preventDefault();
                                    this.setState({ stepIndex: 0, finished: false });
                                }}
                            >
                                Click here
                            </a>{' '}
                            to reset the example.
                        </div>
                        : <div className="stepper-buttons">
                            <div>{this.getStepContent(stepIndex)}</div>
                            <div style={{ marginTop: 12 }}>
                                <FlatButton
                                    label="Back"
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrev}
                                    style={{ marginRight: 12 }}
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                                    disabled={this.state.nextDisabled}
                                    primary={true}
                                    onTouchTap={this.handleNext}
                                />
                            </div>
                        </div>}
                </div>
            </div>
        );
    }
}

export default Form;
