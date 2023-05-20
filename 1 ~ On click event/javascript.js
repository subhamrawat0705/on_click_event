function greet()
{
    var name = document.getElementById("name").value
     var string = "Hello "+name;
     document.getElementsByClassName("greet")[0].innerHTML=string;
}