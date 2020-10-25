let rectangle ={
    perimeter:(x,y) => (2*(x+y)),
    area:(x,y) =>(x*y)
}

let solvRectangle = (l,b)=>{
    if(l> 0 && b>0){
        console.log(`The  Perimeter Of the rectangle is :${rectangle.perimeter(l,b)}`)
        console.log(`The Area Of the rectangle is :${rectangle.area(l,b)}`)       
    }
    else{
        console.log("The rectangle Dimension must be greater than zero");
    }
}
solvRectangle(0,30)