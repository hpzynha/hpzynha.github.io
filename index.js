function openFunction(){
    document.getElementById("navbar").style.width="150px";
    document.getElementById("mainbox").style.marginLeft="150px";
    document.getElementById("mainbox").innerHTML="";
}
function closeFunction(){
    document.getElementById("navbar").style.width="0px";
    document.getElementById("mainbox").style.marginLeft="0px";
    document.getElementById("mainbox").innerHTML="&#9776;";
}
