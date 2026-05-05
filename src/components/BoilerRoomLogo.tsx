interface Props {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function BoilerRoomLogo({ size = "md", showTagline = true }: Props) {
  const iconSize = size === "sm" ? 32 : size === "md" ? 40 : 56;
  const titleClass =
    size === "sm"
      ? "text-xs font-black tracking-widest"
      : size === "md"
      ? "text-sm font-black tracking-widest"
      : "text-xl font-black tracking-widest";
  const tagClass =
    size === "sm"
      ? "text-[9px] tracking-wider"
      : size === "md"
      ? "text-[10px] tracking-wider"
      : "text-xs tracking-wider";

  return (
    <div className="flex items-center gap-3">
      <img
        src="https://yt3.googleusercontent.com/eLRcf8q5rmfdHk0bGNDRkDo-QBf9DtolmPJulR-g2CaDnMbWUUAEKVrmNr7KvYoDzgN5WogXOA=s160-c-k-c0x00ffffff-no-rj"
        alt="Boiler Room"
        className="rounded-xl object-cover flex-shrink-0"
        style={{ width: iconSize, height: iconSize }}
      />
      <div className="flex flex-col leading-tight">
        <span className={`text-white uppercase ${titleClass}`}>BOILER ROOM</span>
        {showTagline && (
          <span className={`text-red-400 uppercase font-semibold ${tagClass}`}>
            VR | eLEARNING | ANIMATION
          </span>
        )}
      </div>
    </div>
  );
}
