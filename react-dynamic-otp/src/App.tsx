import OtpInputv2 from "./Components/OtpInputv2";

function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <OtpInputv2
        numOfInputs={3}
        verifyInput={(e) => {
          console.log(e, "this");
        }}
      />
    </div>
  );
}

export default App;
