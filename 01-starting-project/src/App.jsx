import anh from "./assets/react-core-concepts.png";
import componentIMG from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";


const reactDescriptions = ["Funda", "Core", "Crucial"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  return (
    <header>
      <img src={anh} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
function CoreC(props) {
  return(
  <li>
    <img src={props.image} alt="cc" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreC
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image= {CORE_CONCEPTS[0].image}
            />
            <CoreC
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image= {CORE_CONCEPTS[1].image}
            />          
            <CoreC
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image= {CORE_CONCEPTS[2].image}
            />            
            <CoreC {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
