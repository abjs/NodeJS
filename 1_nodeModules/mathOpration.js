
exports.triangleArea =(b,h)=>(.5*b*h);
exports.trianglePerimeter=(a,b,c)=>(a+b+c);

exports.circleArea =(r)=>(Math.PI*r*r);
exports.circlePerimeter=(a,b,c)=>(2*Math.PI*r);


exports.squareArea =(a)=>(a*a);
exports.squarePerimeter=(a)=>(4*a);


exports.rectangleArea =(a,b)=>(a*b);
exports.rectanglePerimeter=(a,b)=>(2*(a+b));                                                            


exports.parallelogramArea =(b,h)=>(b*h);
exports.parallelogramPerimeter=(b,h)=>(2(b+h)); 

exports.trapezoidArea =(b1,b2,h)=>(.5*(b1+b2)*h);
exports.trapezoidPerimeter=(h,b1,b2,h)=>(2*h+b1+b2);

exports.sphereArea =(r)=>(4*Math.PI*r*r);
exports.sphereVolume=(r)=>((4/3)*Math.PI*r*r*r);

exports.cubeArea =(a)=>(6*a*a);
exports.cubeVolume=(a)=>(a*a*a);

exports.rectangularPrizmArea =(a,b,c)=>(2*(a*b+b*c+c*a));
exports.rectangularPrizmVolume=(a,b,c)=>(a*b*c);

exports.cylinderArea =(r,h)=>(2*Math.PI*r*r+Math.PI*r*h);
exports.cylinderVolume=(r,h)=>(Math.PI*r*r*h);

exports.coneArea =(r,h)=>(Math.PI*((r*h)+(r*r)));
exports.Volume=(r,h)=>((1/3)*Math.PI*r*r*h);

