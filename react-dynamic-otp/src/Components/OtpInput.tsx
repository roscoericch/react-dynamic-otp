import { useEffect, useRef, useState } from "react";
import Input from "./Input";
type InputGroupProps = {
  verifyInput: (otp: String) => void;
  numOfInputs: Number;
};
const OtpInput = ({ verifyInput, numOfInputs }: InputGroupProps) => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<Record<string, string>>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  useEffect(() => {
    ref1.current?.focus();
  }, []);
  return (
    <div className="flex justify-between items-center p-[1rem]">
      <input
        ref={ref1}
        type="number"
        value={data[0]}
        onChange={(e) => {
          if (e.target.value && !data[0]) {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[0] = e.target.value;
              console.log(prev);
              return { ...second };
            });
            ref2.current?.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "e") e.preventDefault();
          if (e.key === "Backspace") {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[0] = "";
              return { ...second };
            });
          } else if (!data[0] && e.key === "Backspace") {
            ref1.current?.focus();
          }
          if (data[0] && e.key !== "Backspace") {
            ref2.current?.focus();
          }
        }}
        className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
      />
      <input
        ref={ref2}
        value={data[1]}
        onChange={(e) => {
          if (e.target.value && !data[1]) {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[1] = e.target.value;
              return { ...second };
            });
            ref3.current?.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "e") e.preventDefault();
          if (e.key === "Backspace") {
            if (!data[1]) ref1.current?.focus();
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[1] = "";
              return { ...second };
            });
          } else if (!data[1] && e.key === "Backspace") {
            ref1.current?.focus();
          }
          if (data[1] && e.key !== "Backspace") {
            ref3.current?.focus();
          }
        }}
        type="number"
        className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
      />
      <input
        ref={ref3}
        value={data[2]}
        onChange={(e) => {
          if (e.target.value && !data[2]) {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[2] = e.target.value;
              return { ...second };
            });
            ref4.current?.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "e") e.preventDefault();
          if (e.key === "Backspace") {
            if (!data[2]) ref2.current?.focus();
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[2] = "";
              return { ...second };
            });
          } else if (!data[2] && e.key === "Backspace") {
            ref2.current?.focus();
          }
          if (data[2] && e.key !== "Backspace") {
            ref4.current?.focus();
          }
        }}
        type="number"
        className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
      />
      <input
        ref={ref4}
        value={data[3]}
        onChange={(e) => {
          if (e.target.value && !data[3]) {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[3] = e.target.value;
              return { ...second };
            });
            ref5.current?.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "e") {
            e.preventDefault();
          }
          if (e.key === "Backspace") {
            if (!data[3]) ref3.current?.focus();
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[3] = "";
              return { ...second };
            });
          } else if (!data[3] && e.key === "Backspace") {
            ref3.current?.focus();
          }
          if (data[3] && e.key !== "Backspace") {
            ref5.current?.focus();
          }
        }}
        type="number"
        className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
      />
      <input
        ref={ref5}
        value={data[4]}
        onChange={(e) => {
          if (e.target.value && !data[4]) {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[4] = e.target.value;
              return { ...second };
            });
            ref6.current?.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "e") {
            e.preventDefault();
          }
          if (e.key === "Backspace" && data[4]) {
            if (!data[4]) ref4.current?.focus();
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[4] = "";
              return { ...second };
            });
          } else if (!data[4] && e.key === "Backspace") {
            ref4.current?.focus();
          }
          if (data[4] && e.key !== "Backspace") {
            ref6.current?.focus();
          }
        }}
        type="number"
        className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
      />
      <input
        ref={ref6}
        value={data[5]}
        onChange={(e) => {
          if (e.target.value && !data[5]) {
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[5] = e.target.value;
              return { ...second };
            });
            verifyInput(Object.values(data).join(""));
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "e") {
            e.preventDefault();
          }
          if (e.key === "Backspace" && data[5]) {
            if (!data[5]) ref5.current?.focus();
            setData((prev: Record<string, string>) => {
              const second = prev;
              second[5] = "";
              return { ...second };
            });
          } else if (!data[5] && e.key === "Backspace") {
            ref5.current?.focus();
          }
          if (data[5]) {
            ref6.current?.focus();
          }
        }}
        type="number"
        className="py-[5px] px-[5px] w-[15%] h-[58px] text-center rounded-[5px] border-solid border-[1px] border-[#D2DDDD] focus-visible:outline-blueTheme"
      />
    </div>
  );
};

export default OtpInput;
