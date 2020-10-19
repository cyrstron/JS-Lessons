function petCat() {
    const doesWantPet = confirm('Погладишь котика?');

    let message;

    if (doesWantPet) {
        const doesGiveMilk = confirm('А молока нальёшь?');
        const doesGiveSausage = confirm('А сосиску дашь?');

        if (doesGiveMilk) {
            if (doesGiveSausage) {
                message = 'Лучший человек!';
            } else {
                message = 'И какой с тебя толк?';
            }
        } else {
            if (doesGiveSausage) {
                message = 'Хороший человек!';
            } else {
                message = 'И какой с тебя толк?';
            }
        }
    } else {
        message = 'Ну лан :С';
    }

    return message;
}

function petCat() {
    const doesWantPet = confirm('Погладишь котика?');

    let message;

    if (doesWantPet) {
        message = treatCat();
    } else {
        message = 'Ну лан :С';
    }

    return message;
}

function giveMilk() {
    const doesGiveMilk = confirm('А молока нальёшь?');

    return treatCat(doesGiveMilk);
}

function treatCat(hadMilk) {
    const doesGiveSausage = confirm('А сосиску дашь?');

    let message;

    if (!doesGiveSausage) {
        message = 'И какой с тебя толк?';
    } else if (hadMilk) {
        message = 'Лучший человек!';
    } else {
        message = 'Хороший человек!';
    }

    return message;
}
