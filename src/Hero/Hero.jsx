import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Stranger Things</h1>

        <p>
          When a young boy disappears, a small town uncovers a mystery
          involving secret experiments, terrifying supernatural forces,
          and one strange little girl.
        </p>

        <div className="hero-buttons">
          <button className="play-btn">▶ Play</button>

          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;