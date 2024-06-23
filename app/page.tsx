'use client'; // I dont fuck with SSR its confusing and i hate it

import Image from "next/image";
import styles from "../styles/Home.module.css"
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.topBox}>
        <h1 className={styles.titleText}>Steam Audit</h1>
        <p className={styles.aboutText}>Check how much money you forked over games you never played :D</p>
      </div>
      
      <div className={styles.middleBox}>
        <Button onClick={() => console.log('Button clicked')}>
          <Image src="/sits_01.png" alt="Button Image" width={200} height={200} />
        </Button>
      </div>
      
      <div className={styles.bottomBox}>
        <h1 className={styles.logoDescription}>Powered by</h1>
        <img className={styles.logo} src="/steam-logo.png" alt="Steam Logo" />
        <img className={styles.logo} src="/cheapshark-logo.png" alt="CheapShark API Logo" />
        
      </div>

      <div className={styles.bottomBox}>
        <p className={styles.footerText}>Steam Audit is not affiliated with Valve. All trademarks and registered trademarks are the property of their respective owners.</p>
      </div>

    </div>
  );
}
