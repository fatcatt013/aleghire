import React, {useState} from 'react';
import FightingUser from "../components/FightingUser";
import FightingLogWindow from "../components/FightingLogWindow";
import mobs from "../ingameConst/mobs";
import FightingWinWindow from "../components/FightingWinWindow"

const FightingChamber = ({victim, stopFight}) => {

    const evalEnemy = () => {
        if (victim.type === "mob"){
            return mobs.dungeon[victim.id];
        }
    }

    const countMaxHp = (user) => {
        if (user === "player") {
            return (sessionStorage.getItem("stamina") * 10) - sessionStorage.getItem("stamina");
        }
        return user.stamina * 10 - user.stamina;
    }

    const [enemy, setEnemy] = useState(evalEnemy());
    const [userHp, setUserHp] = useState(countMaxHp("player"));
    const [enemyHp, setEnemyHp] = useState(countMaxHp(enemy));
    const [logs, setLogs] = useState([]);
    const [winner, setWinner] = useState(null);

    const attack = (user) => {
        const attackIndex = Math.floor(Math.random() * 4);

        let _class = enemy.class;
        let strength = enemy.strength;
        let dexterity = enemy.dexterity;
        let intelligence = enemy.intelligence;
        let luck = enemy.luck;

        if (user === "player"){
            _class = sessionStorage.getItem("class");
            strength = sessionStorage.getItem("strength");
            dexterity = sessionStorage.getItem("dexterity");
            intelligence = sessionStorage.getItem("intelligence");
            luck = sessionStorage.getItem("luck");
        }

        if (_class === "Archer"){
            const dmg = dexterity * attackIndex + Math.floor(dexterity / 2);
            const speed = dexterity - attackIndex * 2;
            return [dmg, speed, luck, "physical"];
        }

        if (_class === "Mage"){
            const dmg = intelligence * attackIndex + Math.floor(strength / 2);
            const speed = dexterity - attackIndex * 2;
            return [dmg, speed, luck, "magical"];
        }

        if (_class === "Monk"){
            const dmg = Math.floor(intelligence / 2 + strength / 2) * attackIndex;
            const speed = dexterity - (attackIndex);
            return [dmg, speed, luck, "physical"];
        }

        const dmg = (strength * attackIndex) + Math.floor(dexterity / 2);
        const speed = dexterity - attackIndex * 2;
        return [dmg, speed, luck, "physical"];
    }

    const defend = (user, atkData) => { //DATA: [dmg, speed, luck, type]
        let atkDmg = atkData[0];
        let atkSpeed = atkData[1];
        let atkLuck = atkData[2];
        let atkType = atkData[3];
        let critical = false;
        let dodged = false;

        let dexterity = user.dexterity;
        let luck = user.luck;
        let strength = user.strength;
        let intelligence = user.intelligence;


        if (user === "player") {
            dexterity = sessionStorage.getItem("dexterity");
            luck = sessionStorage.getItem("luck");
            strength = sessionStorage.getItem("strength");
            intelligence = sessionStorage.getItem("intelligence");
        }

        console.log("Defend user: ");
        console.log(user);

        const dexDeficit = atkSpeed - dexterity;
        if (dexDeficit) {
            if (dexDeficit < 30) {
                const dodgeIndex = Math.floor(Math.random() * 30);
                if (dodgeIndex <= dexDeficit) {
                    dodged = true;
                }
            } else {
                dodged = true
            }
        }

        if (dodged) {
            return {status: "dodged", user: user}
        }


        const luckDeficit = atkLuck - luck;
        if (luckDeficit) {
            if (luckDeficit < 20) {
                const criticalIndex = Math.floor(Math.random() * 20);
                if (criticalIndex <= luckDeficit) {
                    atkDmg *= 2;
                    critical = true;
                }
            } else {
                atkDmg *= 2;
                critical = true;
            }
        }

        const defendIndex = Math.floor(Math.random() * 4);


        if (atkType === "physical"){
            const defence = strength * defendIndex;
            const dmgDeficit = atkDmg - defence;

            if (dmgDeficit > 0) {
                return {status: "hit", dmg: dmgDeficit, critical: critical, user: user, type: "physical"};
            } else {
                return {status: "block", user: user};
            }
        } else {
            const defence = intelligence * defendIndex;
            const dmgDeficit = atkDmg - defence;

            if (dmgDeficit > 0) {
                return {status: "hit", dmg: dmgDeficit, critical: critical, user: user, type: "magical"};
            } else {
                return {status: "block", user: user};
            }
        }
    }

    const endTurn = (defData) => {

        if (enemyHp < 0) {
            endTheGame("player");
        }

        if (userHp < 0) {
            endTheGame(enemy);
        }

        console.log(defData);

        let name = defData.user.name;
        let enemyName =  sessionStorage.getItem("name");

        if (defData.user === "player") {
            name = sessionStorage.getItem("name");
            enemyName = enemy.name;
        }

        console.log("Enemy");
        console.log(defData.user);

        if (defData.status === "dodged"){
            log(">> " + name + " dodged the attack.");
            return
        }

        if (defData.status === "block"){
            log(">> " + name + " blocked the attack.");
            return
        }

        if (defData.status === "hit" && defData.user !== enemy){
            setUserHp(userHp - defData.dmg);

            log(">> " + enemyName + " attacked " + name + " with "
                + defData.type + " attack and caused " + defData.dmg + " damage.");

        } else {
            setEnemyHp(enemyHp - defData.dmg);

            log(">> " + enemyName + " attacked " + name + " with "
                + defData.type + " attack and caused " + defData.dmg + " damage.");
        }
    }

    const log = (message) => {
        let temp = logs;
        temp.push(...[message]);
        setLogs(temp);
    }

    const play = (action) => {
        console.log("Player attacking the enemy.");
        if (action === "attack") {
            const attResult = attack("player");
            console.log("Attack result:");
            console.log(attResult);
            const defResult = defend(enemy, attResult);
            console.log("Defend result:");
            console.log(defResult);
            endTurn(defResult);
            if (enemyHp <= 0) {
                endTheGame("player");
            }

            if (userHp <= 0) {
                endTheGame(enemy);
            }
        }

        enemyTurn();
    }

    const enemyTurn = () => {
        console.log("Enemy attacking the player.");
        const attResult = attack(enemy);
        console.log("Attack result:");
        console.log(attResult);
        const defResult = defend("player", attResult);
        console.log("Defend result:");
        console.log(defResult);
        endTurn(defResult);
        if (enemyHp <= 0) {
            endTheGame("player");
        }

        if (userHp <= 0) {
            endTheGame(enemy);
        }
    }

    const endTheGame = (winner) => {
        let name = sessionStorage.getItem("name");

        if (winner !== "player"){
            name = winner.name;
        }

        setWinner(name);
    }

    if (winner){
        return (
            <FightingWinWindow winner={winner} stopFight={stopFight}
                               playerwon={winner === sessionStorage.getItem("name") }/>
        )
    }

    return (
        <div className='fighting-chamber'>
            <div className='fighting-chamber-contents'>
                <div className='fighting-display-container'>
                    <FightingUser img={sessionStorage.getItem("pfp")}
                                  hp={userHp}
                                  name={sessionStorage.getItem("name")}/>
                    <FightingLogWindow logs={logs}/>
                    <FightingUser img={enemy.img}
                                  hp={enemyHp}
                                  name={enemy.name}/>
                </div>
                <div className='fighting-option-container'>
                    <div className='fighting-buttons'>
                        <button onClick={() => {play("attack")}} className="enabled-btn">Attack</button>
                        <button className="enabled-btn">Spells</button>
                        <button className="enabled-btn">Inventory</button>
                        <button className="enabled-btn" onClick={() => endTheGame(enemy)}>Surrender</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FightingChamber;