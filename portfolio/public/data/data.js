export const skillData = [
    {
        name: "Web",
        list: [
            { name: "HTML", level: 5 },
            { name: "SCSS", level: 4, },
            { name: "CSS", level: 4, },
            { name: "JavaScript", level: 4, },
            { name: "TypeScript", level: 3, }
        ]
    },
    {
        name: "Framework",
        list: [
            { name: "Next.js", level: 4, },
            { name: "Prisma", level: 4, },
            { name: "React", level: 4, }]
    },
    {
        name: "Databases",
        list: [
            { name: "SQL", level: 4 },
            { name: "PostgreSQL", level: 4, },
            { name: "MongoDB", level: 4 }

        ]
    },
    {
        name: "Other Programming Languages",
        list: [
            { name: "Python", level: 5 },
            { name: "Java", level: 4 },
            { name: "Matlab", level: 3 },
            { name: "C", level: 1 },
            { name: "C#", level: 2 },
            { name: "C++", level: 3 },
        ]
    },
    {
        name: "Languages",
        list: [
            { name: "English", level: 5 },
            { name: "Swedish", level: 5 },
            { name: "Spanish", level: 5 },
        ]
    }
]

export const projects = [
    {
        projectName: "Physics Network Simulation Tool for Avalanche Studios: Group Project (C++)",
        description: "Una API que integra la biblioteca de red RakNet con el motor de física Havok para simular la conexión entre el servidor y el cliente, visualizar y registrar estadísticas de ancho de banda.",
        startDate: new Date(2018, 1),
        endDate: new Date(2018, 5),
    },
    {
        projectName: "Genome visualization tool for general use, Input Generated Genome Browser",
        description: "Un estudio que presenta el desarrollo de una herramienta de visualización de genes llamada navegador de genes generado por entrada, o IGGB por sus siglas en inglés (Input Generated Gene Browser), que tiene como objetivo proporcionar un navegador de genes fácil de usar para los usuarios.",
        endDate:new Date(2020, 3),
        url: "https://kandidat-exam.vercel.app/userinput"
    }
]