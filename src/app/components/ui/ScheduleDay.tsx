import styles from "./ScheduleDay.module.css";

export type ScheduleItem = {
  time: string;
  title: string;
  location: "S" | "H" | "G" | "T"; // S=Sporthalle, H=Grundschule, G=Gymnastikraum, T=Tennishalle
};

type ScheduleDayProps = {
  day: string;
  items: ScheduleItem[];
};

export default function ScheduleDay({ day, items }: ScheduleDayProps) {
  return (
    <div className={styles.scheduleDay}>
      <h3 className={styles.dayTitle}>{day}</h3>
      <div className={styles.scheduleItems}>
        {items.map((item, index) => (
          <div key={index} className={styles.scheduleItem}>
            <div className={styles.time}>{item.time}</div>
            <div className={`${styles.locationTag} ${styles[`location-${item.location}`]}`}>
              {item.location}
            </div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
