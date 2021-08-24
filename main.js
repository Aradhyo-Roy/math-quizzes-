player1_name=localStorage.getItem("Player_1_name");
player2_name=localStorage.getItem("Player_2_name");
 player1_score=0;
 player2_score=0;

 document.getElementById("name1").innerHTML= player1_name + ":";
 document.getElementById("name2").innerHTML= player2_name +":";

 document.getElementById("Score_p1").innerHTML= player1_score;
 document.getElementById("Score_p2").innerHTML= player2_score;

 document.getElementById("Question_turn").innerHTML= "Question turn -" + player1_name;
 document.getElementById("Answer_turn").innerHTML= "Answer turn -" + player2_name;

 function send(){
     number1=document.getElementById("Quiz_questioner").value;
     number2=document.getElementById("Quiz_questioner2").value;
     actual_answer= parseInt(number1)*parseInt(number2);

     question_number="<h4>"+number1+"x"+number2+"</h4>";
     input_box="<br>Answer : <input type='text' id='input_check_box'>";
     check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
     row= question_number+input_box+check_button;

     document.getElementById("Output").innerHTML=row;

     document.getElementById("Quiz_questioner").value="";
     document.getElementById("Quiz_questioner2").value="";
}
answer_turn="player2";
question_turn="player1";
function check(){
    answer=Number(document.getElementById("input_check_box").value);
  var  actual_answer=Number(document.getElementById("Quiz_questioner").value)*Number(document.getElementById("Quiz_questioner2").value);
    console.log("answer in lower case =" + answer);
    console.log("answer2 in lower case = " +answer_2);
    if(answer==actual_answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("Score_p1").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("Score_p2").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("Question_turn").innerHTML="Question turn-"+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("Question_turn").innerHTML="Question turn-"+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("Answer_turn").innerHTML="Answer turn-"+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("Answer_turn").innerHTML="Answer turn-"+player1_name;
    }
    document.getElementById("Output").innerHTML="";
}