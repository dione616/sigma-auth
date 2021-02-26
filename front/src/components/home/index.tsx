import { useState } from "react";

const Home = () => {
  const [state] = useState("Hello World");

  return (
    <div>
      <h1>Home</h1>
      <h3>{state}</h3>
    </div>
  );
};

export default Home;
