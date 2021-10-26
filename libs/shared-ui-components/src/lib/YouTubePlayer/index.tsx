export interface YouTubeProps {
  title: string;
  uid: string;
}

export const YouTube = (props: YouTubeProps) => {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
      ></iframe>
    </div>
  );
}

//  default YouTube;sc