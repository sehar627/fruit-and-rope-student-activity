class Rope{
constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.02,
length:100
    }

this.rope=Matter.Constraint.create(options)
this.pointB=pointB
World.add(world,this.rope)

}

fly(){

    this.rope.bodyA=;
}

display(){
    if(this.rope.bodyA){

line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)

    }


}









}