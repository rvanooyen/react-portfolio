import React from 'react';

function Resume() {
  return (
    <div class="flex-row">
        <h2 class="section-title secondary-border">
            Resume
        </h2>
        <div class="resume-doc">
            <a href="./assets/Vanooyen_Resume_v3.0.docx">Robert Vanooyen's Resume</a>
        </div>
        <ul class="flex-row">Skill list</ul>
            <li>react</li>
            <li>node.js</li>
    </div>
  );
}

export default Resume;