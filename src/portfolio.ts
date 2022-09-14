const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://edgarpino.com',
  title: 'Edgar',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Edgar Pino',
  role: 'Sr. Machine Learning Engineer',
  description:
    'I’m a passionate Machine Learning Engineer @ Pluralsight. I have experience building scalable recommender systems, data intensive applications, and distributed systems. I have a B.S. in Computer Science and a M.S in Data Science with a capstone in Machine Learning.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/edgar-pino/',
    github: 'https://github.com/edgar971',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Tensorflow',
  'Python',
  'AWS',
  'SQL',
  'Typescript',
  'Machine Learning',
  'Airflow',
  'Snowflake'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}

export { header, about, projects, skills, contact }
