# MessageBox
A prompt window built in JQuery.


Demo: <a href='https://www2.cs.ccu.edu.tw/~ltc98u/MessageBox/'>Here</a>


<h2>Step 1.</h2>
<p>Call JQuery and MessageBox.js</p>
-------------------------------------------------------

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="MessageBox.js"></script>
	
-------------------------------------------------------


<h2>Step 2.</h2>
<p>Set html.</p>
<p>myBox is the div which to show.</p>
-------------------------------------------------------

    <div class="wrapper"></div>
    <div id="myBox">My message is here.</div>
	
-------------------------------------------------------


<h2>Step 3.</h2>
<p>New a MessageBox object, and input options.</p>
-------------------------------------------------------

    var myMessageBox = new MessageBox({
        target: "#myBox",
        duration: 2,
        wrapper: ".wrapper",
        side: "right",
        margin: 0,
    });
	
-------------------------------------------------------



<p>Call the method of MessageBox object, and myBox will show.</p>
-------------------------------------------------------

    myMessageBox.show();
	
-------------------------------------------------------
