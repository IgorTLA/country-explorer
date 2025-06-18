import { Input } from "@/components/ui/Input";
import styles from "./page.module.scss";
import { Search } from "lucide-react";

export default function ListCountries() {
  return (
    <div className={styles.container}>
      <Input
        placeholder="Search countries by name, capital, or region..."
        icon={<Search size={24} color="var(--text)" />}
      />
      <p>List Countries</p>
    </div>
  );
}
