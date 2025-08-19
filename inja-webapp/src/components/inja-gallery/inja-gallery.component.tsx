import { InjaItem } from "../inja-item/inja-item.components";
import styles from "./inja-gallery.module.scss";

const DUMMY_INJA_ITEMS = [
  { id: '1', title: 'خانه ۲ خوابه' },
  { id: '2', title: 'خانه در بهترین منطقه برلین' },
  { id: '3', title: 'اجاره به دانشجو' },
  { id: '4', title: 'خانه ۵ خوابه' },
  { id: '5', title: 'خانه ۶ خوابه' },
  { id: '6', title: 'خانه ۷ خوابه' },
];
export const InjaGallery = () => {
  return (
    <div className={styles.injaGallery}>
      <div className={styles.injaGalleryItems}>
        {DUMMY_INJA_ITEMS.map(item => (
          <InjaItem key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};
