import Image from 'next/image'
import profilePic from "@/public/profilePic.jpeg"
import style from "@/style/pageStyle.module.css"
import { FC } from 'react';
import { skillData, projects } from "@/public/data/data.js"



interface skillGroup {
  name?: string;
  list: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

interface projectData {
  projectName?: string;
  description?: string;
  date?: Date;
  url?: string;
}

type dataProps = { skillData: skillGroup[] }
type projProps = { projects: projectData[] }

export default function Home() {


  return (
    <main className={`${style['h-100vh']} ${style['container-main']}`}>
      <Presentation />
      <Space />
      <Skillsection skillData={skillData} />
      <Space />
      <Projects projects={projects} />
    </main>
  )
}

const Presentation = () => {
  return (
    <div className={`${style["container-section"]} ${style["flex-row"]} ${style["align-center"]} ${style["flex-center"]} `}>
      <div className={`${style["container-text"]}  `}>
        <h1 className=''>Danilo Catalan Canales</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est impedit aliquid aspernatur pariatur voluptatum. Delectus voluptatum cumque, vel ea repellat molestias nulla quas aliquam consequuntur iure ex dolor reprehenderit et!</p>

      </div>

      <div className={`${style["container-image"]} `}>
        <Image src={profilePic} alt='profilePic' className={style.profilepic} />
      </div>
    </div>
  )
}

const Skillsection = ({ skillData }: dataProps) => {

  return <div className={`${style['container-section']} `}>
    <div className={`${style['container-text']} `}>
      <h1>
        Skill Set
      </h1>
      <p>The skills are set from 1 to 5 where 1 is basic understanding and 5 is expert level.</p>
    </div>
    <div className={`${style['']}`}>
      {skillData.map(dataPiece => {
        const header = dataPiece.name;
        const progList = dataPiece.list;
        return <div className={` ${style['container-innerGrid']} `}>
          <div>
            <h2>{header}</h2>
          </div>
          <div className={`${style['grid-1-1']}  `}>
            {progList.map(el => {
              const bars = new Array(el.level).fill(0);
              console.log(bars);

              return <div className={`${style['card']}  `}>
                <h3>{el.name}</h3>
                <div className={`${style["container-bars"]} `}>
                  {bars.map(bar =>
                    <div className={`${style["bar"]} `}>

                    </div>
                  )}
                </div>
              </div>
            })}
          </div>
        </div>
      })}

    </div>


  </div>

}


const Projects = ({ projects }: projProps) => {

  return <div className={`${style["container-section"]} `}>
    <div className={`${style['container-text']} `}>
      <h1>
        Projects
      </h1>
    </div>
    <div className={``}>
      {projects.map(dataPiece => {
        const name = dataPiece.projectName;
        const description = dataPiece.description;
        const date = dataPiece.date?.toDateString();
        const url = dataPiece.url;
        return <div className={` ${style['container-innerGrid']} `}>
          <div className={`${style["h-3"]} `}>
            <h2>{name}</h2>
          </div>
          <div className={`${style['flex-col']}  `}>
            <p>{description}</p>
            <h4>{date}</h4>
            {}
          </div>
        </div>
      })}

    </div>
  </div>
}



const Space = () => {
  return <div className={`${style["spaceSection"]} `}>

  </div>

}