import Image from "next/image";
import profilePic from "@/public/profil1.jpeg";
import logo from "@/public/su_logo.svg";
import style from "@/style/pageStyle.module.css";
import { FC } from "react";
import { skillData, projects, workexp, contact } from "@/public/data/data.js";
import Link from "next/link";

interface skillGroup {
	name?: string;
	list: Skill[];
}

interface Skill {
	name: string;
	level: number;
}

interface projectData {
	projectName: string;
	description: string;
	extraTitle?: string;
	startDate: Date;
	endDate?: Date;
	url?: string;
	pdf?: string;
}

interface workData {
	Company: string;
	location: string;
	workedAs: string;
	description: string;
	startDate: Date;
	endDate?: Date;
	type?: string;
}

interface contactData {
	Telephone: number;
	Email: string;
	Location: string;
	LinkedIn: string;
}

type dataProps = { skillData: skillGroup[] };
type projProps = { projects: projectData[] };
type workProps = { workexp: workData[] };
type contactProps = { contact: contactData };

export default function Home() {
	return (
		<main className={`${style["h-100vh"]} ${style["container-main"]}`}>
			<Presentation />
			<Skillsection skillData={skillData} />
			<Workexp workexp={workexp} />
			<Projects projects={projects} />
			<Contact contact={contact} />
		</main>
	);
}

const Presentation = () => {
	return (
		<div
			className={`${style["container-section"]} ${style["flex-row"]} ${style["align-center"]} ${style["flex-center"]} `}
		>
			<div className={`${style["container-text"]} ${style["p-0"]} `}>
				<h1 className="">Danilo Catalan Canales</h1>
				<p>
					My journey is a tapestry of diverse experiences, each thread
					contributing to my skill set. Starting up as a light and sound
					technician to a customer service agent, I honed adaptability and
					communication skills. Transitioning to tech, I have studied in both
					Stockholms University and The Royal Institute of Technology to pursue
					a degree in Computer science tackling complex projects like a Physics
					Network Simulation Tool as well as genome visualization tool. As a
					Consultant at Betty Booth AB, I crafted websites and developed APIs,
					ensuring seamless functionality. Freelancing as a Fullstack Developer,
					I prioritized efficiency and user satisfaction. Fluent in Spanish,
					Swedish, and English, I&apos;m equipped to communicate effectively across
					borders and cultures.
				</p>
			</div>

			<div className={`${style["container-image"]} `}>
				<p className={`${style.font__centered}`}></p>
				<Image
					src={profilePic}
					alt="profilePic"
					className={style.profilepic}
					height={800}
					width={400}
				/>
			</div>
		</div>
	);
};

