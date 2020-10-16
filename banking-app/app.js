const menu = document.querySelector('.menu');
const createUser = document.querySelector('.create-user');
let users = [];
let User = function(name, balance){
    this.name = name,
    this.balance = balance
}

menu.addEventListener('click', function(e){
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        if (action==='create'){
            document.getElementById('crt').style.display = 'block';
            document.getElementById('dpt').style.display = 'none';
            document.getElementById('wdrw').style.display = 'none';
            // console.log('createmenu');
        }
        if (action==='deposit'){
            document.getElementById('dpt').style.display = 'block';
            document.getElementById('crt').style.display = 'none';
            document.getElementById('wdrw').style.display = 'none';
            // console.log('depositmenu');
        }
        if (action==='withdraw'){
            document.getElementById('wdrw').style.display = 'block';
            document.getElementById('crt').style.display = 'none';
            document.getElementById('dpt').style.display = 'none';
            // console.log('withdrawmenu');
        }
    }
})

const create_user = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
        let user = new User (
            document.getElementById('fname').value,
            document.getElementById('amount').value,
        )
        users.push(user);
        // to clear the form for the next entries
        document.querySelector('form').reset();

        //for display sa list
        let text = document.createTextNode(users);
        let newItem = document.createElement('li');
        newItem.appendChild(text);
        document.getElementById('try').appendChild(newItem);
}

//create user btn 
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', create_user);
});


User.prototype.deposit = function (user,amount){
    if (this.name === user){
        this.balance =+ amount;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', User.prototype.deposit());
});


const withdraw = function (user, amount){

}

const get_balance = function (user){

}

const send = function(from_user, to_user, amount){

}