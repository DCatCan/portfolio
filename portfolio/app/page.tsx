import Image from 'next/image'
import profilePic from "@/public/profilePic.jpeg"
import style from "@/style/pageStyle.module.css"
import { FC } from 'react';
import { skillData } from "@/public/data/skills.js"



interface skillGroup {
  name?: string;
  list: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

type dataProps = { skillData: skillGroup[] }

export default function Home() {


  return (
    <main className={`${style['h-100vh']} ${style['container-main']} `}>
      <Presentation />
      <Skillsection skillData={skillData} />
    </main>
  )
}

const Presentation = () => {
  return (
    <div className={`${style["container-section"]} ${style["w-6"]} ${style['flex-row']}`}>
      <div className={`${style["container-text"]} `}>
        <h1 className=''>Danilo Catalan Canales</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est impedit aliquid aspernatur pariatur voluptatum. Delectus voluptatum cumque, vel ea repellat molestias nulla quas aliquam consequuntur iure ex dolor reprehenderit et!</p>

      </div>

      <div className={`${style["container-image"]}`}>
        <Image src={profilePic} alt='profilePic' className={style.profilepic} />
      </div>
    </div>
  )
}

const Projects = () => {

  return (
    <div className=''>

    </div>
  )
}

const Skillsection = ({ skillData }: dataProps) => {

  return <div className={`${style['container-section']} ${style['flex-col']} `}>
    <h1>
      Skillz
    </h1>
    <div className={`${style["flex-col"]}  `}>
      {skillData.map(skillGroup => {
        const skillName = skillGroup.name;
        const skillList = skillGroup.list;
        return <div className={`${style["container__skillSection"]} ${style["mt-4"]}`}>
          <div className={`${style["w-100"]} `}>
            <h2>
              {skillName}
            </h2>
          </div>
          <div className={`${style['grid']} `}>
            {
              skillList.map((aSkill, index) =>

                <Card name={aSkill.name} level={aSkill.level} key={index} />

              )
            }
          </div>


        </div>
      })}
    </div>

  </div>

}

const Card: FC<Skill> = ({ name, level }) => {

  return <div className={`${style['card']} `}>
    <h3>{name} {'->'} </h3>
    <p>Level: {level}</p>

  </div>
}