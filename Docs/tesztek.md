# Elvégzett tesztek:

## API

| Teszt                                   | Várt eredmény                     | Kapott eredmény                   | Sikeres |
|-----------------------------------------|-----------------------------------|-----------------------------------|---------|
| Bejelentkezés létező felhasználóval     | Sikeres, token visszaadva         | token                             | igen    |
| Bejelentkezés nem létező felhasználóval | Sikertelen, hibaüzenet visszaadva | hibaüzenet                        | igen    |
| Kijelentkezés létező tokennel           | Kijelentkezteti a tokent          | Kijelentkezteti a tokent          | igen    |
| Kijelentkezés nem létező tokennel       | semmi                             | semmi                             | igen    |
| Task létrehozása token nélkül           | Nincs jogosultság                 | Nincs jogosultság                 | igen    |
| Task létrehozása admin jog nélkül       | Nincs jogosultság                 | Nincs jogosultság                 | igen    |
| Task létrehozása null useridvel         | Új task                           | Új task létrehozva                | igen    |
| Létező task törlése                     | A task törlődik                   | A task törlődik                   | igen    |
| Nem létező task törlése                 | Semmi                             | hibaüzenet, hogy nincs ilyen task | igen    |
| Taskok kilistázása adminként            | A taskok egy arrayban             | A taskok egy arrayban             | igen    |
| Összes task listázása admin nélkül      | Hibaüzenet, hogy nincs elég jog   | Hibaüzenet, hogy nincs jog        | igen    |

## DAL


| Teszt                                          | Várt eredmény                       | Kapott eredmény                  | Sikeres |
|------------------------------------------------|-------------------------------------|----------------------------------|---------|
| getUserById visszaadja a felhasználót         | Felhasználói objektum              | Felhasználói objektum            | Igen    |
| getUserById(1)                             | Visszaadja az 1 azonosítójú felhasználót |Felhasználó objektum                        | Igen    |
| getUserById(9999)                                     | null                                                | null                                       | Igen   |
| getUserByEmail visszaadja a felhasználót      | Felhasználói objektum              | Felhasználói objektum            | Igen    |
| createUser létrehozza a felhasználót          | Felhasználói objektum létrehozva   | Felhasználói objektum létrehozva | Igen    |
| updateUser frissíti a meglévő felhasználót    | Felhasználói objektum frissítve    | Felhasználói objektum frissítve  | Igen    |
| deleteUser törli a meglévő felhasználót       | Felhasználói objektum törölve       | Felhasználói objektum törölve     | Igen    |
| deleteUser(1)                                           | true                                                | true                                       | Igen   |
| deleteUser(9999)                                       | false                                               | false                                      | Igen   |
| createTask létrehozza az új feladatot         | Feladat létrehozva                  | Feladat létrehozva               | Igen    |
| updateTask frissíti a meglévő feladatot       | Feladat frissítve                   | Feladat frissítve                | Igen    |
| deleteTask törli a meglévő feladatot          | Feladat törölve                     | Feladat törölve                  | Igen    |
| getAllTasks visszaadja az összes feladatot    | Feladatok tömbje                   | Feladatok tömbje                 | Igen    |