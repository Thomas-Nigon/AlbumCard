import "../style.scss";

function card({ artist, albumName, imgSrc, starE }) {
  console.log(starE);
  return (
    <>
      <div className="albumDiv">
        <ul>
          <li>
            <h1>{albumName}</h1>
          </li>
          <li>
            <h2> {artist}</h2>
          </li>
        </ul>
        <img src={imgSrc} alt="" />
      </div>
      <div className="rate">
        Rate this album:
        <p>
          <img className="logo" src={starE} alt="" />
          <img className="logo" src={starE} alt="" />
          <img className="logo" src={starE} alt="" />
          <img className="logo" src={starE} alt="" />
          <img className="logo" src={starE} alt="" />
        </p>
      </div>
    </>
  );
}
export default card;
