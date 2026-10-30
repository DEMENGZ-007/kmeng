import { useState } from "react";
import Section from "./assets/components/Section.jsx";
import EmployeeList from "./assets/components/EmployeeList.jsx";
import EmployeeForm from "./assets/components/EmployeeForm.jsx";

const initialEmployees = [
  {
    id: 1,
    name: "សុខ ចាន់ថា",
    position: "Loan Officer",
    branch: "ភ្នំពេញ",
    loansHandled: 12,
  },
  {
    id: 2,
    name: "ម៉ម ស្រីលក្ខណ៍",
    position: "Credit Analyst",
    branch: "សៀមរាប",
    loansHandled: 8,
  },
  {
    id: 3,
    name: "ចាន់ វិបុល",
    position: "Branch Manager",
    branch: "បាត់ដំបង",
    loansHandled: 20,
  },
];

function App() {
  // Exercise 5A: the shared state lives in App
  const [employees, setEmployees] = useState(initialEmployees);

  // Exercise 5B: add (never mutate the old array, create a new one)
  const handleAdd = (newEmp) => setEmployees([...employees, newEmp]);

  // Exercise 5C: delete by id
  const handleDelete = (id) =>
    setEmployees(employees.filter((emp) => emp.id !== id));

  return (
    <>
      <Section title="បន្ថែមបុគ្គលិក">
        <EmployeeForm onAdd={handleAdd} />
      </Section>

      <Section title="បញ្ជីបុគ្គលិក">
        <EmployeeList employees={employees} onDelete={handleDelete} />
      </Section>
    </>
  );
}

/*
 Question (Exercise 5): Why must the employees state be in App, not in
 EmployeeForm or EmployeeList?
 Answer: EmployeeForm and EmployeeList are siblings and need the same data.
 Siblings cannot share state directly, so the state goes to the closest common
 parent (App) and is passed down by props (lifting state up). Form changes it
 via onAdd, List shows it and changes it via onDelete.
 ចម្លើយ: ព្រោះ EmployeeForm និង EmployeeList ត្រូវប្រើទិន្នន័យដូចគ្នា ត្រូវដាក់ state
 នៅ parent ជិតបំផុតដែលរួមគ្នា (lifting state up) ហើយបញ្ជូនចុះតាម props។
*/

export default App;
