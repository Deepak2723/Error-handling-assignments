class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of the User class
  const user = new User("Mithun", "password123");
  
  // Get the password (masked with asterisks)
  console.log(user.password); // Output: *********
  
  // Set a new valid password
  user.password = "NewPassw0rd";
  console.log(user.password); // Output: *********
  
  // Try to set an invalid password
  user.password = "short"; // Output: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.

  