const Skillsection = ({ skillData }: dataProps) => {
	return (
		<div className={`${style["container-section"]} ${style["mb-8"]}`}>
			<div className={`${style["container-text"]} ${style["mb-0"]} `}>
				<h1>Education & programming skill set</h1>
				<p>
					This section presents my education and different programming language
					skills which I have acquired over the years. The education section
					displays relevant courses for the degree. <br />
					The skill section tells an approximate level of knowledge of every
					programming language, where 1 is basic knowledge and 5 is expert
					knowledge.
				</p>
			</div>
			<div className={`${style["flex-col"]}`}>
				<div className={`${style["container-innerGrid"]}  `}>
					<div
						className={`${style["flex-row"]} ${style["flex-space_between"]}`}
					>
						<div className={`${style["flex-col"]}`}>
							<h2>University Of Stockholm</h2>
							<h3>Bachelor degree in Computer Science</h3>
						</div>
						<div>
							<Image src={logo} alt="su_logo" width={120} height={60} />
						</div>
					</div>

					<p className={`${style["font_size_small"]}`}>
						Programming I & II (Scheme, Python) | Object-Oriented Programming
						(Java) | Programming Paradigms (C, Python, Java, Haskell, Prolog,
						JavaScript) | Computer Graphics, and User Interfaces (C++) |
						Numerical Analysis (Python, MATLAB) |{" "}
						<b>Database Technology (SQL, XML, XQuery)</b> | Algorithms and
						Complexity | <b>Software Design (C#)</b> | <b>Machine learning</b> |
						Webbdesign I | Webbdesign II
					</p>
				</div>
				{skillData.map((dataPiece) => {
					const header = dataPiece.name;
					const progList = dataPiece.list;
					return (
						<div className={` ${style["container-innerGrid"]} `} key={header}>
							<div>
								<h2>{header}</h2>
							</div>
							<div className={`${style["grid-1-1"]}  `}>
								{progList.map((el) => {
									const bars = new Array(el.level).fill(0);

									return (
										<div className={`${style["card"]}  `} key={el.name}>
											<h3>{el.name}</h3>
											<div className={`${style["container-bars"]} `}>
												{bars.map((bar, index) => (
													<div
														className={`${style["bar"]} `}
														key={el.name + index}
													></div>
												))}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Projects = ({ projects }: projProps) => {
	return (
		<div className={`${style["container-section"]} ${style["mb-8"]} `}>
			<div className={`${style["container-text"]} ${style["mb-0"]}`}>
				<h1>Projects</h1>
				<p>Projects that I&apos;ve been part of or made on my own.</p>
			</div>
			<div className={``}>
				{projects.reverse().map((dataPiece) => {
					const name = dataPiece.projectName;
					const description = dataPiece.description;
					const extraTitle = dataPiece.extraTitle ? (
						<h4>
							<br />
							{dataPiece.extraTitle}
						</h4>
					) : undefined;
					let startdate = dataPiece.startDate
						? dataPiece.startDate.getFullYear() +
						  "/" +
						  dataPiece.startDate?.getMonth()
						: undefined;
					let endDate = dataPiece.endDate
						? dataPiece.endDate.getFullYear() +
						  "/" +
						  dataPiece.endDate.getMonth()
						: null;

					let date = startdate
						? startdate + " - " + (endDate ? endDate : "Ongoing")
						: null;

					const url = dataPiece.url;
					const pdf = dataPiece.pdf;
					return (
						<div className={` ${style["container-innerGrid"]} `} key={name}>
							<div className={`${style["h-3"]} `}>
								<h2>{name}</h2>
								{extraTitle}
								<br />
								<h5>{date}</h5>
							</div>
							<div>
								<p>{description}</p>
							</div>
							<div className={`${style["flex-col"]}  `}>
								{url ? <Link href={url}>Project Page</Link> : null}
								{pdf ? (
									<Link href={{ pathname: pdf }}>Project Paper</Link>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Workexp = ({ workexp }: workProps) => {
	return (
		<div className={`${style["container-section"]} ${style["h-50vh"]} `}>
			<div className={`${style["container-text"]} ${style["mb-0"]} `}>
				<h1>Work Experience</h1>
				<p>Work experience that I&apos;ve accumulated throughout the years.</p>
			</div>
			<div className={``}>
				{workexp.reverse().map((dataPiece, index) => {
					const name = dataPiece.Company;
					const workingAs = dataPiece.workedAs;
					const description = dataPiece.description.split("\r");

					let startdate = dataPiece.startDate
						? dataPiece.startDate.getFullYear() +
						  "/" +
						  (dataPiece.startDate?.getMonth() === 0
								? "12"
								: dataPiece.startDate?.getMonth())
						: undefined;
					let endDate;
					if (dataPiece.endDate) {
						let temp: string =
							dataPiece.endDate.getFullYear() +
							"/" +
							(dataPiece.endDate?.getMonth() === 0
								? 12
								: dataPiece.endDate?.getMonth());

						endDate = temp;
					} else {
						endDate = "Current";
					}
					let date = startdate ? startdate + " - " + endDate : endDate;
					return (
						<div className={` ${style["container-innerGrid"]} `} key={index}>
							<div className={`${style["h-3"]} `}>
								<h2>{workingAs}</h2>
								<br />
								<h4>{name}</h4>
								<br />
								<h5>{date}</h5>
							</div>
							<div>
								<ul>
									{description.map((element) => {
										return (
											<>
												<li>{element}</li>
												<br />
											</>
										);
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Space = () => {
	return <div className={`${style["spaceSection"]} `}></div>;
};

function Contact({ contact }: contactProps) {
	return (
		<div className={`${style["container-section"]} ${style["h-50vh"]} `}>
			<div className={`${style["container-text"]} ${style["mb-0"]}`}>
				<h1>Contact</h1>
			</div>

			<div className={`${style["container-innerGrid"]} `}>
				<p className="contact">
					Telephone: +{contact.Telephone}
					<br />
					<br />
					Email: {contact.Email}
					<br />
					<br />
					LinkedIn: <Link href={contact.LinkedIn}>My LinkedIn Profile</Link>
					<br />
					<br />
					Located: {contact.Location}
					<br />
					<br />
					Github:{" "}
					<Link href="https://github.com/DCatCan">
						My previous work and projects
					</Link>
				</p>
			</div>
		</div>
	);
}
