with open("./resources/files/HelloList.txt", "r", encoding="utf8") as textFile:
    lines = textFile.readlines()
    finalString = '';
    # clean each line
    for line in lines:
        newline = line.replace("\n",'"')
        newline = '"' + newline + ','
        finalString += str(newline)
    print(finalString)
    
    
    
    
    


