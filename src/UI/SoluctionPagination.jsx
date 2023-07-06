import { Pagination } from "@nextui-org/react";
import styles from "./SoluctionPagination.module.scss";

const SoluctionPagination = () => {
  return (
    <div className={styles.content}>
      <h3>Página</h3>
      <Pagination loop color="success" total={4} initialPage={1} />
    </div>
  );
};

export default SoluctionPagination;
