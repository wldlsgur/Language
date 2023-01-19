import { GnvDiv, GnvItems, GnvItem } from "./style";
import { useLink } from "../../hooks/useLink";

export default function Gnv(): JSX.Element {
  const { activeItem, onClick, setActiveItme } = useLink();
  return (
    <GnvDiv>
      <GnvItems>
        <GnvItem onClick={onClick}>Home</GnvItem>
        <GnvItem onClick={onClick}>About</GnvItem>
        <GnvItem onClick={onClick}>Content</GnvItem>
      </GnvItems>
    </GnvDiv>
  );
}
