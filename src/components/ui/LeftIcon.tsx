import clsx from "clsx";
import Image from "next/image";

type LeftIconProps = {
  readonly className?: string;
};

export function LeftIcon({ className }: LeftIconProps) {
  return (
    <Image
      width={22}
      height={13}
      alt="right-arrow"
      src="/right-arrow.svg"
      className={clsx(
        "rotate-180 w-[19px] sm:w-[22px] h-[11px] sm:h-[13px]",
        className
      )}
    />
  );
}
