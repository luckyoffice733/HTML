class Department{
   
    deptno:number=0;
    dname:string="";
    loc:string="";

    constructor(deptno:number,dname:string,loc:string){
      this.deptno=deptno;
      this.dname=dname;
      this.loc=loc;
    }
}

class Employee{

    eid:number;
    ename:string;
    esal:number;
    dpart:Department;

    constructor(eid:number,ename:string,esal:number,dpart:Department){
           this.eid=eid;
           this.ename=ename;
           this.esal=esal;
           this.dpart=dpart;
    }
    empDetails(){
       console.log(this.eid+" "+this.ename+" "+this.esal)
       console.log(this.dpart.deptno+" "+this.dpart.dname+" "+this.dpart.loc);
    }

}

let dtobj= new Department(10,"RESEARCH","BOSTON");

let eobj=new Employee(321212,'harish',50000,dtobj);
eobj.empDetails();