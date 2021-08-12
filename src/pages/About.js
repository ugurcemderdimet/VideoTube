import React from "react";

export default function About() {
  return (
    <div className="container my-5 ">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg ">
        <div className="p-3 p-lg-5 pt-lg-3 ">
          <h1 className="display-6 fw-bold lh-1 mb-4 ">About Me</h1>
          <p className="lead">
            I graduated from Maçka Akif Tuncel Anatolian Technical High School
            Information Technologies department with 2. highest ranked student
            degree in 2015. I graduated from Beykent University Software
            Engineering (EN / TR) department and IS'te YBL program, which is a
            joint project of Turkiye Is Bankasi and Yenibirlider Association. I
            am currently doing my master's degree in Yıldız Technical University
            Computer Engineering Department. I am a software engineer who is
            always open to learning, motivated, suitable for teamwork and strong
            interpersonal communication. I am also a traveler and I am happy to
            meet new people and get to know them and their lives. It is my
            interest to follow countries' economies, governments and
            international relations.
          </p>
          <a
            className="btn btn-dark"
            href="mailto:ugurcemderdimet@gmail.com"
            role="button"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
