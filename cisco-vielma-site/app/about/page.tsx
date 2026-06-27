export default function About() {
  return (
    <section className="content aboutPage">
      <div className="aboutIntro">
        <p className="eyebrow">About</p>
        <h1>Photos, stories, and a bit of software</h1>
        <p>
            I'm based in Austin, TX, and I work at the intersection of technical thinking and creative observation, through photography, projects, and the small details of everyday life.        </p>
      </div>

      <div className="aboutGrid">
        <div className="contentCard">
          <h2>Photos</h2>
          <p>
            I shoot portraits, street scenes, and mood-driven frames with an emphasis on light, texture, and quiet color. I'm drawn to moments that feel calm, honest, and unforced.          </p>
        </div>

        <div className="contentCard">
          <h2>Software</h2>
          <p>
            Full-Stack Software Engineer working across payments, fintech, and capital markets. I focus on building reliable systems with clean, thoughtful user experiences.
          </p>
        </div>

        <div className="contentCard">
          <h2>Who I am</h2>
          <p>
            I studied computer science and data analytics at Wesleyan University, with experience across Amazon, Mastercard, and an investment firm. That mix shaped how I think about systems, structure, and scale in both code and practice.</p>
          <p>
            Outside of work, I'm usually riding my bike, exploring new places, or out with a camera, looking for small, quiet moments worth keeping.</p>
        </div>
      </div>
    </section>
  );
}
