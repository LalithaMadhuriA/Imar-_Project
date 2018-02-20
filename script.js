$(document).ready(function(){
	$("#signup").click(function(){
		$("#flogin,#reg").hide();
		$("#sign").show();
	});
	$("#passwrd").click(function(){
		$("#flogin,#reg").hide();
		$("#nwpswd").show();
	});
	$("#register").click(function(){
		alert('enter');
		let fname=$("#fname").val();
		let lname=$("#lname").val();
		let email=$("#emailid").val();
		let phno=$("#phno").val();
		let aadh=$("#aadno").val();
		let pswd=$("#pswrd").val();
		let cpswd=$("#cpswrd").val();

	    let expression = /^[\w\-\.\+]+\@inmar\.com$/;
	    //let strongpswd=  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	    let strongpswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&$_!@.]).{8,}$/;
	    //let phn_exp=/^[0-9].{10,12}$/;
	    let check=true;

	    if(fname.length<3 || lname.length<6){

	    	$("#fn").html("The FirstName and LastName should be of atleast 3 and 6 characters");
	    	check=false;
	    }
	    if (!expression.test(email)) {
	       $("#eid").html("wrong email-id");
	       check=false;	
	    }
	    if(phno.length<10 || phno.length>12){
	    	$("#pn").html("wrong Phone number");
	    	check=false;
	    }
	    if(aadh.length!=12){
	    	$("#aad").html("wrong Aadhar Number");
	    	check=false;
	    }
	    if(!strongpswd.test(pswd)){
	    	$("#ps").html("The password should be strong");
	    	check=false;
	    }
	    /*else if(pswd==cpswd){
	    	$("#cps").html("The password is not matched");
	    	//check=false;
	    }*/
	    if(check){
	    	//alert("hii");
	    	$("#sign").submit();
	    }
		
	 });
    });
   
    /*("#login").click(function(){
    	let lemail=$("#uname").val();
    	let lpswd=$("#lpswd").val();
    	let expression = /^[\w\-\.\+]+\@inmar\.com$/;

    	let check=true;
    	if(!expression.test(lemail))
    	{
    		$("#le").html("wrong email id");
    		check=false;
    	}
    	if(lpswd.length==0){
    		$("#lp").html("password should be given");
    		check=false;
    	}
    	if(check){
    	   $("#flogin").submit();	
    	}
    	
    });*/

	$("#reset").click(function(){ 
		var username=$("#unameup").val();
		var password=$("#pswd").val();       
        $.post("process.php", { username:username, password:password } ,function(data){
            alert(data);
        });
});