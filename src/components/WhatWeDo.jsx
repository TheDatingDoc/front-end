import "../assets/css/WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <h2>What We Do</h2>
      <div className="what-cards">
        <div className="what-card">
          <div className="what-icon">
            <i className="fas fa-user"></i> {/* Coach Icon */}
          </div>
          <h4>We Coach</h4>
          <p>
            One of the few dating coaching companies that provides expert advice
            for both men and women. This is accomplished through our one-on-one
            coaching as well as our Dating & Life Skills Academy e-courses.
          </p>
        </div>
        <div className="what-card">
          <div className="what-icon">
            <i className="fas fa-share-alt"></i> {/* Connect Icon */}
          </div>
          <h4>We Connect</h4>
          <p>
            Instead of connecting through tiresome dating apps, our company
            emphasizes building a connection over endless swiping. Our
            personalized matchmaking and video speed dating events have been
            proven to lead to better outcomes.
          </p>
        </div>
        <div className="what-card">
          <div className="what-icon">
            <i className="fas fa-info-circle"></i> {/* Inform Icon */}
          </div>
          <h4>We Inform</h4>
          <p>
            Constantly produce relevant news and commentary on the world of
            dating through our popular social media and podcast platforms. The
            Dating Doc is ranked as the #20 Top Dating and Relationship
            Influencer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
