function sign_up_validation()
{
    full_name = document.getElementById("f_name").value
    e_mail = document.getElementById("email").value
    pwd = document.getElementById("password").value
    c_pwd = document.getElementById("c_password").value
    dob = document.getElementById("dob").value
    m = document.getElementById("male").value
    f = document.getElementById("female").value
    o = document.getElementById("other").value
    m_number = document.getElementById("mobile_number").value
    t_n_c = document.getElementById("check_box").value

    full_name_regex = /^[a-zA-Z]*$/
    pwd_regex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
    m_number_regex = /^[6789][0-9]{9}$/;

    /*name validation */
    if(full_name=="")
    {
        document.getElementById("medatory").innerHTML="name must not empty";
        return false;
    }
    else if(!full_name_regex.test(full_name))
    {
        document.getElementById("medatory").innerHTML="only characters"
        return false;
    }
    else
    {
        document.getElementById("medatory").innerHTML=""
    }

    /*gender validation*/ 
    if(!m.checked && !f.checked)
    {
        document.getElementById("medatory").innerHTML="must select gender"
        return false;
    }
    else
    {
        document.getElementById("medatory").innerHTML=""
        return false;
    }

    if(!t_n_c.checked)
    {

        return false;
    }
    else
    {

    }
    return true;
}