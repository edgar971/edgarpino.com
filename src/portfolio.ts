const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://edgarpino.com',
  title: 'EP',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Edgar Pino',
  role: 'Machine Learning Engineer',
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
    name: 'ML Labs',
    description:
      'A collection of ML projects and examples for learning.',
    stack: ['jupyter', 'tensorflow', 'fasttext'],
    sourceCode: 'https://github.com/edgar971/ml-labs',
    livePreview: 'https://github.com/edgar971/ml-labs',
  },
  {
    name: 'Tensorflow.js Demo',
    description:
      'A quick intro and feature overview of Tensorflow.js',
    stack: ['tensorflow.js', 'typescript'],
    sourceCode: 'https://github.com/edgar971/tfjs-quick-intro-pres',
    livePreview: 'https://github.com/edgar971/tfjs-quick-intro-pres',
  },
  {
    name: 'MNIST Axon',
    description:
      'MNIST example in Elixir using Nx and Axon.',
    stack: ['elixir', 'axon', 'nx'],
    sourceCode: 'https://github.com/edgar971/mnist-axon-ml',
    livePreview: 'https://github.com/edgar971/mnist-axon-ml',
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
