export default function Container({ children, styles = "" }) {
  return <div className={`${styles} mx-auto max-w-7xl px-4`}>{children}</div>;
}
