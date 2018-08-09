interface Sriram
{
    firstname:string;
    lastname:string;
    age:number;
    phone:number;
    salary:number;
    abc():string;
    abd(x:number,y:number):number;
}
let ram:Sriram;
ram={firstname:"Sriram",lastname:"sunkara",age:22,phone:8884653083,salary:25000,
        abc : function()
        {
            return "return this method Bro";
        },
        abd : function(a,b)
        {
            return a+b;
        }
    };
    console.log(ram.abc());
    console.log(ram.firstname);
    console.log(ram.lastname);
    console.log(ram.age);
    console.log(ram.abd(10,30));

