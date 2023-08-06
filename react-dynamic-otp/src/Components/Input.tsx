import { useRef } from "react";

type InputProp = {
  index: number;
  data: Record<string, string>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  nextRef: React.RefObject<HTMLInputElement>;
  currentRef: React.RefObject<HTMLInputElement>;
  prevRef: React.RefObject<HTMLInputElement>;
  length: number;
  verifyInput: (e: string) => void;
};

const Input = ({
  index,
  data,
  setData,
  nextRef,
  currentRef,
  prevRef,
  verifyInput,
  length,
}: InputProp) => {
  return (
    <input
      ref={currentRef}
      value={data[index]}
      onChange={(e) => {
        if (e.target.value && !data[index]) {
          setData((prev: Record<string, string>) => {
            const second = prev;
            second[1] = e.target.value;
            return { ...second };
          });
          nextRef.current?.focus();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "e") e.preventDefault();
        if (e.key === "Backspace") {
          if (!data[index] && prevRef) prevRef?.current?.focus();
          setData((prev: Record<string, string>) => {
            const second = prev;
            second[index] = "";
            return { ...second };
          });
          if (index + 1 === length) verifyInput(Object.values(data).join(""));
        } else if (!data[index] && e.key === "Backspace" && prevRef) {
          prevRef?.current?.focus();
        }
        if (data[index] && e.key !== "Backspace" && nextRef) {
          nextRef?.current?.focus();
        }
      }}
      type="number"
      className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
    />
  );
};

export default Input;
