// // Normal lvl
    
    // task 1
    let a = true;
    let b = false;
    let c = 17;
    let d = undefined;
    let e = null;
    console.log(`a : ${typeof(a)},
        b: ${typeof(b)}, 
        c: ${typeof(c)}, 
        d: ${typeof(d)}, 
        e: ${typeof(e)}`)


    // task 2

    let height = 15
    let width = 20

    if (height > width) console.log(height);
    else console.log(width); 

    // task 3

    for (let i = 1; i <= 20; i++) {
        if ((i % 3) === 0) console.log(i)
    }

    // task 4

    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true

    let shouldGoToWork = key && documents && pen && (apple || orange);
    console.log(shouldGoToWork);

    // task 5 

    let yourNum = Number(prompt('Введите число'));
    if (((yourNum % 3) === 0) && ((yourNum % 5) === 0)) console.log('FizBuz');
    else if ((yourNum % 5) === 0) console.log('Fiz');
    else if ((yourNum % 3) === 0) console.log('Buz');
    
    //  task 6

    let yourAge = Number(prompt('Введите ваш возраст'));
    if (yourAge >= 16 && yourAge <= 18) console.log('Можешь выкурить сигаретку, только маме не говори');
    else if (yourAge > 18) console.log('Попей пивка');
    else console.log('Пей колу');
    
    // task 7

    let side = prompt('Введите в какую сторону света вы бы хотели направиться');
    switch (side) {
        case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
        
        case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
        
        case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
        
        case 'восток': 
        console.log('на восток пойдешь разработчиком станешь');
        break;

        default:
        console.log('Попробуй еще раз');
    }

// Advanced lvl
    
//     task 1 
    
    let distortedName = 'пОлИнА нАбЕрЕжНаЯ';
    let correctlyName = '';
    
    for (let i = 0; i < distortedName.length; i++) {
        if (i === 0 || i === 7) {
            correctlyName += distortedName[i].toUpperCase();
        }
        else correctlyName += distortedName[i].toLowerCase();
    }
    
    console.log( `Привет, ${correctlyName}!`  )



    // task 2 

    let uNum = Number(prompt('Введите число'));

    let numSubtract = Number(prompt('Сколько отнять?'));
    let numSum =  Number(prompt('Сколько прибавить?'));
    let numMultiplic =  Number(prompt('Сколько умножить?'));
    let numSplit =  Number(prompt('Сколько разделить?'));

    let resultNum = (((uNum - numSubtract) + numSum) * numMultiplic) / numSplit;

    console.log(`(((${uNum} - ${numSubtract}) + ${numSum}) * ${numMultiplic}) / ${numSplit} = ${resultNum}`)


    // task 3

    let lattice = '#';

    for (let i = 0; i < 7; i++) {
        
        console.log(lattice);
        lattice += '#'
    }