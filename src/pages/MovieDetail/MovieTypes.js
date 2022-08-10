export default function MovieTypes(props) {
  console.log(props);
  return (
    <div className="movie-types">
      {props.movieTypeList.map(movieType => {
        return <button key={movieType}>{movieType}</button>;
      })}
    </div>
  );
}
