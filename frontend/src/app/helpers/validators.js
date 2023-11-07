import validator from "validator";

export const validateEmail = (email) => {
  if (!email) {
    throw Error("Invalid email");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  return true;
};

export const validatePassword = (password) => {
  if (!password) {
    throw Error("Invalid password");
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
    })
  ) {
    throw Error(
      "password is not strong, add symbols and alphanumeric characters"
    );
  }

  return true;
};
