import styles from "./appLayout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default AppLayout;
