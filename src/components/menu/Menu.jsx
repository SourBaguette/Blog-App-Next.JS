import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { MenuPosts } from "../menuPosts/MenuPosts";
import { MenuCategories } from "../menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className={styles.container}>
      {/* What's hot section */}
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* Discover by topic section  */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* Chosen by the editor section */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};
