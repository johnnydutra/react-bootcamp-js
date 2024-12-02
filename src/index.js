import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const runner = {
  bio: 'Long-distance runner based in São Paulo, Brazil. Has three marathon finisher medals, a DNF and the urge to get back on track for the 2025 season and claim sequential half-marathon PBs.',
  name: 'Johnny Dutra',
  photo: 'img/runner.jpg',
  skills: [
    {
      skill: 'Half-Marathon',
      level: 'advanced',
      color: '#2662EA',
    },
    {
      skill: 'Hill Running',
      level: 'advanced',
      color: '#EFD81D',
    },
    {
      skill: 'Medium Range Races',
      level: 'advanced',
      color: '#C3DCAF',
    },
    {
      skill: 'Marathon',
      level: 'intermediate',
      color: '#E84F33',
    },
    {
      skill: 'Finishing Strong',
      level: 'advanced',
      color: '#60DAFB',
    },
    {
      skill: 'Ultra',
      level: 'beginner',
      color: '#FF3B00',
    },
  ],
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={runner.photo} alt={runner.name}></img>;
}

function Intro() {
  return (
    <div>
      <h1>{runner.name}</h1>
      <p>{runner.bio}</p>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '😅'}
        {level === 'intermediate' && '😃'}
        {level === 'advanced' && '😁'}
      </span>
    </div>
  );
}

function SkillList() {
  const runnerSkills = runner.skills;
  return (
    <div className="skill-list">
      {runnerSkills.map((rs) => (
        <Skill skill={rs.skill} color={rs.color} level={rs.level} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
