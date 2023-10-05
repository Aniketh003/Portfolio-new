import resume from './images/Busavale Dathrao.pdf';

export default function About(props) {
  return (
    <div className='About' id='About'>
      <div className="about_info" >
        <h1 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>About me</h1>
        <p>
          "I am a passionate computer science student with a strong focus on frontend
          development and beginner-level UI design. My journey in the world of technology
          has been driven by a relentless curiosity and a love for solving complex problems.
          I have honed my skills in Data Structures and Algorithms, equipping me with a
          solid foundation for tackling coding challenges.
          <br />
          <br />
          My creative side finds expression through crafting intuitive user interfaces that
          not only look appealing but also enhance user experiences. As a forward-thinking
          developer, I constantly seek opportunities to learn and adapt to the ever-evolving
          tech landscape.
          <br />
          <br />
          I am excited to embark on new coding adventures, collaborating with like-minded
          individuals, and pushing the boundaries of what's possible in the realm of
          technology. Let's code the future together!"
        </p>
        <div className="about-btn">
          <a href={resume} download="Aniketh-resume" target="_blank" rel="noopener noreferrer">
            <button id='resume-btn'>Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}
