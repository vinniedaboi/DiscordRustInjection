from socket import *

socket = socket(AF_INET,SOCK_STREAM)
socket.bind(("0.0.0.0",1337))
socket.listen()
while True:
    conn,addr = socket.accept() 
    data = conn.recv(1024)
    if not data:
        break
    data = data.decode("utf-8")
    with open('tokens.txt', 'a') as f:
        f.write(data)
        print("Token Stored")
