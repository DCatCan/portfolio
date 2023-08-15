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
    <main className={`${style['h-100vh']} ${style['container-main']}`}>
      <Presentation />
      <Skillsection skillData={skillData} />
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
    </div>
    <div className={`${style['container-innerSection']}`}>
      {skillData.map(dataPiece => {
        const header = dataPiece.name;
        const progList = dataPiece.list;
        return <div className={` ${style['container-innerGrid']} `}>
          <div>
            <h2>{header}</h2>
          </div>
          <div className={`${style['grid-1-1']}  `}>
            {progList.map(el => {
              return <div className={`${style['card']} ${style['flex-row']}${style['flex-center']} `}>
                <h3>{el.name}</h3>
                <p>{el.level}</p>
              </div>
            })}
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