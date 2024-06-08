import React from "react";
import "./Movie.css";
interface MovieProps {
  //컴포넌트가 받을 타입
  title: string;
  posterUrl: string;
}

const Movie: React.FC<MovieProps> = ({ title, posterUrl }) => {
  //인터페이스 props를 타입으로 받기
  return (
    <div>
      <img className="movie" src={posterUrl} alt={`${title}`} />
    </div>
  );
};

export default Movie;
