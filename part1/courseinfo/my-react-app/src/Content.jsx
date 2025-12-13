import { useState } from "react";

export const Content = ({ parts }) => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises} <br />
        {parts[1].name} {parts[1].exercises} <br />
        {parts[2].name} {parts[2].exercises}
      </p>
    </div>
  );
};
