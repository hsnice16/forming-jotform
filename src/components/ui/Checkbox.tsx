import clsx from "clsx";

type CheckboxProps = {
  readonly text: string;
  readonly isSelected?: boolean;
};

export function Checkbox({ isSelected, text }: CheckboxProps) {
  return (
    <>
      <span
        className={clsx(
          "border w-[20px] h-[20px] flex items-center justify-center transition",
          {
            "border-text-gray": !isSelected,
            "border-input-border": isSelected,
          }
        )}
      >
        <span
          className={clsx("border-3 border-text w-[18px] h-[18px] transition", {
            "bg-text": !isSelected,
            "bg-input-border": isSelected,
          })}
        />
      </span>
      {text}
    </>
  );
}
