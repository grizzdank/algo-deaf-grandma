# Imitates a grandma who is hard of hearing
# Author: Dave Graham
# Date: 03012024

def deaf_grandma():
    bye = 0
    print('HEY KID!')
    while bye < 2:
        kid = input('>')
        if kid == 'GOODBYE!':
            bye += 1
            if bye == 1:
                print('LEAVING SO SOON?')
                continue
            elif bye == 2:
                print('LATER, SKATER!')
                exit()
        if str.isupper(kid):
            print('NO, NOT SINCE 1946!')
        elif not kid: 
            print('WHAT?!')
        else:
            print('SPEAK UP, KID!')

deaf_grandma()
