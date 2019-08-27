import React from "react";

const SKILLS = [
  { label: 'Frontend', percent: '90%' },
  { label: 'Backend', percent: '80%' },
  { label: 'DevOps', percent: '70%' },
]

const SKILLS_2 = [
  { label: 'UI/UX', percent: '90%' },
  { label: 'System Design', percent: '80%' },
  { label: 'Managing', percent: '70%' },
]

function Skills() {

  const skills = SKILLS.map((skill, index) => (
    <div className="skill" key={index}>
      <h4>{skill.label}</h4>

      <div className="skill-bar" >
        <div className="percent" style={{ width: skill.percent }} ></div>
      </div>
    </div>
  ))

  const skills_2 = SKILLS_2.map((skill, index) => (
    <div className="skill" key={index}>
      <h4>{skill.label}</h4>

      <div className="skill-bar" >
        <div className="percent" style={{ width: skill.percent }} ></div>
      </div>
    </div>
  ))


  return(
    <div className="block skills-block">
      
      <div className="section-header">
        <h2>My Skills</h2>
        <p>I"ve got really amazing skills</p>
      </div>
      
      <div className="row">
      
        <div className="col-md-6">
          {skills}
        </div>
        
        <div className="col-md-6">
          {skills_2}
        </div>
        
      </div>
      
    </div>
  );
}

export default Skills;
