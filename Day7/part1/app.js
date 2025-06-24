/*
console.log("Hello All");

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    </ul>
    
   const rootElem=document.getElementById("root");

   const item1=document.createElement("li");
   item1.innerText="Item 1";
   
   const item2=document.createElement("li");
   item2.innerText="Item 2"; 
   
   const list=document.createElement("ul");
   list.appendChild(item1);
   list.appendChild(item2);

   rootElem.appendChild(list);
*/


// const item1 = React.createElement("li", {}, "Item 1");
// const item2 = React.createElement("li", {}, "Item 2");
// const list = React.createElement("ul", {}, [item1, item2]);

const list=
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);
reactRoot.render(list);
