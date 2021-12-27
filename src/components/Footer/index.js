import React from 'react';

function Footer() {
  return (
    <footer className="flex-row px-1">
      <div>
        <github class="contact-details flex-row">
            <h3>Github Page</h3>
            <a href="git@github.com:rvanooyen">git@github.com:rvanooyen</a>
        </github>
        <linkedin class="contact-details flex-row">
            <h3> Linkedin Page</h3>
            <a href="www.linkedin.com/in/robert-vanooyen-9a88301a">www.linkedin.com/in/robert-vanooyen-9a88301a</a>
        </linkedin>
      </div>      
    </footer>
  );
}

export default Footer;