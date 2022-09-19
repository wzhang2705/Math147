import './links.css';

function Links(props) {
  return (
    <a href={props.link} target={props.target}>{props.word}</a>
  );
}

export default Links;
