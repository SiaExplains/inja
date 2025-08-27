import styles from './inja-item.module.scss';

type InjaItemProps = {
  title: string;
};
export const InjaItem = ({title}: InjaItemProps) => {
  return (
    <div className={styles.injaItem}>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};