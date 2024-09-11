import "../assets/css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <p>
          You took the first step in learning about us, now allow us to take the
          next step in learning from each other. Consider becoming a client and
          we guarantee you will become a more aware version of yourself. A
          version ready to maneuver dating much more efficiently and highly
          improve your chances of attracting the right person.
        </p>
      </div>

      <div className="team-section">
        <div className="team-member">
          <div className="image-placeholder"></div>
          <p className="team-member-name">Team Member</p>
          <p className="team-member-title">Title</p>
        </div>
        <div className="team-member">
          <div className="image-placeholder"></div>
          <p className="team-member-name">Team Member</p>
          <p className="team-member-title">Title</p>
        </div>
        <div className="team-member">
          <div className="image-placeholder"></div>
          <p className="team-member-name">Team Member</p>
          <p className="team-member-title">Title</p>
        </div>
      </div>
    </div>
  );
};

export default About;
