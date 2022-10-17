function StrArrNumb(a:any[]){

  var newitem: number; 
  let output:number[]=[];
  
  for (let i=0; i<a.length; i++){
    
    if (typeof a[i] =="string"){
      newitem=parseInt(a[i]);
      output[i]=newitem;
    } 
    else if (typeof a[i] =="number") {
      output[i]=a[i];
    }
    else{
      
    }

    
  }
   return output 
  };


function PlaneArr(a:number[]){
  const out=a.flat(Infinity);
  return out
};



function HowManyZeros(a:number[] ){

  var i: number
  var totalzeros:number
  var j: number
  var output:number[]=[];
  
  i=0;
  totalzeros=0;
  j=0;
   while (i<a.length && totalzeros<=1 ){

    if (a[i]==0){
      totalzeros=totalzeros+1;
      j=i;
      i++

      
    }
    else{
      i++
    }
    
  }
  output[0]=totalzeros;
  
  output[1]=j;
       
  return output 
  };





function DotProduct(a:number[],pos:number){
  var result:number;
  
  result=1;
  
  for (let i=0; i<pos;i++){
    result=result*a[i];
    
  }
  

  for (let j=pos+1; j<a.length;j++){
    result=result*a[j];
  }
  return result
};





function ArrayModify(nainp:any[]){
  
  let aout: number[]=[];
  var limite:number;
  let ainp:number[]=[];
  
  ainp=StrArrNumb(nainp);
  ainp=PlaneArr(ainp);
  
  aout[0]=DotProduct(ainp,0);
      
  if (HowManyZeros(ainp)[0]==0){
    for (let i=1; i< ainp.length; i++){
      aout[i]=aout[i-1]*ainp[i-1]/ainp[i];
    }
        
  }

      
        
    
      
  else if (HowManyZeros(ainp)[0]==1){
    limite=(HowManyZeros(ainp))[1];
    for(let k=0; k<limite;k++){
      aout[k]=0;
    }
          
    aout[limite]=DotProduct(ainp,limite)
            
    for(let l=limite+1; l<ainp.length;l++){
      aout[l]=0;
    }
  }
  else {
    for(let k=0; k<ainp.length;k++){
      aout[k]=0;
    }
          
  }    

  return aout;
};

const ejemplo: number[]=[1,2,3];
const ejemplo2: any[]=[1,[2,[3,4]]];
const ejemplo3: string[]=["1","2","3"];
const ejemplo4: number[]=[1,2,3,0];
const ejemplo5: number[]=[1,2,0,3,0];

console.log(ArrayModify(ejemplo))
console.log(ArrayModify(ejemplo4))
console.log(ArrayModify(ejemplo5))
console.log(PlaneArr(ejemplo2))
console.log(StrArrNumb(ejemplo3))
      
   