// for the battle

class Battle {
    constructor() {
        this.combatants = {
            "player1": new Combatant({
                team: "player1",
                hp: 50,
                maxHp: 50,
                status: null
            }, this)
        }
        this.activeCombatants = {
            player: "player1",
            enemy: "player2",
        }
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Battle");
        this.element.innerHTML = (`
        <div class="Battle_hero">
            <img srx="${'/images/characters/people/hero.png'}" alt="hero" />
        <div>
        <div class="Battle_enemy">
            <img src=${'enemy.png'} alt ="Enemy" />
            <div>
            `)
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}