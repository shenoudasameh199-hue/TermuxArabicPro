let allCommands = [];

async function loadData(){

const res = await fetch("data/commands.json");

allCommands = await res.json();

show(allCommands);

}

function show(data){

const app=document.getElementById("app");

app.innerHTML="";

data.forEach(item=>{

app.innerHTML+=`
<div class="card">
<h3>${item.title}</h3>
<p>${item.description}</p>

<pre>${item.command}</pre>

<button onclick="copy('${item.command}')">
📋 نسخ
</button>

</div>
`;

});

}

function copy(text){

navigator.clipboard.writeText(text);

alert("تم النسخ ✅");

}

document
.getElementById("search")
.addEventListener("input",e=>{

const value=e.target.value.toLowerCase();

show(

allCommands.filter(x=>

x.title.toLowerCase().includes(value)

||

x.description.toLowerCase().includes(value)

)

);

});

loadData();
async function loadPage(page){

const res = await fetch(`pages/${page}.html`);

const html = await res.text();

document.getElementById("content").innerHTML = html;

}

loadPage("home");
