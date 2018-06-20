new Vue({
    el: '#app',
    data: {
        notPlaying: true,
        playerHealth: 100,
        monsterHealth: 100,
        actions: [],
        playerTurn: 'player-turn',
        monsterTurn: 'monster-turn',
        currentTurn: 0
    },
    methods: {
        startGame() {
            this.notPlaying = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.actions = [];
        },
        attackMonster(special) {
            let playerAtk = this.getRandomNumber(3, 10);
            this.monsterHealth -= playerAtk;
            this.actions.unshift({
                text: `Player hits monster hard for ${playerAtk}`,
                player: true,
                id: this.currentTurn + 1
            });

            this.currentTurn++;

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack() {
            let playerAtk = this.getRandomNumber(7, 17);
            this.monsterHealth -= playerAtk;
            this.actions.unshift({ text: `Player hits monster for ${playerAtk}`, player: true, id: this.currentTurn + 1 });

            this.currentTurn++;

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
            this.checkWin();
        },
        healPlayer() {
            if (this.playerHealth > 90) {
                this.playerHealth = 100;
                this.actions.unshift({ text: 'Player is at full health!', player: true, id: this.currentTurn + 1 });
            } else {
                this.playerHealth += 10;
                this.actions.unshift({ text: `Player heals for 10`, player: true, id: this.currentTurn + 1 });
            }

            this.currentTurn++;

            this.monsterAttacks();
        },
        getRandomNumber(min, max) {
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            console.log(rand);
            return rand;
        },
        monsterAttacks() {
            let monsterAtk = this.getRandomNumber(5, 12);
            this.playerHealth -= monsterAtk;
            this.actions.unshift({ text: `Monster hits player for ${monsterAtk}`, player: false, id: this.currentTurn + 1 });
            this.currentTurn++;
            this.checkWin();
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You win. Play again?')) {
                    this.startGame();
                } else {
                    this.notPlaying = true;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lose. Play again?')) {
                    this.startGame();
                } else {
                    this.notPlaying = true;
                }
                return true;
            }
            return false;
        },
        quitGame() {
            if (window.confirm('Do you really want to quit?')) {
                this.notPlaying = true;
            }
        }
    }
});