



const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

document.getElementById("btn").addEventListener("click",()=>
{
    let length=document.getElementById("length").value;
    let password="";
    for(let i=0;i<length;i++)
    {
    let randomindex=Math.floor(Math.random()*characters.length)
    password=password+characters[randomindex]
    }
    document.getElementById("password").value=`${password}`;

})

document.getElementById("copy").addEventListener("click",()=>
{
    navigator.clipboard.writeText(document.getElementById("password").value)
})