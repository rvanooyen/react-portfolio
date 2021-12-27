import React from 'react';
import coverImage from "../../assets/images/IMG-0158.jpg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <p>
        I am a Air Force veteran with a bachelor's degree in Computer Information Science.  I have project management experience with a background in Information Technology.
      </p>
    </section>
  );
}

export default About;