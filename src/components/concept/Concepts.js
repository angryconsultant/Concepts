import Concept from "./Concept";
import { conceptsData } from "./conceptsData";

function Concepts(props) {
  return (
    <ul id="concepts">
      {conceptsData.map((concept) => (
        <Concept item={concept} />
      ))}
    </ul>
  );
}

export default Concepts;
