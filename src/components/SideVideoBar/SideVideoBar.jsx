import "./SideVideoBar.scss";

const SideVideoBar = ({ details }) => {

    const mapping = details.map((object, index) => {
        return (
            <div key={index} className="sideVideoBar__container">
                <div className="sideVideoBar__container--box">
                    <img className="sideVideoBar__container--image" src={object.image} alt="" />
                    <div className="sideVideoBar__container--text">
                        <h4 className="sideVideoBar__container--text-title">{object.title}</h4>
                        <h4 className="sideVideoBar__container--text-channel">{object.channel}</h4>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="sideVideoBar">
                <h5 className="sideVideoBar__title">NEXT VIDEOS</h5>
                {mapping}
            </div>
        </>
    );
}

export default SideVideoBar;