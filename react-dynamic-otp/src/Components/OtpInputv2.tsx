import Input from "./Input";
import React, { useRef, useState, useEffect } from "react";

type InputGroupProps = {
  verifyInput: (otp: String) => void;
  numOfInputs: number;
};

const OtpInputv2 = ({ numOfInputs, verifyInput }: InputGroupProps) => {
  const data = new Array(numOfInputs).fill(1);
  const inputData = data.map((e, i) => {
    const ref = React.createRef<HTMLInputElement>();
    return {
      i: "",
      ref,
    };
  });
  console.log(inputData);
  const [rawData, setRawData] = useState(
    data.reduce((e, i) => ({ ...e, [i]: i }))
  );
  return (
    <>
      {inputData.map((e, i, arr) => (
        <Input
          data={rawData}
          setData={setRawData}
          currentRef={e.ref}
          index={i}
          length={numOfInputs}
          nextRef={arr[i + 1]?.ref}
          prevRef={arr[i - 1]?.ref}
          verifyInput={(e) => {
            console.log(e);
          }}
        />
      ))}
    </>
  );
};

export default OtpInputv2;
