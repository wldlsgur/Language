import { useRouter } from "next/router";
import { useState } from "react";

export const useLink = () => {
  const router = useRouter();
  const [activeItem, setActiveItme] = useState("Home");

  const onClick = (e: any): any => {
    switch (e.target.textContent) {
      case "Home": {
        setActiveItme("home");
        router.push("/");
        break;
      }
      case "About": {
        setActiveItme("about");
        router.push("/about");
        break;
      }
      default: {
        router.push(`/${e.target.textContent}`);
      }
    }
  };
  return { activeItem, onClick, setActiveItme };
};
