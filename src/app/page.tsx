import mainPage from "./page.module.css";
import Image from 'next/image';
import logo from "../../public/next.svg";
import TabMenu from "../components/TabMenu";

export default function Home() {
  return (
    <>
    <header className={mainPage.header}>
      <Image src={logo} alt="next.js" className={mainPage.logo} />
      <h1>탭 메뉴 예제</h1>
    </header>
    <main className={mainPage.main}>
      <TabMenu />
    </main>
    </>
  );
}