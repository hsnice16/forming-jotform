import clsx from "clsx";

type RadioProps = {
  readonly text: string;
  readonly isSelected?: boolean;
};

export function Radio({ isSelected, text }: RadioProps) {
  return (
    <>
      <span
        className={clsx(
          "border rounded-full w-[20px] h-[20px] flex items-center justify-center transition",
          {
            "border-text-gray": !isSelected,
            "border-input-border": isSelected,
          }
        )}
      >
        <span
          className={clsx(
            "border-3 rounded-full border-text w-[18px] h-[18px] transition",
            {
              "bg-text": !isSelected,
              "bg-input-border": isSelected,
            }
          )}
        />
      </span>
      {text}
    </>
  );
}
