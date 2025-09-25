import clsx from "clsx";

type TextProps = {
  readonly text: string;
  readonly className?: string;
};

export function Text({ text, className }: TextProps) {
  return <span className={clsx(className)}>{text}</span>;
}
