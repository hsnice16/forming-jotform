import clsx from "clsx";
import Image from "next/image";

type RightIconProps = {
  readonly className?: string;
};

export function RightIcon({ className }: RightIconProps) {
  return (
    <Image
      width={22}
      height={13}
      alt="right-arrow"
      src="/right-arrow.svg"
      className={clsx("w-[19px] sm:w-[22px] h-[11px] sm:h-[13px]", className)}
    />
  );
}
