import { useState } from "react";

// Exercise 5B: controlled form that calls onAdd from props
function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("សូមបញ្ចូលឈ្មោះបុគ្គលិក");
      return;
    }

    const newEmp = {
      id: Date.now(),
      name: name.trim(),
      position: position.trim(),
      // empty branch -> undefined, so EmployeeCard uses its default value
      branch: branch.trim() || undefined,
      loansHandled: 0,
    };

    onAdd(newEmp);

    // clear the inputs
    setName("");
    setPosition("");
    setBranch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ឈ្មោះ"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="តួនាទី"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="សាខា"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <button type="submit">បន្ថែមបុគ្គលិក</button>
    </form>
  );
}

export default EmployeeForm;
