import "./UploadVideo.scss";
import publishImg from "../../assets/images/icons/publish.svg";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const UploadVideo = () => {

  const navigate = useNavigate();

  const postVideoDetails = async (eventRec) => {
    try {
      const response = await axios.post(`${API_URL}videos`, {
        title: eventRec.target.name.value,
        channel: eventRec.target.comment.value,
      });
      console.log(response);
      eventRec.target.reset();
    } catch (error) {
      console.log("Error", err);
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    postVideoDetails(event);
    navigate('/');
  };

  return (
    <section className="upload_form">
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__container">
          <div className="upload__container--video">
            <h2 className="upload__container--video-subtitle">VIDEO THUMBNAIL</h2>
            <div className="upload__container--video-main"></div>
          </div>
          <form className="upload__container--form" onSubmit={handleSubmit}>
            <h5 className="upload__container--form-title">TITLE YOUR VIDEO</h5>
            <textarea
              className="upload__container--form-text"
              name="name"
              rows="10"
              cols="50"
              placeholder="Add a title to your video"
            ></textarea>
            <h5 className="upload__container--form-description">ADD A VIDEO DESCRIPTION</h5>
            <textarea
              className="upload__container--form-comment"
              name="comment"
              rows="10"
              cols="50"
              placeholder="Add a description to your video"
            ></textarea>
            <div className="upload__container--form-button">
              <div className="upload__container--form-button-publish">
                <img
                  className="upload__container--form-button-publish-img"
                  src={publishImg}
                  alt="publish image"
                />
                <button className="upload__container--form-button-publish-one" onClick={() => alert('You have submitted data successfully!')}>PUBLISH</button>
              </div>
              <button
                type="button"
                className="upload__container--form-button-cancel"
                onClick={() => alert('Form submission canceled')}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadVideo;
