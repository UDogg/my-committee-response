// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import heroImage from './a.jpg';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <h2 style={{ textAlign: 'center', cursor: 'pointer' }} onClick={toggleSection}>
        {title} {isOpen ? '▲' : '▼'}
      </h2>
      {isOpen && <div className="content">{children}</div>}
    </section>
  );
};

const ToggleContent = ({ buttonText, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="toggle-content">
      <button className="toggle-button" onClick={toggleContent}>{buttonText}</button>
      {isContentVisible && <p>{content}</p>}
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <header>
        <img src={heroImage} alt="Hero" className="hero-image" />
      </header>
      <main>
        <CollapsibleSection title="Introduction">
        <hr />
          <h4>Dear Co-Chair Committee,</h4>
          <p>Thank you for allowing me the opportunity to address the recent academic integrity violation decision. This matter is of utmost importance to me, and I hope to clarify several points and understand the rationale behind the committee's decision.</p>
          <p>In case you are wondering this is a React Project not optimized for SEO.</p>
          <p><i>Translation: The content of this website is private unless I wish to make it public.</i></p>
          <p>Penn State is a diverse institution, attracting students from all backgrounds and all walks of life, inflicting a large financial burden on themselves and their families. It is sad that the students' points are not taken into account, and the instructor cannot imagine that a student may be more talented than he perceives.</p>
        </CollapsibleSection>
        <hr />
        <h2 style={{ textAlign: 'center'}}>View Evidence</h2>

        <div className="button-container">
    <a href="https://pennstateoffice365-my.sharepoint.com/:b:/g/personal/ufc5009_psu_edu/EfHnv07ic19Es6fbbSo83t0BT9mOjck12sShbNTu7GlM_g?e=hr5qoK" target="_blank" rel="noopener noreferrer" className="left-align">
        <ToggleContent buttonText="View Dr. Zhu's document" />
    </a>
    <a href="https://pennstateoffice365-my.sharepoint.com/:b:/g/personal/ufc5009_psu_edu/EYXUc6pt1HRBuEmnl7mvFzgBZaoPhKgETvI1p09uxPyt6Q?e=qdkjGL" target="_blank" rel="noopener noreferrer" className="center-align">
        <ToggleContent buttonText="View my response" content="Please Please read this." />
    </a>
    <a href="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/ufc5009_psu_edu/EW9x2zXbiMFHoNfTtnLDmyYB5fy5YGHz6OjAnigAj0JKAQ?e=ejRAe4" target="_blank" rel="noopener noreferrer" className="right-align">
        <ToggleContent buttonText="View my additional comments" content="Please read this." />
    </a>
</div>

  <hr />
  <CollapsibleSection title="Addressing Dr. Zhu’s Points">
  <hr />
  <p>I have systematically refuted each of Dr. Zhu’s points and provided ample evidence contradicting his claims. I have dug up evidence from the past and revealed my programming prowess showcased by my website and GitHub profile. Despite my efforts, the committee has upheld the violation. Let me reiterate the key points of my defense:</p>
  
  
  <ol>
    <li><strong>Increment/Decrement Operators</strong>: The use of increment and decrement operators within array access is a standard practice in C programming, which I have demonstrated proficiency in through prior coursework and projects.</li>
    <li><strong>While Loop Conditions</strong>: The while loop conditions in question are common constructs used in tree traversal algorithms, reflecting standard programming practices rather than copying.</li>
    <li><strong>Ternary Operators</strong>: Ternary operators are widely used in programming languages like C and JavaScript, which I have employed in my coursework and projects.</li>
    <li><strong>Implementation Time</strong>: The 16-minute implementation time referenced was the result of committing a pre-tested and debugged solution from a private repository where I had worked extensively on the assignment.</li>
  </ol>
</CollapsibleSection>
<hr />
        <CollapsibleSection title="Request for Clarification and Fair Process">
        <hr />
          <p>I seek clarification on the following points:</p>
          <ul>
            <li><strong>Transparency</strong>: The hearing process lacked transparency. I request a detailed explanation of how my evidence was evaluated and the criteria used to determine the violation.</li>
            <li><strong>Technical Expertise</strong>: Given the technical nature of the allegations, I request a detailed explanation from the programming expert on how they concluded that my work was not independently produced.</li>
            <li><strong>Consideration of Evidence</strong>: The promptness of the decision makes me question whether my evidence was thoroughly reviewed. I would like to know if the committee has ever ruled in favor of a student in similar cases.</li>
          </ul>
        </CollapsibleSection>
        <hr />
        <CollapsibleSection title="Personal Impact and Future Concerns">
        <hr />
          <p>This violation has significantly impacted me:</p>
          <ul>
            <li><strong>Academic Record</strong>: This is my second violation, raising concerns about my academic standing and future opportunities. Will this violation be reflected on my degree and transcripts, affecting my career prospects?</li>
            <li><strong>Mental Well-being</strong>: The fear of being wrongly accused twice has affected my mental well-being. I now spend excessive time running my homework through multiple AI detectors and plagiarism checkers out of sheer paranoia, which detracts from my learning experience.</li>
          </ul>
        </CollapsibleSection>
        <hr />
        <CollapsibleSection title="Conclusion">
        <hr />
        
          <p>I respectfully request the co-chair committee to reconsider my case and actually read through the detailed evidence and explanations I have provided. Despite various struggles I have managed to maintain a relatively unblemished record until this semester, <mark>so I seek clarity on the long-term implications of this decision on my academic record and future career because that will dictate how I proceed.</mark></p>
          </CollapsibleSection>
          <mark>Please read through my response by clicking the centered button. It will hopefully make things clearer.</mark>
          <p>Thank you for your time and consideration.</p>
          <p>Sincerely,</p>
          <p><strong>UC Choudhary</strong></p>
        
      </main>
    </div>
  );
};

export default App;
