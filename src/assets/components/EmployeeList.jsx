import { useState } from "react";
import EmployeeCard from "./EmployeeCard.jsx";

// Exercise 2: array via props + map + key + spread
// Exercise 3: onChange / onSubmit
// Exercise 4B: search state (controlled input)
function EmployeeList({ employees, onDelete }) {
  const [keyword, setKeyword] = useState("");

  // Exercise 2: summary values
  const totalEmployees = employees.length;
  const totalLoans = employees.reduce((sum, emp) => sum + emp.loansHandled, 0);

  // Exercise 3 + 4B: update state and also log the value
  const handleSearch = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  // Exercise 3: preventDefault stops the page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  // Exercise 4B: filter, then map over the filtered result
  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div>
      <div className="summary">
        <span>ចំនួនបុគ្គលិក: {totalEmployees}</span>
        <span>ចំនួនកម្ចីសរុប: {totalLoans}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ស្វែងរកតាមឈ្មោះ..."
          value={keyword}
          onChange={handleSearch}
        />
        <button type="submit">ស្វែងរក</button>
      </form>

      {filtered.length === 0 ? (
        <p className="empty">រកមិនឃើញបុគ្គលិក</p>
      ) : (
        filtered.map((emp) => (
          <EmployeeCard key={emp.id} {...emp} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default EmployeeList;
