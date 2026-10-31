import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <section className="hero simpleHero">
        <div className="heroText">
          <p className="eyebrow">Full-Stack Software Engineer • Photographer</p>
          <h1>Hi, I’m Cisco.</h1>
          <p className="subtitle">
            Welcome to this quiet collection of photos and small stories from the last few years of my life.
          </p>
          <div className="cta">
            <a href="/photos">See photos</a>
            <a href="/about" className="secondary">About</a>
          </div>
        </div>

        <div className="heroImage simpleImage">
          <Image
            src="/profile-pic.jpg"
            alt="Cisco Vielma"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
            className="avatar"
          />
        </div>
      </section>
    </main>
  );
}
