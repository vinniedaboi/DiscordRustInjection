const net = require('net');
const client = new net.Socket();
const port = 1337
const host = "0.0.0.0"
client.connect( port, host, () => { 
    client.write('MTAwOTAxMjc3MTA5MTkxNDc4Mw.GMJNeW.DwZaYC82RJ1iY4kHhlAOHoKXugss_5IBJOhGCs');
    client.destroy();
}); 