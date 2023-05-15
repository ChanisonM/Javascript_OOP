// Create Class
class Users {

    // Create Property
    #name
    #password

    // default constructor
    // constructor(){
    //     console.log("เรียกใช้งาน Constructor");
    // }

    // parameter constructor
    // constructor(name , password){
    //         // เรียกใช้ใน Class
    //         this.name = name
    //         this.password = password

    //     }

    // Private 
    constructor(name , password){
        this.#name = name ,
        this.#password = password
    }

    // Create Methon    
    showDetails(){
        console.log(`Username : ${this.#name} , Password : ${this.#password}`);
    }

}

// Create Object
// เรียกใช้นอก Class
const user1 = new Users('Mon' , 132)
user1.name = "Chanison" 
user1.password = 5555
user1.showDetails()

const user2 = new Users('JoJo' , 456)
user2.showDetails()

const user3 = new Users('Nut' , 789)
user3.showDetails()

