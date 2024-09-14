interface VideoProps {
  readonly src: string;
  readonly poster: string;
}

export const Video = ({ src, poster }: VideoProps) => {
  return (
    <video width="100%" height="380px" poster={poster} controls preload="auto">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
