export default function MovieTypes(props) {
  console.log(props);
  return (
    <div className="movie-types">
      电影类型:
      {props.movieTypeList.map(movieType => {
        return <button key={movieType}>{movieType}</button>;
      })}
    </div>
  );
}
