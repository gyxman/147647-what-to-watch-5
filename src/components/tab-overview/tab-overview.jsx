import React from "react";

const TabOverview = () => {
  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">8,9</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">240 ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.
        (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

      <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual
        needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds
        himself the recipient of a priceless painting and the chief suspect in her murder.</p>

      <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

      <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and
        other</strong></p>
    </div>
  </React.Fragment>;
};

export default TabOverview;
