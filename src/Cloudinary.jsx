import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import config from '../config.json';

const CLOUDINARY_UPLOAD_PRESET = config.upload_preset;
const CLOUDINARY_UPLOAD_URL = config.upload_url;

class Cloudinary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: '',
            uploadedFilePublicId: '',
            imageUploaded: false
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        const upload = request
            .post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.props.faceUploaded();
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                    uploadedFilePublicId: response.body.public_id,
                    imageUploaded: true
                });
            }
        });
    }

    render() {
        const { imageUploaded } = this.state;
        return (
            <div>
                {imageUploaded
                    ? ''
                    : <Dropzone
                        className={'cloudinary-dropzone'}
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}
                    >
                        <p>Drop an image or click to select a file to upload.</p>
                    </Dropzone>}
                <div>
                    <div>
                        {this.state.uploadedFileCloudinaryUrl === ''
                            ? null
                            : <div>
                                <CloudinaryContext cloudName="df3reurbk">
                                    <Image publicId={this.state.uploadedFilePublicId}>
                                        <Transformation
                                            gravity="face"
                                            crop="thumb"
                                            width="150"
                                            height="150"
                                            radius="max"
                                        />
                                    </Image>
                                </CloudinaryContext>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cloudinary;
