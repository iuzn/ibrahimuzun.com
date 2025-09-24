import Image from "next/image";

export default function Profile() {
  return (
    <div
      className="bg-default flex gap-2.5 min-h-36 items-start justify-center p-3 rounded-3xl max-w-[424px]"
      data-name="Profile"
      data-node-id="278:148"
    >
      {/* Profil resmi */}
      <div
        className="bg-center bg-cover bg-no-repeat relative rounded-xl size-30 overflow-hidden"
        data-name="1671032327486-noauth 1"
        data-node-id="I278:148;271:90"
      >
        <Image
          src="/profile-image.png"
          alt="Profile picture"
          fill
          sizes="120px"
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* Metin içeriği */}
      <div
        className="flex flex-col grow items-start justify-center leading-none px-0 py-0.5 text-i-800"
        data-node-id="I278:148;271:91"
      >
        <div
          className="font-instrument-serif italic text-xl w-full"
          data-node-id="I278:148;271:92"
        >
          <p className="leading-[20px]">Merhaba!</p>
        </div>
        <div
          className="font-instrument-serif font-normal leading-[24px] sm:leading-[32px] not-italic text-2xl sm:text-[32px] w-full"
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
