import { useRef } from "react";

const useReference = () => {
  const ref = useRef(null);
  return {
    ref,
  };
};

export default useReference;
