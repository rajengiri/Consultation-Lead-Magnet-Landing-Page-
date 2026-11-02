import { siteConfig } from "@/lib/config";

function getVimeoEmbedUrl(value: string): string | null {
  if (!value.trim()) return null;
  const match = value.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (!match) return null;
  return `https://player.vimeo.com/video/${match[1]}`;
}

export default function VimeoEmbed() {
  const embedUrl = getVimeoEmbedUrl(siteConfig.vimeoUrl);
  if (!embedUrl) return null;

  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100 shadow-card">
      <iframe
        src={embedUrl}
        title="Digital Rajen consultation next steps"
        className="h-full w-full border-0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
