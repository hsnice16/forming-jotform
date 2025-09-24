import clsx from "clsx";

type TextProps = {
  text: string;
  className?: string;
};

export function Text({ text, className }: TextProps) {
  return <span className={clsx(className)}>{text}</span>;
}
