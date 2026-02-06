import { BoardMember } from "../../../types/contentful";
import styles from "./BordmemberCard.module.css";

type Props = {
  member: BoardMember;
};

export default function VorstandsmitgliedCard({ member }: Props) {
  return (
    <div className={styles.boardMember}>
      {member.fields.photo && (
        <img
          src={member.fields.photo.fields.file.url}
          alt={member.fields.name}
        />
      )}
      <strong>{member.fields.name}</strong>
      <p>Telefon: {member.fields.phonenumber}</p>
      <p>{member.fields.position}</p>
    </div>
  );
}
