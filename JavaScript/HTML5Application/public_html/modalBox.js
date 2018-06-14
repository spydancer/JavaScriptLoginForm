    function CreateNewElement(elId,typeElement,atr1,typeAtr1,atr2,typeAtr2,content)
    {
        if(typeElement == "div")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            if (atr1 != null){
                ElementTest.setAttribute(atr1,typeAtr1);
            }
                if(content != null)
                {
                    ElementTest.textContent=content;
                }
                    return ElementTest;
        }
        else if(typeElement == "button")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            if (atr1 != null){
                ElementTest.setAttribute(atr1,typeAtr1);
            }
                if (atr2  != null){
                    ElementTest.setAttribute(atr2,typeAtr2);
                }
                    if(content != null)
                    {
                        ElementTest.textContent=content;
                    }
                    return ElementTest;
        }
        else if(typeElement == "br")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            return ElementTest;
        }
        else if(typeElement == "span")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            if (atr1 != null){
                ElementTest.setAttribute(atr1,typeAtr1);
            }
                if(content != null)
                {
                    ElementTest.textContent=content;
                }
                    return ElementTest;
        }
        else if(typeElement == "span")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            if (atr1 != null){
                ElementTest.setAttribute(atr1,typeAtr1);
            }
                if(content != null)
                {
                    ElementTest.textContent=content;
                }
                    return ElementTest;
        }

        else if(typeElement == "input")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            if (atr1 != null){
                ElementTest.setAttribute(atr1,typeAtr1);
            }
                    return ElementTest;
        }

        else if(typeElement == "label")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
                if(content != null)
                {
                    ElementTest.textContent=content;
                }
                    return ElementTest;
        }

        else if(typeElement == "h1" || typeElement == "h2" || typeElement == "h3" || typeElement == "h4" || typeElement == "h5" || typeElement == "h6" )
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            if(content != null){
                ElementTest.textContent=content;
            }
            return ElementTest;
        }

        else if(typeElement == "table")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            return ElementTest;
        }
        else if(typeElement == "tbody")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            return ElementTest;
        }
        else if(typeElement == "tr")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            return ElementTest;
        }
        else if(typeElement == "td")
        {
            let ElementTest=elId;
            ElementTest=document.createElement(typeElement);
            ElementTest.id="id_"+elId;
            return ElementTest;
        }

    }
    let div="div";
    let clas="class";
    let span="span";
    let table="table";
    let tbody="tbody";
    let button="button";
    let label="label";
    let input="input";
    let h1="h1";
    let h2="h2";
    let h3="h3";
    let h4="h4";
    let h5="h5";
    let h6="h6";
    let test;

    //asd

 function startJavaScript()
 {
    //Log In Form Start's here------------------------------------------------->
    //Log In Form Start's here------------------------------------------------->
    document.body.appendChild(CreateNewElement("div_Class_Content",div,clas,"content"));
    document.getElementById("id_div_Class_Content").appendChild(CreateNewElement("div_Class_Border",div,clas,"border"));
    document.getElementById("id_div_Class_Border").appendChild(CreateNewElement("div_Class_LogIn","div",clas,"form_login"));
    document.getElementById("id_div_Class_LogIn").appendChild(CreateNewElement("brLoginFomr","br"));
    document.getElementById("id_div_Class_LogIn").appendChild(CreateNewElement("btn_LogIn","button",clas,"oval_button","onclick","openModalLogInBox()","Log In"));
    document.getElementById("id_div_Class_LogIn").appendChild(CreateNewElement("brLoginFomr","br"));
    document.getElementById("id_div_Class_LogIn").appendChild(CreateNewElement("btn_LogIn","button",clas,"oval_button","onclick","openModalRegisterBox()","Registration"));   
    //Log In Form End's here------------------------------------------------->
    //Log In Form End's here------------------------------------------------->

    //Log In Modal Form Start's here------------------------------------------------->
    //Log In Modal Form Start's here------------------------------------------------->
    document.body.appendChild(CreateNewElement("div_Class_Modal_LogIn","div","class","modalLog"));
    document.getElementById("id_div_Class_Modal_LogIn").appendChild(CreateNewElement("div_Class_Modal_Contet",div,clas,"modal-content"));
    document.getElementById("id_div_Class_Modal_Contet").appendChild(CreateNewElement("div_Class_Modal_Header","div",clas,"modal-header"));
    document.getElementById("id_div_Class_Modal_Header").appendChild(CreateNewElement("span_LogIn_Class_CloseLog","span",clas,"closeLog",null,null,"x"));
    document.getElementById("id_div_Class_Modal_Header").appendChild(CreateNewElement("h2_Log_In_Center","h2",null,null,null,null,"Log In"));
    document.getElementById("id_div_Class_Modal_Contet").appendChild(CreateNewElement("div_Class_Modal_Body","div",clas,"modal-body"));
    document.getElementById("id_div_Class_Modal_Contet").appendChild(CreateNewElement("div_Class_Modal_Footer","div",clas,"modal-footer"));

    document.getElementById("id_div_Class_Modal_Body").appendChild(CreateNewElement("table_Login_Modal","table"));
    document.getElementById("id_table_Login_Modal").appendChild(CreateNewElement("table_Login_Modal_Body","table"));

    document.getElementById("id_table_Login_Modal_Body").appendChild(CreateNewElement("tr1_Table_Login_Modal","tr"));
    document.getElementById("id_tr1_Table_Login_Modal").appendChild(CreateNewElement("td1_Table_Login_Modal","td"));
    document.getElementById("id_tr1_Table_Login_Modal").appendChild(CreateNewElement("td2_Table_Login_Modal","td"));
    document.getElementById("id_td1_Table_Login_Modal").appendChild(CreateNewElement("label_User_name_Log","label",null,null,null,null,"UserName"));
    document.getElementById("id_td2_Table_Login_Modal").appendChild(CreateNewElement("input_User_name_Log","input","placeholder","Sneaky_Beaky_Like"));

    document.getElementById("id_table_Login_Modal_Body").appendChild(CreateNewElement("tr2_Table_Login_Modal","tr"));
    document.getElementById("id_tr2_Table_Login_Modal").appendChild(CreateNewElement("td3_Table_Login_Modal","td"));
    document.getElementById("id_tr2_Table_Login_Modal").appendChild(CreateNewElement("td4_Table_Login_Modal","td"));
    document.getElementById("id_td3_Table_Login_Modal").appendChild(CreateNewElement("lable_Password_Log","label",null,null,null,null,"Password"));
    document.getElementById("id_td4_Table_Login_Modal").appendChild(CreateNewElement("input_Password_Log","input","type","password")); 

    document.getElementById("id_div_Class_Modal_Body").appendChild(CreateNewElement("btn_LogIn_ModalBox","button",clas,"modalBoxBtnStyle","onclick","showLogInIngo()","Log In"));
    document.getElementById("id_div_Class_Modal_Footer").appendChild(CreateNewElement("h5_Forget_password","h5",null,null,null,null,"Did you Forget your Pasword ?"));
    //Log In Modal Form End's here------------------------------------------------->
    //Log In Modal Form End's here------------------------------------------------->

    //Modal Box Register Form Stat's hete -------------------------------------->
    //Modal Box Register Form Stat's hete -------------------------------------->
    document.body.appendChild(CreateNewElement("div_Class_Modal_Reg",div,clas,"modalReg"));
    document.getElementById("id_div_Class_Modal_Reg").appendChild(CreateNewElement("div_Class_Modal_Reg_Contet",div,clas,"modal-content"));
    document.getElementById("id_div_Class_Modal_Reg_Contet").appendChild(CreateNewElement("div_Class_Modal_Reg_Header",div,clas,"modal-header"));
    document.getElementById("id_div_Class_Modal_Reg_Contet").appendChild(CreateNewElement("div_Class_Modal_Reg_Body",div,clas,"modal-body"));
    document.getElementById("id_div_Class_Modal_Reg_Contet").appendChild(CreateNewElement("div_Class_Modal_Reg_Footer",div,clas,"modal-footer"));
   //Table
    document.getElementById("id_div_Class_Modal_Reg_Body").appendChild(CreateNewElement("table_Reg_Modal",table));
    document.getElementById("id_table_Reg_Modal").appendChild(CreateNewElement("table_Reg_Modal_Body",tbody));
    
    document.getElementById("id_table_Reg_Modal_Body").appendChild(CreateNewElement("tr1_Table_Reg_Modal","tr"));
    document.getElementById("id_tr1_Table_Reg_Modal").appendChild(CreateNewElement("td1_Table_Reg_Modal","td"));
    document.getElementById("id_tr1_Table_Reg_Modal").appendChild(CreateNewElement("td2_Table_Reg_Modal","td"));
    document.getElementById("id_td1_Table_Reg_Modal").appendChild(CreateNewElement("label_First_Name_Reg",label,null,null,null,null,"First Name"));
    document.getElementById("id_td2_Table_Reg_Modal").appendChild(CreateNewElement("input_First_Name_Reg",input));

    document.getElementById("id_table_Reg_Modal_Body").appendChild(CreateNewElement("tr2_Table_Reg_Modal","tr"));
    document.getElementById("id_tr2_Table_Reg_Modal").appendChild(CreateNewElement("td3_Table_Reg_Modal","td"));
    document.getElementById("id_tr2_Table_Reg_Modal").appendChild(CreateNewElement("td4_Table_Reg_Modal","td"));
    document.getElementById("id_td3_Table_Reg_Modal").appendChild(CreateNewElement("label_Last_Name_Reg",label,null,null,null,null,"Last Name"));
    document.getElementById("id_td4_Table_Reg_Modal").appendChild(CreateNewElement("input_Last_Name_Reg",input));

    document.getElementById("id_table_Reg_Modal_Body").appendChild(CreateNewElement("tr3_Table_Reg_Modal","tr"));
    document.getElementById("id_tr3_Table_Reg_Modal").appendChild(CreateNewElement("td5_Table_Reg_Modal","td"));
    document.getElementById("id_tr3_Table_Reg_Modal").appendChild(CreateNewElement("td6_Table_Reg_Modal","td"));
    document.getElementById("id_td5_Table_Reg_Modal").appendChild(CreateNewElement("label_Email_Reg",label,null,null,null,null,"Email"));
    document.getElementById("id_td6_Table_Reg_Modal").appendChild(CreateNewElement("input_Email_Reg",input));

    document.getElementById("id_table_Reg_Modal_Body").appendChild(CreateNewElement("tr4_Table_Reg_Modal","tr"));
    document.getElementById("id_tr4_Table_Reg_Modal").appendChild(CreateNewElement("td7_Table_Reg_Modal","td"));
    document.getElementById("id_tr4_Table_Reg_Modal").appendChild(CreateNewElement("td8_Table_Reg_Modal","td"));
    document.getElementById("id_td7_Table_Reg_Modal").appendChild(CreateNewElement("lable_Password_Reg",label,null,null,null,null,"Password"));
    document.getElementById("id_td8_Table_Reg_Modal").appendChild(CreateNewElement("input_Password_Reg",input,"type","password"));

    document.getElementById("id_table_Reg_Modal_Body").appendChild(CreateNewElement("tr5_Table_Reg_Modal","tr"));
    document.getElementById("id_tr5_Table_Reg_Modal").appendChild(CreateNewElement("td9_Table_Reg_Modal","td"));
    document.getElementById("id_tr5_Table_Reg_Modal").appendChild(CreateNewElement("td10_Table_Reg_Modal","td"));
    document.getElementById("id_td9_Table_Reg_Modal").appendChild(CreateNewElement("label_User_name_Reg",label,null,null,null,null,"User Name"));
    document.getElementById("id_td10_Table_Reg_Modal").appendChild(CreateNewElement("input_User_name_Reg",input));
  
    document.getElementById("id_div_Class_Modal_Reg_Header").appendChild(CreateNewElement("span_Reg",span,clas,"closeLog",null,null,"x"));
    document.getElementById("id_div_Class_Modal_Reg_Header").appendChild(CreateNewElement("h2_Reg_Center",h2,null,null,null,null,"Registration"));
    document.getElementById("id_div_Class_Modal_Reg_Footer").appendChild(CreateNewElement("h3_Footer_Reg",h3,null,null,null,null," "));
    
    document.getElementById("id_div_Class_Modal_Reg_Body").appendChild(CreateNewElement("btn_Reg_ModalBox","button",clas,"modalBoxBtnStyle","onclick","ValidateEmail()","Log In"));
    //Modal Box Register Form End's hete -------------------------------------->
    //Modal Box Register Form End's hete -------------------------------------->
}
    function showLogInIngo(){
    let uname = document.getElementById('id_input_User_name_Log').value; 
    let pass = document.getElementById('id_input_Password_Log').value; 
    alert
    (
        "UserName :" + uname  +"\n"+
        "Password :" + pass  +"\n" 
    );
}
    function ValidateEmail() 
    {
    let email = document.getElementById('id_input_Email_Reg').value;
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        let name = document.getElementById('id_input_First_Name_Reg').value; 
        let fam = document.getElementById('id_input_Last_Name_Reg').value; 
        
        let uname = document.getElementById('id_input_User_name_Reg').value;
        let pass = document.getElementById('id_input_Password_Reg').value;
        alert
        (
            "First Name :" + name  +"\n"+
            "Last  Name :" + fam   +"\n"+
            "Email :     " + email +"\n"+
            "Password   :" + pass  +"\n"+
            "User Name  :" + uname +"\n"
        );
      }else{
        alert("You have entered an invalid email address!")
        return (false);
      }
       
    }

function openModalLogInBox()
{
    // Get the modal
    var modalLogIn = document.getElementById('id_div_Class_Modal_LogIn');
    // Get the button that show's username and password
    var btnModal = document.getElementById("id_btn_LogIn_ModalBox")
    // Get the <span> element that closes the modal
    var span = document.getElementById("id_span_LogIn_Class_CloseLog");
    // When the user clicks the button, open the modal 
        modalLogIn.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() 
    {
        modalLogIn.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) 
    {
        if (event.target == modalLogIn) {
            modalLogIn.style.display = "none";
        }
    }
}
function openModalRegisterBox()
{
    // Get the modal
    var modalRegister = document.getElementById('id_div_Class_Modal_Reg');
    // Get the button that opens the modal
    var btnModal = document.getElementById("idBtnReg")
    // Get the <span> element that closes the modal
    var span = document.getElementById("id_span_Reg");
    // When the user clicks the button, open the modal 

        modalRegister.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() 
    {
        modalRegister.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) 
    {
        if (event.target == modalRegister) {
            modalRegister.style.display = "none";
        }
    }
}