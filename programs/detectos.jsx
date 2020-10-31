function hi() {
    console.log("bruh Moment")
}

var Name = "Unknown OS";
if (navigator.userAgent.indexOf("Win") != -1) ReactDOM.render(<div class="btn-group" id="downBtn">
<button type="button" onclick="hi()" class="btn btn-success"><i
    class="fas fa-download mr-2"></i>Windows
(64-bit)</button>
<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split"
    data-toggle="dropdown">
</button>
<div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
</div>
</div>, document.getElementById("downBtn"))
    "Windows OS";



    
if (navigator.userAgent.indexOf("Mac") != -1) ReactDOM.render(<div class="disabled btn-group" id="downBtn">
<button type="button" onclick="hi()" class="disabled btn btn-danger"><i
    class="fas fa-times-circle mr-2"></i>Mac OS X (64-bit)</button>
<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
    data-toggle="dropdown">
</button>
<div class="dropdown-menu">
    <a class="dropdown-item" href="#">Linux (64-bit)</a>
    <a class="dropdown-item" href="#">Windows (64-bit)</a>
</div>
</div>, document.getElementById("downBtn"))




if (navigator.userAgent.indexOf("Linux") != -1) ReactDOM.render(<div class="btn-group" id="downBtn">
<button type="button" onclick="hi()" class="btn btn-success"><i
    class="fas fa-download mr-2"></i>Linux (64-bit)</button>
<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split"
    data-toggle="dropdown">
</button>
<div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
</div>
</div>, document.getElementById("downBtn"))



if (navigator.userAgent.indexOf("Android") != -1) Name =
    "Android OS";
if (navigator.userAgent.indexOf("like Mac") != -1) Name =
    "iOS";
