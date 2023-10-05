import React from "react";

export default function TectStack(props) {
  const skills = ["C/C++","Python","Java","HTML","CSS","Javascript","tailwind css","Bootstrap","Node js","React js","Git","Github","Framer motion","UI designs","Figma","VS code"]

  return (
    <div className='tectStack' >
      <div className="technical-skills">
        <h1 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>My skills</h1>
        <div className="skills">
        {skills.map((e,index)=>(
            <span key={index}>{e}</span>
        ))}
        </div>
      </div>
    </div>
  )
}
