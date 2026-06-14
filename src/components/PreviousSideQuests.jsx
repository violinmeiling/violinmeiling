import './PreviousSideQuests.css';

function PreviousSideQuests() {
  return (
    <section className="previous-sidequests" id="sidequests">
      <div className="section-content">
        <h2>Previous side quests</h2>
        <p className="intro">
          Life before undergrad...
        </p>
        <div className="sidequest-links">
          <a href="#highschool" className="sidequest-card" id="highschool">
            <h3>Tonka</h3>
            <p>Go Skippers!</p>
            <span className="arrow">→</span>
          </a>
          <a href="/music" className="sidequest-card" id="music">
            <h3>Music</h3>
            <p>Why "violinmeiling"?</p>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PreviousSideQuests;
