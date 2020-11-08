const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');
const character ={
    name:'Pikachu',
    defaultHP:100,
    damageHP:90,
    renderHP:function (){
        this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
    },
    changeHP :function (count){
        if(this.damageHP<count){
            this.damageHP=0;
            alert(this.name+' lose!');
            $btn.disabled=true;
        }else{
        this.damageHP-=count;    
        }
    }
}

const enemy={
    name:'Charmander',
    defaultHP:100,
    damageHP:90,
    renderHP:function (){
        this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
    },
    changeHP:function (count){
        if(this.damageHP<count){
            this.damageHP=0;
            alert(this.name+' lose!');
            $btn.disabled=true;
        }else{
        this.damageHP-=count;    
        }
    }
}
$btn1.addEventListener('click',
    attack(20,20,'kick')
)
$btn2.addEventListener('click',
    attack(30,10,'strike')
)

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
function renderHP(person){
    person.elHP.innerText=person.damageHP+'/'+person.defaultHP;
    person.elProgressbar.style.width=person.damageHP+'%';
}

function changeHP(count,person){
    if(person.damageHP<count){
        person.damageHP=0;
        alert(person.name+' lose!');
        $btn.disabled=true;
    }else{
    person.damageHP-=count;    
    }
}
init();