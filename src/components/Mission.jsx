import "../assets/css/Mission.css";

const MissionSection = () => {
  return (
    <div className="mission-section">
      <h2>Our Mission</h2>
      <h3>The Cure for the Common Date</h3>
      <div className="mission-cards">
        <div className="mission-card">
          <div className="mission-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h4>Learn</h4>
          <p>
            Provide a safe atmosphere that encourages healthy vulnerability,
            breakthrough, accountability, and improvement. This will be
            accomplished through in-person coaching as well as video/e-courses.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">
            <i className="fas fa-users"></i>
          </div>
          <h4>Match</h4>
          <p>
            Serve as a venue for singles to meet by combining modern technology
            while humanizing the experience. Social events, video speed dating,
            and matchmaking will be quality channels used to disrupt the “swipe
            app” culture.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">
            <i className="fas fa-share-alt"></i>
          </div>
          <h4>Connect</h4>
          <p>
            Build a community of healthy daters that are ambassadors of positive
            change. The community will be built on inclusion, and will exchange
            knowledge and ideas using social media, podcasts, partnerships, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
