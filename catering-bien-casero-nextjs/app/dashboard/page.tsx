import { BackEndNav } from "../components/BackEndNav/BackEndNav";
import styles from "./Dashboard.module.css";

export default function DashboardPage() {
  return (
    <section className={styles.background}>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
      <BackEndNav />
    </section>
  );
}
