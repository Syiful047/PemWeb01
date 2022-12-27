function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let inp_form = document.getElementById("form");


    // if (inp_nama == "admin" || inp_pass == "integrity") {
    //     form.setAttribute("action", "dashboard.html");
    //     alert("login berhasil");
    // }
    if (inp_nama == "admin" && inp_pass == "integrity") {
        form.setAttribute("action","dashboard.html");
        alert("login berhasil");
    }
    else{
        alert("login gagal");
    }
}