
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assessment_style.css">
    <title>Document</title>
</head>
<style>
* {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}
</style>
<body>
<div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  
                    
                   <a href="index.html">home</a>
                    <a href="prescriber.html">prescriber</a>
                   <a href="patient.html">patient</a>
                 <a href="resources.html">resources</a>
              
            
  </div>
</div>


    <div class="assessment">

        <header class="nav_header">
            <div class="jinarc_logo">
            <img src="image/Jinarc web logo_blue.png">
            </div>
         
           <nav >
                <ul >
                    
                    <li ><a href="index.html">home</a></li>
                    <li><a href="prescriber.html">prescriber</a></li>
                    <li class="active"><a href="patient.html">patient</a></li>
                    <li><a href="resources.html">resources</a></li>
              
                </ul>
                </nav>
                
               
        </header>

        <p class="assess_title">Prescriber Knowledge Assessment</p>

        <section class="assess-container custom-box">
      
          <!-- <form class="input-data"  method="post" autocomplete="off">   -->

            <div class="form_name">
                <input type="text" name="name" class="input_name" autocomplete="off" placeholder=" " >
                <label for="name" class="label_name">Name</label>
            </div>
           <div class="form_affi">
                <input type="text" name="hos_affi" class="inputhos_affi" autocomplete="off" placeholder=" " >
                <label for="hos_affi" class="label_hos">Hospital Affiliation</label>
            </div>
            
            <div class="form_specialty">
                <input type="text" name="specialty" class="input_specialty" autocomplete="off" placeholder=" " >
                <label for="specialty" class="label_specialty">Specialty
                </label>
            </div>
           
            <div class="form_email">
                <input type="email" name="email" class="input_email" autocomplete="off" placeholder=" " >
                <label for="email" class="label_email">Email</label>   
            </div>
     
            <div class="form_prc">
                <input type="text" name="prc" class="input_prc"
                autocomplete="off" placeholder=" " >
                <label for="prc" class="label_prc">PRC License</label>             
            </div>
       

        <div class="submit_btn">
         <button type="submit" class="submit_assess" name="submit" onclick="goToHome()">Submit</button>
        </div>
         </form>
    </section>


        <!--Start Assessment-->
        <div class="home-box custom-box hide">
            <p>In order for you to become a certified prescriber of 
            Jinarc, you need to successfully complete the Prescriber
            Knowledge Assessment and correctly answer all 8 questions.
            </p>

            <section class="start_btn">
                <button type="button" class="start_assess" onclick="startQuiz()">Start the Assessment</button>
            </section>
        </div>

        <!--Assessment-->
        
            <div class="quiz-box custom-box hide">
                
                <div class="question-number">
                   
                </div>

               <div class="question-text">
                
                </div>

                <div class="option-container">
                    
                </div>
               
                
                <section class="res-nxt">
                    
                <div class="reset-btn">
                    <button type="button" class="res-btn" onclick="clickReset()">Reset</button>
                </div>
                <div class="next-question-btn" onclick="next()">
                    <button type="button" class="nxt-btn">Next</button>
                </div>
              
                </section>
            </div>
            
        <!--Assessment-->

        <!--Assessment Result-->
            <div class="result-box custom-box hide">

                <section>
                <p>Your <b>Prescriber Knowledge Assessment</b> score
                    is</p>
                    <div class="correct-answer">
                        <p class="total-correct"></p>
                        <p>out of 8</p>
                        <p class="assess-result">Your assessment result</p>
                    </div>
                </section>

                <section class="answers-indicator">
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
                   <div>4</div>
                   <div>5</div>
                   <div>6</div>
                   <div>7</div>
                   <div>8</div>
                </section>


                <section class="failed-buttons">
                    <button type="button" class="retake" onclick="tryAgainQuiz()">RETAKE</button>
                    <a href="DOWNLOADABLES/Jinarc Prescribing Information_F.pdf"><button type="button" class="preview-info">review prescribing information</button></a>
                    <a href="DOWNLOADABLES/JINARC_RMP_Prescriber Guide.docx"><button type="button" class="preview-guide">review prescriber guide</button></a>
                </section>

            </div>

        <!--Assessment Passed Result-->
            <div class="passed-box custom-box hide">

                <section class="greetings">
                    <div class="certified-img">
                        <img src="image/Certified stamp.png">
                    </div>
                    
                    <div class="congratulations-container">
                        <div class="confetti-gif">
                            <img src="image/CONFETTI.gif">
                        </div>
                    <p class="congratulations">CONGRATULATIONS!</p>
                    <p class="certified-prescriber">You are now a 
                        certified Jinarc® prescriber.</p>
                    </div>
                </section>

                <section class="signature">
                    <canvas height="50" width="267.8" class="signature-pad">
                    </canvas>
                    <div class="signature-button">
                        <p class="sign">PLEASE SIGN HERE TO COMPLETE THE ASSESSMENT</p>
                        <button type="reset" class="rst-btn" onclick="clickReset()">Reset</button>
                        
                        <button type="submit" class="done-btn">Done</button>
                    </div>
               
                </section>
            </div>
        <!--Assessment Passed Result-->
    

<script src="question.js"></script>
<script src="app.js"></script>


</body>
</html>