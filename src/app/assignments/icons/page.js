// I Page komponenten
import React from "react";
import DevIcons from "@/components/icons/devicons";
import styles from "./page.module.css";

const iconConfigs = [
  { size: 25, color: "#00ff00" },
  { size: 50, color: "#0000ff" },
  { size: 100, color: "#ffff00" },
  { size: 150, color: "#ff0000" },
  { size: 200, color: "#00ffff" },
];

export default function Page() {
  return (
    <main className={styles.page}>
      {iconConfigs.map((config, index) => (
        <DevIcons key={index} initialSize={config.size} initialColor={config.color} />
      ))}
    </main>
  );
}
