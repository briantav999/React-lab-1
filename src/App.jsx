const App = () => {

  const mySkills = [
    {
      name: 'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true
    },
    {
      name: 'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name: 'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
  ];


  return<>
    <h2>Skills</h2>
      <ul>
        {mySkills.map((skill, index) => (
          <li key={index}>
            {skill.name} - Comfort Level: {skill.comfort}
            {skill.frontEnd && <span> (Frontend)</span>}
            {skill.backend && <span> (Backend)</span>}
          </li>
        ))}
      </ul>
  </>
}
export default App;