function YouTubePlayer({ videoId, title }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title || 'Property video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

function LocalPlayer({ src, poster, title }) {
  return (
    <video
      className="w-full rounded-xl bg-black"
      controls
      preload="metadata"
      poster={poster}
      aria-label={title || 'Property video'}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default function VideoPlayer({ video }) {
  if (video.type === 'youtube') {
    return <YouTubePlayer videoId={video.videoId} title={video.title} />
  }
  return <LocalPlayer src={video.src} poster={video.poster} title={video.title} />
}
