import "./styles.css";

/* Loader https://codepen.io/eric-calhoun/pen/qBBpZvq */
const Loader = () => {
  return (
    <div id="container">
      <div id="pokeball_container">
        <div id="top"></div>
        <div id="bottom"></div>
        <div id="line"></div>
        <div id="line_button"></div>
        <div id="button"></div>
      </div>
      <div id="loading">loading...</div>
    </div>
  );
};

export default Loader;
