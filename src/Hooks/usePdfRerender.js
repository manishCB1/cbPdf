import { useContext } from "react";
import { DataContext } from "../App";

export default function usePdfRerender() {
  const [data, setState] = useContext(DataContext);
  console.log(data, "chk data");

  const triggerPdfRerender = () => {
    setState((prev) => {
      const trigger = prev.triggerUpdate;

      console.log("abc trigger :", trigger);

      return { ...prev, triggerUpdate: !trigger };
    });
  };
  return triggerPdfRerender;
}
