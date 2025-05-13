"use client";

import { useState } from "react";
import styles from "./TabMenu.module.scss";

const tabs = ["First", "Second", "Third"];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("First");

  return (
    <div className={styles.tabMenu}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeTab === "First" && <p>First 탭입니다.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores voluptas provident, aut necessitatibus pariatur nihil. Exercitationem, dolores modi praesentium libero dolore natus voluptatum inventore voluptatibus, sit doloribus laboriosam voluptates.</p>}
        {activeTab === "Second" && <p>Second 탭입니다.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia quisquam molestias debitis, eum cupiditate ullam dolorum eius consectetur in consequatur perspiciatis unde quae reprehenderit, beatae a doloribus vitae nihil?</p>}
        {activeTab === "Third" && <p>Third 탭입니다.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque exercitationem, recusandae ipsum earum sed aliquid debitis ullam nisi. Aperiam autem recusandae molestiae minima, reiciendis laboriosam ea deleniti saepe fugit corporis?</p>}
      </div>
    </div>
  );
};

export default TabMenu;