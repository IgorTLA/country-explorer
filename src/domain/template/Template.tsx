import { PropsWithChildren } from "react";

import Header from "@/components/layout/Header";
import styles from "./template.module.scss";

export default function Template({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
