"use client";
import { Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Header() {
  const [showingFavorites, setShowingFavorites] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.icon}>
          <Globe size={24} color="#fff" />
        </div>
        <div>
          <h1 className={styles.title}>Country Explorer</h1>
        </div>
      </div>
      <Button
        text="Favorites"
        onClick={() => setShowingFavorites(!showingFavorites)}
        isSelected={showingFavorites}
        icon={<Heart fill={showingFavorites ? "currentColor" : "none"} />}
      />
    </div>
  );
}
