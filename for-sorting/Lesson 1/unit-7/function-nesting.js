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

const message = petCat();
alert(message);

function petCat() {
    const doesWantPet = confirm('Погладишь котика?');

    if (!doesWantPet) return 'Ну лан :С';

    let message;

    const doesGiveMilk = confirm('А молока нальёшь?');
    const doesGiveSausage = confirm('А молока нальёшь?');

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

    return message;
}


function petCat() {
    const doesWantPet = confirm('Погладишь котика?');

    if (!doesWantPet) return 'Ну лан :С';

    const doesGiveMilk = confirm('А молока нальёшь?');
    const doesGiveSausage = confirm('А молока нальёшь?');

    if (!doesGiveSausage) return 'И какой с тебя толк?';

    return doesGiveMilk ? 'Лучший человек!' : 'Хороший человек!';
}
