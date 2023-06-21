


const myMiddleware = (useSWRNext) => {
  return (key ,fetcher ,config)=>{
  const swr =useSWRNext(key,fetcher,config);
  // console.log(key);
  // console.log(fetcher);
  // console.log(JSON.stringify(config));
  // if(key ==='http://localhost:9000/posts'){
  //   alert("api slider")
  // }
  // if(config.revalidateOnFocus===true){
  //   alert("revalidate is true")
  // }
  return swr
}}

export default myMiddleware