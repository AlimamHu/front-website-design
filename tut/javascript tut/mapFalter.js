const data=[2,2,3,4,5,56,66,6]
data.forEach((e)=>{
    console.log(e)
})

const new_data=data.map((v,i )=>{
     return v+i 
})

console.log(new_data)

// this loop of filter condition
const new2=data.filter((e)=>{
    return e>10
})
console.log(new2,"\n------>")


// reduce get all sum of element (element wise )
let newarray=data.reduce((e,e2,e3)=>{
    return e+e2+e3
})
console.log(newarray)