import bcrypt from "bcryptjs";

//password encryption middleware
export async function passwordEncryption(next) {
  //if user modifies anything but password then we will continue with the next function in the stack.
  if (!this.isModified(`password`)) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  next();
}
