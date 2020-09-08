let rows = 10;
let cols = 10;
for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= cols; j++){
        document.write('*');
    }
    document.write('<br/>');
}

document.write('<br/>');

//right triangle
for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br/>');
}

document.write('<br/>');

//pyramid
for(let i = 1; i <= rows; i++){

    for(let k = 1; k <= (rows-i); k++){
        document.write('&nbsp;');
    }
    for(let j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br/>');
}

document.write('<br/>');

//diamond
for(let i = 1; i <= rows; i++){

    for(let k = 1; k <= (rows-i); k++){
        document.write('&nbsp;');
    }
    for(let j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br/>');
}
for(let i = 1; i <= rows; i++){

    for(let j = 1; j <= i; j++){
        document.write('&nbsp');
    }
    for(let k = 1; k <= (rows-i); k++){
        document.write('*');
    }
    for(let j = 1; j <= i; j++){
        document.write('&nbsp');
    }
    document.write('<br/>');
}
