import React from 'React';

import SplashHeader from './SplashHeader';
import SplashTopSectionLeft from './SplashTopSectionLeft';

class Splash extends React.Component{
  render(){
    return (
      <div className = "splash-page">
        <SplashHeader />
        <div className = "splash-top-section">
          <SplashTopSectionLeft />
          <img src="../../../assets/images/moes-tavern-splash.png" className="splash-img-top"/>
        </div>
        <div className = "splash-middle-section">
          <h1>Break out of the Inbox</h1>
          <p>Working in channels gives everyone on your team a shared view of progress and purpose</p>
          {/* youtube video here? */}
        </div>
        <div className = "splash-bottom-section">
          <div className = "splash-bottom-section-subsection">

            <img className = "splash-bottom-section-subsection-img" />
              {/* insert img1 here */}
            <p className = "splash-bottom-section-subsection-title">
              Conversations, organized</p>
            <p className = "splash-bottom-section-subsection-body">
              Instead of a single overstuffed inbox, conversations
              in Szylack happen in spaces called channels
            </p> 

          </div>
          <div className="splash-bottom-section-subsection">

            <img className="splash-bottom-section-subsection-img" />
            {/* insert img2 here */}
            <p className="splash-bottom-section-subsection-title">
              Get looped in, not out</p>
            <p className="splash-bottom-section-subsection-body">
              Szylack makes it simple to follow conversations or find
              important information in an easily searchable archive.
            </p>

          </div>

          <div className="splash-bottom-section-subsection">

            <img className="splash-bottom-section-subsection-img" />
            {/* insert img3 here */}
            <p className="splash-bottom-section-subsection-title">
              Give focus a chance</p>
            <p className="splash-bottom-section-subsection-body">
              Unlike email, Szylack lets you choose which conversations
              are most important — and which can wait.
            </p>

          </div>
        </div>
      </div>
    )

  }
}

export default Splash;