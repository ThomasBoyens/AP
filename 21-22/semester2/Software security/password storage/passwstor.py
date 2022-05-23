import nacl.pwhash.argon2id

ops=nacl.pwhash.argon2id.OPSLIMIT_SENSITIVE
mem=nacl.pwhash.argon2id.MEMLIMIT_SENSITIVE

#store password and the hash of the password
password = input("password: ").encode('utf-8')
hashedPassword = nacl.pwhash.argon2id.str(password)

# print hashed pasword  
print("hashed password:")
print(nacl.pwhash.argon2id.str(password, opslimit=ops, memlimit=mem))

check_password = input("password again: ").encode('utf-8')
IS_CORRECT = nacl.pwhash.verify(hashedPassword, check_password)

if(IS_CORRECT):
    print("password is correct")