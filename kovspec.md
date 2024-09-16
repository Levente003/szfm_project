# Követelmény specifikáció


## Jelenlegi helyzet

Jelenleg a cégnél sok az új dolgozó, akik szenvednek a sok kisebb feladat
figyelemben tartásával ami rájuk hárul. Ezért jelenleg mindenki kap egy papírt
amire ki vannak nyomtatva a különböző feladatok amik az adott dolgozóra hárulnak.

Sajnos a nemrégi növekedés óta nehézzé vált követni, hogy kinek melyik papír
jár és elvesztés esetén mindig újranyomtatni ezeket.

## Vágyálom rendszer

Szeretnénk egy felületet ahol a dolgozók követhetik a cégbeli feladataikat és
esetleg a saját szokásaikat is. Egy játékszerűsített szokáskövetőre gondoltunk,
ami jutalmazza a betartást (streak-kel, achivement-tel esetleg jelvénnyel), hogy
idővel rendes szokássá tudjon válni.

Szeretnénk, ha...
- a felületre be lehetne lépni és csak a belépett személy feladatai
lennének láthatóak.
- lenne dashboard, ahol
  - adhat hozzá feladatott
  - törölhet
  - módosíthat
  - megjelölheti készként a feladatokat
- lennének témái a felületnek a beállításokban.
- lenne naptárnézetben, ahol láthatja a felhasználó feladatait

## Jelenlegi üzleti folyamatok
- Feladatok nyilvántartása:
    - Feladatok kiosztása => minden dolgozó papíron kapja meg a teendőit
    - Feladatok befejezése => az adott sor áthúzása
    - Befejezett feladatok naplózása => egy közös füzetbe történik
    - Feladat módosítása => a tiktároknak meg kell keresni a dolgozót

## Igényelt üzleti folyamatok
- Online megjelenítés
- Külön dolgozói és adminisztrátori belépés
- Feladatok kilistázása => belépés után a feladatok menüpontra kattintva
- Feladatok hozzáadása: adminisztrátorként => új feladat menüponttal
- Feladatok törlése: adminisztrátorként => listázás után
- Feladatok módosítása: adminisztrátorként => listázás után
- Feladatok megjelölése készként: dolgozóként => listázás után
- Felület témájának módosítása => beállításokban lenyíló menü
- Statisztika megjelenítése az elvégzett feladatokról => statisztika menüpont
- Naptár nézet: adott napra vagy hétre vonatkozó feladatok listázása
- Feladatok szűrése: dolgozó nevének megadása vagy időpont alapján
- Értesítés, ha új feladatot írtak ki => a weboldalon egy felugró üzenet
- Legaktívabb dolgozók megjutalmazása => a profilon jelvénnyel
- Dolgozók listázása => adminisztrátorként a dolgozók menüponttal

## A rendszerre vonatkozó szabályok


## Követelménylista
### Szereplők:
-SZ01: Felhasználó (dolgozók)
-SZ02: Admin (menedzser)
### K01: Webalkalmazás
### K02: Elérhetőség
### K03: Egyidejű használhatóság és feldolgozás
### K04: Felhasználóbarát megjelenítés
### K05: Felhasználó hitelesítése
### K06: Normál válaszidő
### K07: Egyszerű rendszerüzemeltetés
### K08: Naptárfelület
### K09: Rendszertémák (pl. sötét és világos)

## Fogalomszótár
Dolgozó: A rendszer fő felhasználói, a cég alkalmazottai
Válaszidő: A felhasználó által adott bemenetre rendszertől kapott válasz érkezési ideje
Dashboard: Egy táblázat a horizontális tengelyén a feladatok állapotaival (pl. hozzárendelt, folyamatban, kész), vertikális tengelyén a hozzárendelt feladatokkal
