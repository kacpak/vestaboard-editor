import Editor from "@/components/BoardEditor";
import styles from "./page.module.css";
import invariant from "tiny-invariant";
import { unstable_noStore } from "next/cache";

export default function Home() {
  unstable_noStore();
  invariant(process.env.BACKEND_URL, "BACKEND_URL is required");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Editor backendUrl={process.env.BACKEND_URL} />
      </main>
    </div>
  );
}
