
import { Course, } from "./ex3";
export class Student{
   
    sid:number;
    sname:string;
    addrs:string;
    enrollCourse:Course;

    constructor(sid:number,sname:string,addrs:string,enrollCourse:Course){
      this.sid=sid;
      this.sname=sname;
      this.addrs=addrs;
      this.enrollCourse=enrollCourse;
    }

    studentDetails(){
        console.log(this.sid+" "+this.sname+" "+this.addrs);
        console.log(this.enrollCourse.cid+" "+this.enrollCourse.cname+" "+this.enrollCourse.fee);
    }
}

let ctobj = new Course(1,'Java',10000);

let sobj = new Student(321,'Rakesh','Chennai',ctobj);

sobj.studentDetails();