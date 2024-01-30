import {CORE_CONCEPTS} from './data.js';
import Header from '../src/components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  function handleSelect(selectedButton)
  {//Operate as a Value Reader for the Component Child
    //SelectedButton => 'components', 'jsx', 'props', 'state'
      console.log(selectedButton);
  }

  function handleSelectOne(selectedButton)
  {
      console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
        <h2>Examples</h2>

        <menu>
          {/*  Method 1 using TabButton via TabButton  -- Not Appearing*/}
          <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
        </menu>


        <menu>
        {/*  Method 2 using TabButtonProp via TabButton -- Appearing */}
        <TabButton title={CORE_CONCEPTS[0].title} onSelect={() => handleSelectOne(CORE_CONCEPTS[0].title)} />
        <TabButton title={CORE_CONCEPTS[1].title} onSelect={() => handleSelectOne(CORE_CONCEPTS[1].title)} />
        <TabButton title={CORE_CONCEPTS[2].title} onSelect={() => handleSelectOne(CORE_CONCEPTS[2].title)} />
        <TabButton title={CORE_CONCEPTS[3].title} onSelect={() => handleSelectOne(CORE_CONCEPTS[3].title)} />
        </menu>
        Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;