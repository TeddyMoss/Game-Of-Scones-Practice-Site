<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
 	
 	<link href="Langdon.otf" type="text/css">
 		<link rel="stylesheet" 
 	type = "text/css"
 	href= "bootstrap.css" />
 	
 	<link rel="stylesheet" 
 	type = "text/css"
 	href= "master.css" />

 	</head>
	<body ng-app="contactApp">



                        <!--Main content--> 

<!-- id home--> <div id = "home">
<div class ="row">
<h1> game of scones </h1>
<h4> A battle of wit, creativity, strength, and endurance </h4>
<div class "col-md-3">
<button type="button" class="btn btn-default btn-lg" id="button1" class="button1">
  <span  aria-hidden="true"></span>Learn the Rules</button>
<button type="button" class="btn btn-default btn-lg" id="button2" class="button2" onclick="window.location.href='slide3 (1).PNG'">
  <span aria-hidden="true"></span>Free Download</button>

  <button type="button" class="btn btn-default btn-lg" id="button3" class="button3">
  <span aria-hidden="true"></span>Drop a Line</button>
</div>
</div>
<!-- id home--></div>




    
                                     
<div id = "rules">

  <!-- Wrapper for slides -->
    <div>
      <img src="slide2.PNG" alt="Chania">
    </div>




<!-- id for rules--></div>


 

  <div id = "rules2">
 <div>
      <img src="slide3.PNG" alt="Chania">
    </div>
 <!-- id for buy--></div>


 <div id = "rules3">
 <div>
      <img src="slide3 (1).PNG" alt="Flower">
    </div>
 <!-- id for buy--></div>

    <div id = "feedback">
<?php 
if(isset($_POST['submit'])){
    $to = "email@example.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

<!DOCTYPE html>
<head>
<title>Form submission</title>
</head>
<body>

<form action="" method="post">
First Name: <input type="text" name="first_name"><br>
Last Name: <input type="text" name="last_name"><br>
Email: <input type="text" name="email"><br>
Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
<input type="submit" name="submit" value="Submit">
</form>

</body>
</html>


 <!-- id for feedback--></div>






<div class ="top">
<a id="top1"> Back to top </a>
</div>




	</body>
	
	<script src = "jquery-1.11.3.min (4).js"> </script>
	<script src = "scroll.js"> </script>
  <script src = "handlebars-v3.0.3.js"> </script>
  <script src="bootstrap.min.js"></script>
  <script src="/js/angular.min.js"></script>
    <






	
<html>