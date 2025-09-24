import Image from "next/image";

type LeftIconProps = {
  className?: string;
};

export function LeftIcon({ className }: LeftIconProps) {
  return (
    <Image
      width={22}
      height={13}
      alt="right-arrow"
      src="/right-arrow.svg"
      className={`rotate-180 ${className} w-[19px] sm:w-[22px] h-[11px] sm:h-[13px]`}
    />
  );
}
