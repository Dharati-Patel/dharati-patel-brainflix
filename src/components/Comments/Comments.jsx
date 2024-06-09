import "./Comments.scss";
import commentImg from "../../assets/images/icons/add_comment.svg";

const Comments = ({ comments }) => {

    const CommentsList = comments.map((comment, index) => {
        return (
          <div key={index} className="comment__default--container">
            <div className="comment__default--container-image">
              <div className="comment__default--container-image-img"></div>
            </div>
            <div className="comment__default--container-header">
              <h2 className="comment__default--container-header-name">{comment.name}</h2>
              <h3 className="comment__default--container-header-date">{new Date(comment.timestamp).toLocaleDateString()}</h3>
            </div>
            <div className="comment__default--container-description">
              <p className="comment__default--container-description-text">
                {comment.comment}
              </p>
            </div>
          </div>
        );
    });

    return(
        <main>
            <div className="comment">
            <h1 className="comment__title">3 Comments</h1>
            <div className="comment__container">
            <div className="comment__container--image"></div>
            <form className="comment__input">
                <div className="comment__input--container">
                    <h5 className="comment__input--container--text">
                      JOIN THE CONVERSATION
                    </h5>
                    <div className="comment__input--container-box">
                      <textarea
                        className="comment__input--container--textarea"
                        name="name"
                        rows="10"
                        cols="50"
                        placeholder="Add a new comment">
                      </textarea>

                      <div className="comment__input--button">
                        <img className="comment__input--button-img" src={commentImg} alt="comment image" />  
                        <button className="comment__input--button-submit">COMMENT</button>
                      </div>
                    </div>
                </div>
            </form>
            </div>
            <div className="comment__default"> {CommentsList}</div>
        </div>
      </main>
    );
}

export default Comments;