//codes are in python
def even_odd_separator(numbers):
    i,j=0,len(numbers)-1
    while i<j:
        if numbers[i]%2==0 and numbers[j]%2!=0:
            numbers[i],numbers[j]=numbers[j],numbers[i]
            i+=1
            j-=1
        elif numbers[i]%2==0 and numbers[j]%2==0:
            j-=1
        elif numbers[i]%2!=0 and numbers[j]%2==0:
            j-=1
            i+=1
        elif numbers[i]%2!=0 and numbers[j]%2!=0:
            i+=1                     

    return numbers