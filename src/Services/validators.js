export const validateEmail = (email) => {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character

export const validatePassword = (password) => {
  var re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

export const ValidateName = (name) => {
  return /^[A-Za-z\s]*$/.test(name);
};

export const validateURL = (url) => {
  return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
    url
  );
};
