import { getBoardMembers } from "../../../../lib/contentful";
import { BoardMember } from "../../../types/contentful";
import VorstandsmitgliedCard from "./BordmemberCard";
import styles from "./Vorstandsliste.module.css";

export default async function Vorstandsliste() {
  const boardMembers = await getBoardMembers();

  return (
    <div>
      <h1>Vorstand</h1>
      <ul id={styles.vorstandsliste}>
        {boardMembers.map((m: BoardMember) => (
          <li key={m.sys.id}>
            <VorstandsmitgliedCard member={m} />
          </li>
        ))}
      </ul>
    </div>
  );
}
