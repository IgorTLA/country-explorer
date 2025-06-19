"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./styles.module.scss";
import { useFavorites } from "@/hooks/useFavorites";

export default function Header() {
  const [showingFavorites, setShowingFavorites] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { favorites } = useFavorites();

  function handleRedirectToCountries() {
    setShowingFavorites(false);
    router.push("/countries");
  }

  const handleFavoritesClick = () => {
    if (pathname === "/favorites") {
      setShowingFavorites(false);
      router.push("/countries");
    } else {
      setShowingFavorites(true);
      router.push("/favorites");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={handleRedirectToCountries}>
        <div className={styles.icon}>
          <Globe size={24} color="#fff" />
        </div>
        <div>
          <h1 className={styles.title}>Country Explorer</h1>
        </div>
      </div>

      <Button
        text="Favorites"
        onClick={handleFavoritesClick}
        isSelected={showingFavorites}
        icon={<Heart fill={showingFavorites ? "currentColor" : "none"} />}
        count={favorites.length}
      />
    </div>
  );
}
