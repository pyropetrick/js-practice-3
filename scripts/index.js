// Normal lvl
    
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
    