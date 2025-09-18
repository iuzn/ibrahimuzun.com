import Image from "next/image";

export default function Profile() {
  return (
    <div
      className="bg-default box-border content-stretch flex gap-[10px] min-h-[144px] items-start justify-center p-[12px] relative rounded-[24px] shrink-0 max-w-[424px]"
      data-name="Profile"
      data-node-id="278:148"
    >
      {/* Profil resmi */}
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[12px] shrink-0 size-[120px] relative overflow-hidden"
        data-name="1671032327486-noauth 1"
        data-node-id="I278:148;271:90"
      >
        <Image
          src="/profile-image.png"
          alt="Profile picture"
          fill
          sizes="120px"
          className="object-cover rounded-[12px]"
          priority
        />
      </div>

      {/* Metin içeriği */}
      <div
        className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px px-0 py-[2px] relative shrink-0 text-i-800"
        data-node-id="I278:148;271:91"
      >
        <div
          className="font-instrument-serif italic relative shrink-0 text-[20px] w-full"
          data-node-id="I278:148;271:92"
        >
          <p className="leading-[20px]">Merhaba!</p>
        </div>
        <div
          className="font-instrument-serif font-normal leading-[32px] not-italic relative shrink-0 text-[20px] sm:text-[32px] w-full"
          data-node-id="I278:148;271:93"
        >
          <p className="mb-0">I am Ibrahim Uzun,</p>
          <p className="mb-0">{`a developer & designer`}</p>
          <p>in Istanbul.</p>
        </div>
      </div>
    </div>
  );
}
