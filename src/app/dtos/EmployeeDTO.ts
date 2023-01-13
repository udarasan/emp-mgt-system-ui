export class EmployeeDTO{
  name:String;
  department:String;
  email:String;
  mobile:String;
  dob:String;
  city:String;
  doj:String;
  country:String;
  address:String;
  status:String;


  constructor(name: String, department: String, email: String, mobile: String, dob: String, city: String, doj: String, country: String, address: String, status: String) {
    this.name = name;
    this.department = department;
    this.email = email;
    this.mobile = mobile;
    this.dob = dob;
    this.city = city;
    this.doj = doj;
    this.country = country;
    this.address = address;
    this.status = status;
  }
}

