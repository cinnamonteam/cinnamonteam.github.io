function renderThis() {
  // Render the HTML element below
  ReactDOM.render(
    <h2>LimeyTeam / Other</h2>
    , document.getElementById("rendertitle"));
  ReactDOM.render(
    <div>
      Replace success
    </div>



    , document.getElementById("render"));
}
function about() {
  ReactDOM.render(
    <h2>LimeyTeam / About</h2>
    , document.getElementById("rendertitle"));
  ReactDOM.render(
    <div>The page is still work in progress!</div>
    , document.getElementById("render"));
}
function home(){
  window.location.replace("https://limeyteam.github.io");
}

function gitdata(){
  window.location.replace("https://limeyteam.github.io/gitdata/");
}