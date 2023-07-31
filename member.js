function skill() {
    var skill = document.getElementById("skill").value;
    var skillError = document.getElementById("skillError");
    if (skill == "") {
        skillError.innerHTML = "Please enter your skill";
        return false;
    }
    else {
        skillError.innerHTML = "";
        return true;
    }
}