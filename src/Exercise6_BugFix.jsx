// Exercise 6: not used by the app. Shows the 5 bugs and the fixed code.
/*
 | # | Bug                                            | Fix                                        |
 |---|------------------------------------------------|--------------------------------------------|
 | 1 | Missing import { useState } from "react"       | Add the import at the top of the file      |
 | 2 | props.name = "Unknown" (changes props)         | Delete the line, props are read-only       |
 | 3 | loans = loans + 1 (changes state directly)     | setLoans(prev => prev + 1)                 |
 | 4 | onClick={add()} runs while rendering           | onClick={add} or onClick={() => add()}     |
 | 5 | Missing key inside map()                       | Add key={e.id}                             |
*/

import { useState } from "react"; // fix 1

function EmployeeCard(props) {
  const [loans, setLoans] = useState(props.loansHandled);
  // fix 2: removed  props.name = "Unknown";

  function add() {
    setLoans((prev) => prev + 1); // fix 3
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <p>{loans}</p>
      <button onClick={add}>+1</button> {/* fix 4 */}
    </div>
  );
}

// Inside EmployeeList (fix 5):
// {employees.map(e => <EmployeeCard key={e.id} name={e.name} loansHandled={e.loansHandled} />)}

export default EmployeeCard;
