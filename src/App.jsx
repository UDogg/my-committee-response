// src/App.jsx
import React from 'react';
import './App.css';
import heroImage from './a.jpg';

const App = () => {
  return (
    <div className="container">
      <header>
        <img src={heroImage} alt="Hero" className="hero-image" />
      </header>
      <main>
        <section className="introduction">
          <h1>Revised Notes for Co-Chair Committee</h1>
          <h2>Introduction</h2>
          <p>Dear Co-Chair Committee,</p>
          <p>Thank you for allowing me the opportunity to address the recent academic integrity violation decision. This matter is of utmost importance to me, and I hope to clarify several points and understand the rationale behind the committee's decision.</p>
        </section>
        <section className="addressing-points">
          <h2>Addressing Dr. Zhu’s Points</h2>
          <p>I have systematically refuted each of Dr. Zhu’s points and provided ample evidence contradicting his claims. Despite my efforts, the committee has upheld the violation. Here are the key points of my defense:</p>
          <ol>
            <li><strong>Increment/Decrement Operators</strong>: The use of increment and decrement operators within array access is a standard practice in C programming, which I have demonstrated proficiency in through prior coursework and projects.</li>
            <li><strong>While Loop Conditions</strong>: The while loop conditions in question are common constructs used in tree traversal algorithms, reflecting standard programming practices rather than copying.</li>
            <li><strong>Ternary Operators</strong>: Ternary operators are widely used in programming languages like C and JavaScript, which I have employed in my coursework and projects.</li>
            <li><strong>Implementation Time</strong>: The 16-minute implementation time referenced was the result of committing a pre-tested and debugged solution from a private repository where I had worked extensively on the assignment.</li>
          </ol>
        </section>
        <section className="request-clarification">
          <h2>Request for Clarification and Fair Process</h2>
          <p>I seek clarification on the following points:</p>
          <ul>
            <li><strong>Transparency</strong>: The hearing process lacked transparency. I request a detailed explanation of how my evidence was evaluated and the criteria used to determine the violation.</li>
            <li><strong>Technical Expertise</strong>: Given the technical nature of the allegations, I request a detailed explanation from the programming expert on how they concluded that my work was not independently produced.</li>
            <li><strong>Consideration of Evidence</strong>: The promptness of the decision makes me question whether my evidence was thoroughly reviewed. I would like to know if the committee has ever ruled in favor of a student in similar cases.</li>
          </ul>
        </section>
        <section className="personal-impact">
          <h2>Personal Impact and Future Concerns</h2>
          <p>This violation has significantly impacted me:</p>
          <ul>
            <li><strong>Academic Record</strong>: This is my second violation, raising concerns about my academic standing and future opportunities. Will this violation be reflected on my degree and transcripts, affecting my career prospects?</li>
            <li><strong>Mental Well-being</strong>: The fear of being wrongly accused has affected my mental well-being. I now spend excessive time running my homework through multiple AI detectors and plagiarism checkers, which detracts from my learning experience.</li>
          </ul>
        </section>
        <section className="conclusion">
          <h2>Conclusion</h2>
          <p>I respectfully request the committee to reconsider my case in light of the detailed evidence and explanations I have provided. I also seek clarity on the long-term implications of this decision on my academic record and future career.</p>
          <p>Thank you for your time and consideration.</p>
          <p>Sincerely,</p>
          <p>UC Choudhary</p>
        </section>
      </main>
    </div>
  );
};

export default App;
