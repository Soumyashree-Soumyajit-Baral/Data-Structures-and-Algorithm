let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function compress(st){
  // Complete this function.
  let str='';
  for(let i=0;i<st.length-1;i++){
	  cnt=1;
	  if(st[i]==st[i+1]){
		  cnt++;
	  }else{
		  if(cnt>1){
			  str=str+st[i]+cnt;
		  }else{
			  str=str+st[i];
		  }
		  cnt=1;
	  }
  }
  console.log(str);
}
let t = parseInt(readLine())
for(let i=0;i<t;i++){
  st =readLine()
  compress(st)
}