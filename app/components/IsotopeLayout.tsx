import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

export const IsotopeLayout = () => {
  // // init one ref to store the future isotope object
  const isotope = useRef<Isotope | null>();
  // // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  //
  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".masonary", {
      itemSelector: ".main",
      layoutMode: "masonry"
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, []);

  // // handling filter key change
  useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return {
    handleFilterKeyChange,
  }
}
