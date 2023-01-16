import { GnvDiv, GnvItems, GnvItem } from "./style";

export default function Gnv(): JSX.Element {
  return (
    <GnvDiv>
      <GnvItems>
        <GnvItem>Home</GnvItem>
        <GnvItem>Messages</GnvItem>
        <GnvItem>Freinds</GnvItem>
      </GnvItems>
    </GnvDiv>
  );
}
