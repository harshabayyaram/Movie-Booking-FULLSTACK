function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^.{8,}$/;
  
    if (values.name === "") {
        error.name = "Name should notbe empty";
      }else {
        error.name = "";
      }
     
    if (values.email === "") {
      error.email = "Email should notbe empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email error";
    } else {
      error.email = "";
    }
  
    if (values.password === "") {
      error.password = "Password should notbe empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password error(minimum 8 digits)";
    } else {
      error.password = "";
    }
  
    return error;
  }
  
  export default validation;
  