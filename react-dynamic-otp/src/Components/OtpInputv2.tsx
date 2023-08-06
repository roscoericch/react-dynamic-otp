import Input from "./Input";
import React, { useRef, useState, useEffect } from "react";
import useReference from "./useReference";

type InputGroupProps = {
  verifyInput: (otp: String) => void;
  numOfInputs: number;
};

const OtpInputv2 = ({ numOfInputs, verifyInput }: InputGroupProps) => {
  const data = new Array().fill(1);
  //   const items = ["Item 1", "Item 2", "Item 3"];
  //   const itemRefs = useRef([]);

  //   useEffect(() => {
  //     // Populate the itemRefs array with refs for each item
  //     itemRefs = data.map(() => React.createRef());
  //   }, [items]);

  //   const handleFocus = (index) => {
  //     if (itemRefs.current[index].current) {
  //       itemRefs.current[index].current.focus();
  //     }
  //   };
  const inputData = data.map((e, i) => {
    // const { ref } = useReference();
    const ref = React.createRef();
    return {
      i: "",
      ref,
    };
  });
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
          length={arr.length}
          nextRef={arr[i + 1].ref}
          prevRef={arr[i - 1].ref}
          verifyInput={(e) => {
            console.log(e);
          }}
        />
      ))}
    </>
  );
};

export default OtpInputv2;
