"use strict";

process.stdin.resume();
process.stdin.setEncoding();

let iStr = "";
let cLne = 0;

process.stdin.on( 'data', iStn =>{
   iStr +=  iStn;
});

process.stdin.on('end' , _=>{
	iStr = iStr.trim().split('\n').map(string =>{
		return string.trim();
	})
	main();
})

function readline(){
	return iStr[cLne++];

}
function main(){
	 let c =0;
    let t = readline();

    while(c <parseInt(t) ){
       let st = readline();

       if(st.length >10  ){
           
           	 st = st.split("");
           	 let mlen = st.length-2;
             let newst = st[0]+ mlen + st[st.length-1];
             console.log(newst);
          
       } else{
       	   console.log(st);
       }

     c++;
    }
}
