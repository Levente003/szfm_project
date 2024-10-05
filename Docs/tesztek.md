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