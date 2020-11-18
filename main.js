const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');

const character ={
    name:'Pikachu',
    defaultHP:100,
    damageHP:90,
    elHP:document.getElementById('health-character'),
    elProgressbar:document.getElementById('progressbar-character'),
    renderHP,
    changeHP
}

const enemy={
    name:'Charmander',
    defaultHP:100,
    damageHP:90,
    elHP:document.getElementById('health-enemy'),
    elProgressbar:document.getElementById('progressbar-enemy'),
    renderHP,
    changeHP
}
const{name,defaultHP,damageHP,elHP,elProgressbar}=character;
const{name:nameen,defaultHP:defaultHPen,elHP:elHPen,elProgressbar:elProgressbaren}=enemy;
console.log(name,nameen);



function renderHP(){
    this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
};
function changeHP(count){
    
    this.damageHP-=count; 
        this.renderHP();
        if(this.damageHP<0){
            this.damageHP=0;
            
            $btn1.disabled=true;
            $btn2.disabled=true;
            this.renderHP();
            alert(this.name+' lose!');
        }



        const $logf= document.getElementById('#logf');
        const $p=document.createElement('p');
        $p.innerText=this===enemy?showl(this, character,count):showl(this, enemy,count);
        console.log($p);
    
};
function showl(p1,p2,count){
const logs = [
    `${p1.name} вспомнил что-то важное, но неожиданно ${p2.name}, не помня себя от испуга, ударил в предплечье врага.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} поперхнулся, и за это ${p2.name} с испугу приложил прямой удар коленом в лоб врага.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} забылся, но в это время наглый ${p2.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} пришел в себя, но неожиданно ${p2.name} случайно нанес мощнейший удар.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} поперхнулся, но в это время ${p2.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} удивился, а ${p2.name} пошатнувшись влепил подлый удар.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} высморкался, но неожиданно ${p2.name} провел дробящий удар.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} пошатнулся, и внезапно наглый ${p2.name} беспричинно ударил в ногу противника.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} расстроился, как вдруг, неожиданно ${p2.name} случайно влепил стопой в живот соперника.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} пытался что-то сказать, но вдруг, неожиданно ${p2.name} со скуки, разбил бровь сопернику.${-count},${p1.damageHP+'/'+p1.defaultHP}`
]
return(logs[random(logs.length)-1]);
}


function attack(cdamage,edamage,atack){
    console.log(atack);
    character.changeHP (random(edamage));
    enemy.changeHP(random(cdamage));
    character.renderHP();
    enemy.renderHP();
    
};

const random=(num)=>{
    return Math.ceil(Math.random()*num);
};
const init=()=> {
    console.log('Start Game!');

}

init();
function press(button){
    let c=0;

        return  a=()=>{
            c++;
            if (c<=6){
                let left=6-c;
                console.log(c+" presses already, "+left+" left.");
            }
            if (c==6){
                button.disabled=true;
                console.log("All presses used")
            }
    }
}
    

const press1=press($btn1);
const press2=press($btn2);
$btn1.addEventListener('click',function(){
    press1();
    attack(20,20,'kick')}
)
$btn2.addEventListener('click',function(){
    press2();
    attack(30,10,'strike')}
)