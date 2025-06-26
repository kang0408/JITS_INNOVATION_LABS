import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/ping")
      .then((res) => res.json()) // nhớ gọi hàm với dấu ngoặc ()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []); //

  return (
    <>
      <h1>Welcome to my CMS</h1>
      {JSON.stringify(data)}
    </>
  );
}

export default App;
