import Image from "next/image";
import styles from "./page.module.css";
import { InjaGallery } from "@/components/inja-gallery/inja-gallery.component";

export default function Home() {
  return (
    <div className={styles.page}>
      <InjaGallery />
    </div>
  );
}
