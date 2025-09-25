import clsx from "clsx";

type DropdownOptionProps = {
  readonly text: string;
  readonly isLast?: boolean;
  readonly isSelected?: boolean;
  readonly onClick?: () => void;
};

export function DropdownOption({
  text,
  isLast,
  onClick,
  isSelected,
}: DropdownOptionProps) {
  return (
    <span
      onClick={onClick}
      className={clsx("py-3 px-4 transition cursor-pointer", {
        "bg-dropdown-selected text-text": isSelected,
        "border-b-[1px] border-dropdown-option-border": !isLast,
      })}
    >
      {text}
    </span>
  );
}
