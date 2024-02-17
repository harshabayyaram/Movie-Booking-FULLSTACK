function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^.{8,}$/;

  if (values.email === "") {
    error.email = "Email should notbe empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email did'nt match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should notbe empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password error (min 8 digits)";
  } else {
    error.password = "";
  }

  return error;
}

export default validation;
