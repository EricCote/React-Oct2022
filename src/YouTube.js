export function YouTube({ id }) {
  return (
    <iframe
      title="video"
      type="text/html"
      width="480"
      height="270"
      style={{ margin: 10 }}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}
