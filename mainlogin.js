function Adduser(){
    Player_1_name=document.getElementById("player_1_name_input").value;
    Player_2_name=document.getElementById("player_2_name_input").value;

    localStorage.setItem("Player_1_name", Player_1_name);
    localStorage.setItem("Player_2_name", Player_2_name);

    window.location="quiz.html";
}