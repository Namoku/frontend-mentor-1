import style from "./ResultField.module.css";

type ResultFieldProps = {
  title: string;
  subtitle: string;
  amount: number;
};
export const ResultField = ({ title, subtitle, amount }: ResultFieldProps) => {
  return (
    <div className={style.container}>
      <section>
        <article className={style.title}>{title}</article>
        <article className={style.subtitle}>/ {subtitle}</article>
      </section>
      <section className={style.amount}>${amount}</section>
    </div>
  );
};
