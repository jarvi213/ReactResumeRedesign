import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <h1> Sally Student, PhD</h1>
                <address>
                    <img src = "https://i.pinimg.com/originals/9f/81/2d/9f812d4cf313e887ef99d8722229eee1.jpg" alt = "Sally Student's Photo"/>
                    <p>Sally Student, PhD
                        Telephone: 555-867-5309
                    <a href = "mailto:sallystu123@umn.edusubject=Your20%resume">Email Sally</a> 
                    <a href = "http://www.linkedin.com/SallyStudent">LinkedIn</a> 
                    <a href = "http://www.github.com/sallystudent">GitHub</a>
                    </p>
                </address>
            <section id="education">
            <h3>University of Minnesota</h3>
            <ul>
            <li><u>Dates of attendance:</u> 2014-2018</li>
            <li><u>Major:</u> Anthropology</li>
            </ul>
            <h3>Western Wyoming Community College</h3>
            <ul>
              <li><u>Dates of attendance:</u> 2012-2014</li>
              <li><u>Major:</u> Linguistics</li>
            </ul>
          <h2>Work Experience</h2>
            <section id="employment">
            <h3>Target</h3>
          <ul>
            <li><b>Dates of employment:</b> 2016-present</li>
            <li><b>Job Title:</b> UX Developer</li>
            <li><b>Job Description:</b>Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters.</li>
          </ul>
        <h3>Securian</h3>
          <ul>
            <li><b>Dates of employment:</b> 2014-2015</li>
            <li><b>Job Title:</b> Financial anthropologist</li>
            <li><b>Job Description:</b>Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.</li>
          </ul>
        <h3>University of Minnesota</h3>
          <ul>
            <li><b>Dates of employment:</b> 2011-2013</li>
            <li><b>Job Title:</b> Anthropology professor</li>
            <li><b>Job Description:</b>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</li>
          </ul>
            </section>
            </section>
      </header>
    </div>
  );
}

export default App;
