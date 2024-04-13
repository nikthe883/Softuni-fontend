function solve(input) {
    const posse = {};
    const MAX_BULLETS = 6;
    const MAX_HP = 100;

    let numberOfCharacters = parseInt(input[0]);
    let currentIndex = 1;

    for (let i = 0; i < numberOfCharacters; i++) {
        const [name, hp, bullets] = input[currentIndex].split(' ');
        posse[name] = {
            hp: parseInt(hp),
            bullets: parseInt(bullets)
        };
        currentIndex++;
    }

   
    while (currentIndex < input.length) {
        const command = input[currentIndex];
        if (command === "Ride Off Into Sunset") {
            break;
        }
        const parts = command.split(" - ");
        const action = parts[0];
        const name = parts[1];

        switch (action) {
            case "FireShot":
                const target = parts[2];
                if (posse[name].bullets > 0) {
                    posse[name].bullets--;
                    console.log(`${name} has successfully hit ${target} and now has ${posse[name].bullets} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case "TakeHit":
                const damage = parseInt(parts[2]);
                const attacker = parts[3];
                posse[name].hp -= damage;
                if (posse[name].hp > 0) {
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${posse[name].hp} HP!`);
                } else {
                    console.log(`${name} was gunned down by ${attacker}!`);
                    delete posse[name];
                }
                break;
            case "Reload":
                const bulletsNeeded = MAX_BULLETS - posse[name].bullets;
                if (bulletsNeeded > 0) {
                    posse[name].bullets = MAX_BULLETS;
                    console.log(`${name} reloaded ${bulletsNeeded} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;
            case "PatchUp":
                const amount = parseInt(parts[2]);
                if (posse[name].hp < MAX_HP) {
                    const oldHp = posse[name].hp;
                    posse[name].hp = Math.min(posse[name].hp + amount, MAX_HP);
                    console.log(`${name} patched up and recovered ${posse[name].hp - oldHp} HP!`);
                } else {
                    console.log(`${name} is in full health!`);
                }
                break;
        }
        currentIndex++;
    }

   
    Object.keys(posse).forEach(name => {
        console.log(`${name}\n  HP: ${posse[name].hp}\n  Bullets: ${posse[name].bullets}`);
    });
}

// Example of input to simulate a possible scenario
const exampleInput = [
    "2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "PatchUp - Walt - 20",
    "Ride Off Into Sunset"
];

solve(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])

;
