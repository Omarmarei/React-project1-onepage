import { CORE_CONCEPTS } from "../data.js";


export default function CoreConcepts({ concepts = CORE_CONCEPTS }) {
  // let concepts={CORE_CONCEPTS}
  return (
    <div id="core-concepts">
      <section id="core-concepts">
        <ul>
          {concepts.map((concept, index) => (
            <li key={index}>
              <img src={concept.image} alt={concept.title} />
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
