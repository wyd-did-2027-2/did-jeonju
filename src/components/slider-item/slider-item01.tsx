import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk", mobile: "mk" },
  en: { pc: "pe", mobile: "me" },
};

export default function SliderItem01({ locale }: { locale: string }) {
  const { pc, mobile } = PREFIX[locale] || PREFIX.kr;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/jeonju/${mobile}_2.png`}
        alt="전주2"
        fill
        className="object-cover min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/jeonju/${pc}_2.png`}
        alt="전주2"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
