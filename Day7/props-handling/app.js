const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);
const arr =[
  {
  name:"Prabjyot",
  score:29,
},
{
  name:"Subhadeep",
  score:50,
},
{
  name:"Mohit",
  score:49,
},
{
  name:"Rajandra",
  score:19,
}
];

const styleObj={
    color:"purple",
    fontSize:"1.5rem",
    fontWeight:"600"
}

const Card=(props)=>{
  const {name,score} =props;
  return(
    <div className="card">
    <h1 style={{color:"red",fontWeight:"700",fontSize:"3rem"}}>{name}</h1>
    <p style={styleObj}>{score}</p>
    </div>
  );
};

const App=()=>{
  return(
    <div className="parent">
    {/* <h1>Hello</h1> */}
    {arr.map((elem)=>{
      return <Card name={elem.name} score={elem.score}/>;    })}
    </div>
  );
};

reactRoot.render(App());