import { ReactElement } from "react";
import { GnvDiv, GnvItems, GnvItem } from "./style";

export default function Gnv(): ReactElement {
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
