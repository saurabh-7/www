 var username=window.sessionStorage.getItem("firstname");
     if(username==null){
      window.location="index.html";
      alert("Please Login First...!!");
     }