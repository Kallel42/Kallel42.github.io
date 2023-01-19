let fl=document.getElementsByClassName("fa-chevron-down")


let rapidApiW=document.getElementsByClassName("rapidApiW")
let talendW=document.getElementsByClassName("talendW")
let snowFlakeW=document.getElementsByClassName("snowFlakeW")
let powerBIW=document.getElementsByClassName("powerBIW")
let FlaskW=document.getElementsByClassName("FlaskW")

let circles=document.getElementsByClassName("fa-circle")
let rat=document.getElementsByClassName("fa-table")
let cloud=document.getElementsByClassName("fa-cloud")
let vis=document.getElementsByClassName("fa-chart-line")
let json=document.getElementsByClassName("json")

let rapidApiBloc=document.getElementsByClassName("rapidApiBloc")
let talendBloc=document.getElementsByClassName("talendBloc")
let snowFlakeBloc=document.getElementsByClassName("snowFlakeBloc")
let powerBIBloc=document.getElementsByClassName("powerBIBloc")
let FlaskBloc=document.getElementsByClassName("FlaskBloc")

rapidApiBloc[0].addEventListener("mouseover",()=>{rapidApiW[0].style.display="block";fl[0].style.color="navy";})
rapidApiBloc[0].addEventListener("mouseout",()=>{rapidApiW[0].style.display="none";fl[0].style.color="transparent";})
talendBloc[0].addEventListener("mouseover",()=>{talendW[0].style.display="block";fl[1].style.color="navy";})
talendBloc[0].addEventListener("mouseout",()=>{talendW[0].style.display="none";fl[1].style.color="transparent";})
snowFlakeBloc[0].addEventListener("mouseover",()=>{snowFlakeW[0].style.display="block";fl[2].style.color="navy";})
snowFlakeBloc[0].addEventListener("mouseout",()=>{snowFlakeW[0].style.display="none";fl[2].style.color="transparent";})
powerBIBloc[0].addEventListener("mouseover",()=>{powerBIW[0].style.display="block";fl[3].style.color="navy";})
powerBIBloc[0].addEventListener("mouseout",()=>{powerBIW[0].style.display="none";fl[3].style.color="transparent";})
FlaskBloc[0].addEventListener("mouseover",()=>{FlaskW[0].style.display="block";fl[4].style.color="navy";})
FlaskBloc[0].addEventListener("mouseout",()=>{FlaskW[0].style.display="none";fl[4].style.color="transparent";})



circles[0].addEventListener("mouseover",()=>{json[0].classList.add("bb");json[0].style.color="navy";})
circles[0].addEventListener("mouseout",()=>{json[0].classList.remove("bb");json[0].style.color="transparent";})
circles[1].addEventListener("mouseover",()=>{rat[0].classList.add("bb");rat[0].classList.remove("aa");})
circles[1].addEventListener("mouseout",()=>{rat[0].classList.remove("bb");rat[0].classList.add("aa");})
circles[2].addEventListener("mouseover",()=>{cloud[0].classList.add("bb");cloud[0].classList.remove("aa");})
circles[2].addEventListener("mouseout",()=>{cloud[0].classList.remove("bb");cloud[0].classList.add("aa");})
circles[3].addEventListener("mouseover",()=>{vis[0].classList.add("bb");vis[0].classList.remove("aa");})
circles[3].addEventListener("mouseout",()=>{vis[0].classList.remove("bb");vis[0].classList.add("aa");})

let toAdd=document.getElementsByClassName("toAdd")
let dayNow = new Date();
let dayNowM = new Date();
dayNowM.setHours(4,30,0)
const Mon = new Date("2020-05-12T23:50:21.817Z");
let cuday = dayNow.getDay();
function cud(cuday){
    switch (cuday){
        case 0:
            return dayNowM.setDate(dayNow.dayNow+1);
        case 6:
            return dayNowM.setDate(dayNow.getDate()+2);
        default:
            if(dayNow.getHours()<5){
                return dayNow
            }
            else{
                return dayNowM.setDate(dayNow.getDate()+1);
            }
    }
}

let allTime=document.getElementsByClassName("allTime")

let nextT=document.getElementsByClassName("nextT")



if(dayNow.getHours()<5 || dayNow.getHours()>15){
    toAdd[0].innerHTML=new Date(cud(dayNow));
    if(dayNow.getHours()==4 && dayNow.getMinutes()>30){
        nextT[0].innerHTML="";
        toAdd[0].innerHTML="Open to trade";
        toAdd[0].style.color="green"
    }
}
else{
    nextT[0].innerHTML="";
    toAdd[0].innerHTML="open to trade";
    toAdd.style.color="green"
}

