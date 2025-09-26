type DropdownInputButtonProps = {
  readonly onClick?: () => void;
  readonly dropdownInput: string;
};

export function DropdownInputButton({
  onClick,
  dropdownInput,
}: DropdownInputButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border rounded w-full flex justify-between items-center p-2.5 sm:px-4 sm:py-2.5 cursor-pointer mt-5"
    >
      <span className="font-semibold text-sm sm:text-base">
        {dropdownInput || "Please Select"}
      </span>
      <span className="border-l-[4.5px] sm:border-l-[5px] border-l-transparent border-r-[4.5px] sm:border-r-[5px] border-r-transparent border-t-[6px] sm:border-t-[7px] border-t-text-gray" />
    </button>
  );
}
