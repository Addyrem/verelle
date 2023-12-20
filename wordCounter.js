import { useState } from "react";

function WordCounter() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (text, type) => {
    setAlert({
      text: text,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils"
        about="I am nothing"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextBox action="To Uppercase" mode={mode} showAlert={showAlert} />
      <p>© 2023 Ravi Charan</p>
    </>
  );
}

export default WordCounter;