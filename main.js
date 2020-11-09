const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');
const character ={
    name:'Pikachu',
    defaultHP:100,
    damageHP:90,
    elHP:document.getElementById('health-character'),
    elProgressbar:document.getElementById('progressbar-character'),
    renderHP:function (){
        this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
    },
    changeHP :function (count){
        if(this.damageHP<count){
            this.damageHP=0;
            $btn1.disabled=true;
            $btn2.disabled=true;
            alert(this.name+' lose!');
        }else{
        this.damageHP-=count;    
        }
    }
}

const enemy={
    name:'Charmander',
    defaultHP:100,
    damageHP:90,
    elHP:document.getElementById('health-enemy'),
    elProgressbar:document.getElementById('progressbar-enemy'),
    renderHP:function (){
        this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
    },
    changeHP:function (count){
        if(this.damageHP<count){
            this.damageHP=0;
            $btn1.disabled=true;
            $btn2.disabled=true;
            alert(this.name+' lose!');
        }else{
        this.damageHP-=count;    
        }
    }
}


function attack(cdamage,edamage,atack){
    console.log(atack);
    character.changeHP (random(edamage));
    enemy.changeHP(random(cdamage));
    character.renderHP();
    enemy.renderHP();
};

function random(num){
    return Math.ceil(Math.random()*num);
}
function init() {
    console.log('Start Game!');

}

init();
$btn1.addEventListener('click',function(){
    attack(20,20,'kick')}
)
$btn2.addEventListener('click',function(){
    attack(30,10,'strike')}
)