const sugal = [
    "talpak",
    "747",
    "GTA 5 Casino",
    "matulog"
];

const badwords = [
    "panget",
    "ayasib",
    "gayyyyiiiiiii",
    "pakyu",
    "may apat na panganay",
    "di nag tatanong",
    "hindi kumakain ng Tocino",
    "hindi naliligo"
]

const goodWords = [
    "pogi",
    "mabait",
    "may takot sa diyos",
    "hindi gumagawa ng kasalanan",
    "dapat tularan"
]

/**
 * Responsible for returning message when request `-batiin` is triggered.
 * 
 * @param {Object} msg - The msg object from Discord. 
 * @returns object consist of name and msg.
 */
const getPangBati = (msg) => {
    const { content } = msg;
    const task = content.split(" ");
    let randomNumber = 0;

    if(task[1].toLowerCase() == 'earl' || task[1].toLowerCase().includes == 'earl') {
        randomNumber = Math.floor(Math.random() * badwords.length);
        return {
            name: task[1],
            msg: badwords[randomNumber]
        };
    } else {
        randomNumber = Math.floor(Math.random() * goodWords.length);
        return {
            name: task[1],
            msg: goodWords[randomNumber]
        };
    }
}

/**
 * Responsible for telling what task is given.
 * 
 * @param {Object} msg - The msg object from Discord. 
 * @returns Interger or Undefined.
 */
const getTask = (msg) => {
    const { content } = msg;
    const task = content.split(" ");

    if(task.length > 2) {
        msg.channel.send("Mali ang iyong request. Paki ayos bobo ka.");
        return;
    }

    switch(task[0]) {
        case '-sugal':
            return 0;
        case '-batiin':
            return 1;
        default:
            return undefined;
    }
}

/**
 * Responsible for what to send for every request.
 * 
 * @param {Object} msg - The msg object from Discord. 
 */
const sendMsg = (msg) => {
    
    if(msg.content.startsWith('-')) {
        switch(getTask(msg)) {
            case 0: 
                const randomNumber = Math.floor(Math.random() * sugal.length);
                msg.channel.send(`Mukang dapat tayong ${sugal[randomNumber] != 'matulog' && `mag`} ${sugal[randomNumber]}`);
                break;
            case 1:
                const res = getPangBati(msg);
                msg.channel.send(`Si ${res.name} ay ${res.msg}`);
                break;
            default:
                break;
        }
    }
}

module.exports = {
    sendMsg
}