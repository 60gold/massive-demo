$(document).ready(function() {

  //表單Name欄位未填寫時增加顯示紅色框線的class以及提示文字
  $("#name").blur(function(){
    if ($("#name").val()=="") {
      $("#name").addClass("haserror")
      document.getElementById("list-unstyled-name").innerHTML ="<li>You must enter name.</li>";
    } else {
      $("#name").removeClass("haserror");
      document.getElementById("list-unstyled-name").innerHTML ="";
    }
  });

  //表單Email欄位未填寫時增加顯示紅色框線的class以及提示文字
  $("#email").blur(function(){
    if ($("#email").val()=="") {
      $("#email").addClass("haserror")
      document.getElementById("list-unstyled-email").innerHTML ="<li>Invalid email address!</li>";
    } else {
      $("#email").removeClass("haserror");
      document.getElementById("list-unstyled-email").innerHTML ="";
    }
  });

  
  // $(function(){
  //   if ($("#name").val()=="" && $("#email").val()=="") {
  //     $("#not-allowed").css({'cursor' : 'not-allowed'})
  //   } else (
  //     $("#not-allowed").css({'cursor' : 'auto'})
  //   )
  // });

  //button鼠標模式
  $("#name").keyup(function(){
    if ($("#email").val()>=1) {
      $("#form-button").css({'cursor' : 'auto'});
      $("#form-button").removeAttr("disabled");
      document.form1.submit();
    }
  });

  $("#email").keyup(function(){
    if ($("#name").val()>=1) {
      $("#form-button").css({'cursor' : 'auto'});
      $("#form-button").removeAttr("disabled");
      document.form1.submit();
    }
  });

  //點擊button跳出成功視窗並重新整理頁面
  $("#form-button").click(function(){
    if($("#name").val()==""){
      alert("Please enter name.");
      $("#name").focus();    
    }if($("#email").val()==""){
      alert("Please enter email.");
      $("#email").focus();       
    }else{
      alert("Thank you for your comment!");
      window.close();
      window.location.reload(); 
    }
  });
  
});