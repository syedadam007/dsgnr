import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App cloud-bg">
      <header className="landing-header">
        <div className="logo">DSGNR®</div>
        <div className="menu">Menu</div>
      </header>
      <main className="landing-main">
        <img src="/assets/box.png" alt="DSGNR Box" className="box-img" />
        <h1 className="headline">
          We don't chase trends. We carry designer DNA and birth icons. Where legends are raised, and history's written in Helvetica.
        </h1>
        <button className="coming-soon-btn">Coming Soon <span className="arrow">→</span></button>
      </main>
    </div>
  );
}

export default App;
