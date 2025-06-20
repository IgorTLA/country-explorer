"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { FavoritesList } from "@/components/favorites/FavoriteList";
import styles from "./page.module.scss";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/useToast";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const { showToast } = useToast();

  const handleRemoveFavorite = (code: string) => {
    removeFavorite(code);
    showToast({
      status: "success",
      title: `Country removed from favorites`,
    });
  };

  return (
    <div className={styles.container}>
      {favorites.length === 0 ? (
        <div className={styles.empty}>
          <Heart size={48} strokeWidth={1.5} />
          <h2>No favorites yet</h2>
          <p>
            Start exploring and add countries to your favorites by clicking the
            heart icon!
          </p>
        </div>
      ) : (
        <FavoritesList favorites={favorites} onRemove={handleRemoveFavorite} />
      )}
    </div>
  );
}
