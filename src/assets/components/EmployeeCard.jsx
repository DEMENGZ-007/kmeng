import { useState } from "react";

// Exercise 1: props with destructuring + default value for branch
// Exercise 4A: state (loans, showDetail)
// Exercise 5C: onDelete prop
function EmployeeCard({
  id,
  name,
  position,
  branch = "ការិយាល័យកណ្តាល", // default value when branch is not passed
  loansHandled,
  onDelete,
}) {
  // State copied from the prop, so we can change it with setLoans
  const [loans, setLoans] = useState(loansHandled);
  const [showDetail, setShowDetail] = useState(false);

  // Exercise 3: event handlers
  const handleView = () => {
    alert(`ឈ្មោះ: ${name}\nតួនាទី: ${position}`);
  };

  const handleContact = (who) => {
    console.log(`កំពុងទាក់ទង ${who}`);
  };

  // Exercise 4A: functional updates
  const handleApprove = () => setLoans((prev) => prev + 1);
  const handleReduce = () => setLoans((prev) => (prev > 0 ? prev - 1 : 0)); // never below 0
  const handleToggleDetail = () => setShowDetail((prev) => !prev);

  return (
    <div className="card">
      <h3>
        {name}
        {/* Top Performer badge: && renders only when the condition is true */}
        {loans >= 15 && <span className="badge">Top Performer</span>}
      </h3>
      <p>តួនាទី: {position}</p>
      <p>កម្ចីដែលបានដោះស្រាយ: {loans}</p>

      {/* Branch is shown only when showDetail is true */}
      {showDetail && <p>សាខា: {branch}</p>}

      <button onClick={handleView}>មើលព័ត៌មាន</button>
      <button onClick={() => handleContact(name)}>ទាក់ទង</button>
      <button onClick={handleApprove}>+ អនុម័តកម្ចី</button>
      <button onClick={handleReduce}>− កាត់បន្ថយ</button>
      <button onClick={handleToggleDetail}>លាក់ / បង្ហាញព័ត៌មានលម្អិត</button>
      <button onClick={() => onDelete(id)}>លុប</button>
    </div>
  );
}

/*
 Question (Exercise 1): Can props be changed inside a child component? Why?
 Answer: No. Props are read-only. Data flows one way, from parent to child.
 If a value must change, use state (or ask the parent to change it).
 ចម្លើយ: មិនបានទេ។ Props ជា read-only ទិន្នន័យហូរពី parent ទៅ child ម្ខាង។
 បើចង់ឲ្យផ្លាស់ប្តូរត្រូវប្រើ state។
*/

/*
 Question (Exercise 3): onClick={handleView} vs onClick={handleView()}?
 Answer: {handleView} passes the function to React, which calls it when the
 user clicks. {handleView()} calls it immediately while rendering (and passes
 its return value, undefined, to onClick), so the click does nothing.
 ចម្លើយ: {handleView} ផ្តល់ function ឲ្យ React ហៅពេល click។
 {handleView()} ហៅវាភ្លាមពេល render។
*/

/*
 Question 1 (Exercise 4): Why not write loans = loans + 1 or loans++ directly?
 Answer: React does not know a plain variable changed, so it does not
 re-render. Also state is read-only, only the setter may change it.
 ចម្លើយ: React មិនដឹងថាមានការផ្លាស់ប្តូរ ទើបមិន render ឡើងវិញ។

 Question 2 (Exercise 4): What happens when setLoans(...) is called?
 Answer: React stores the new value, re-renders the component, and the UI
 shows the new number.
 ចម្លើយ: React រក្សាតម្លៃថ្មី រួច render component ឡើងវិញ ហើយ UI ប្តូរតាម។
*/

export default EmployeeCard;

