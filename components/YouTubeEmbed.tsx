import { siteConfig } from "@/lib/config";

function getYouTubeEmbedUrl(value: string): string | null {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");
    const segments = url.pathname.split("/").filter(Boolean);
    const videoId =
      host === "youtu.be"
        ? segments[0]
        : url.searchParams.get("v") ??
          (segments[0] === "embed" || segments[0] === "shorts" ? segments[1] : undefined);

    if (!videoId || !/^[\w-]{11}$/.test(videoId)) return null;
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  } catch {
    return null;
  }
}

export default function YouTubeEmbed() {
  const embedUrl = getYouTubeEmbedUrl(siteConfig.youtubeUrl);
  if (!embedUrl) return null;

  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100 shadow-card">
      <iframe
        src={embedUrl}
        title="Digital Rajen consultation next steps"
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
