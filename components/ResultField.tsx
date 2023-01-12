type ResultFieldProps = {
  title: string;
  subtitle: string;
  amount: number;
};
export const ResultField = ({ title, subtitle, amount }: ResultFieldProps) => {
  return (
    <div>
      <section>
        <article>{title}</article>
        <article>/ {subtitle}</article>
      </section>
      <section>${amount}</section>
    </div>
  );
};
