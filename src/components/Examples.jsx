import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {


  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  return (
    <div>


      <Section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton>
        </menu>
        {!selectedTopic ? <p>Please select a topic</p> : null}
        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        ) : null}
      </Section>
    </div>
  )
}