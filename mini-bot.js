const username = process.argv[2];
const sessionId = process.argv[3];

console.log(`Starting MINI BOT for user: ${username}, session ID: ${sessionId}`);

// Simulate bot running
setInterval(()=>{
    console.log(`Mini BOT active for ${username}...`);
},5000);
