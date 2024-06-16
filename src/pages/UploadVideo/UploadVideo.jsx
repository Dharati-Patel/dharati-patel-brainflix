import "./UploadVideo.scss";
import publishImg from "../../assets/images/icons/publish.svg";

const UploadVideo = () => {

    return(
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__container--video">
                    <h2 className="upload__container--video-subtitle">VIDEO THUMBNAIL</h2>
                    <div className="upload__container--video-main"></div>
                </div>
                <form className="upload__container--form">
                    <h5 className="upload__container--form-title">TITLE YOUR VIDEO</h5>
                    <textarea className="upload__container--form-text" name="name" rows="10" cols="50" placeholder="Add a title to your video"></textarea>
                    <h5 className="upload__container--form-description">ADD A VIDEO DESCRIPTION</h5>
                    <textarea className="upload__container--form-comment" name="comment" rows="10" cols="50" placeholder="Add a title to your video"></textarea>
                    <div className="upload__container--form-button">
                        <div className="upload__container--form-button-publish">
                            <img className="upload__container--form-button-publish-img" src={publishImg} alt="publish image" />     
                            <button className="upload__container--form-button-publish-one">PUBLISH</button>
                        </div>
                        
                        <button className="upload__container--form-button-cancel">CANCEL</button>
                    </div>
                </form>
            </div>
        </section>
    );

}

export default UploadVideo;