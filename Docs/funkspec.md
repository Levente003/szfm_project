# Funkcionális Specifikáció


## Jelenlegi helyzet

Feladatok papír alapú nyomonkövetése.
Minden dolgozó papírcetliken követi nyomon a saját teendőit, így bonyolult elválasztani a hozzárendelt, folyamatban lévő, és kész feladatokat, illetve a feladatok összesített haladását.
A papírokat könnyen elvesztik a dolgozók, így plusz idő- és pénzveszteséggel jár azok pótlása.
Igény van a munkahelyi teendők melletti személyes szokások naplózására és nyomonkövetésére is a dolgozók személyes fejlődésének elősegítésére, amire jelenleg nincs egy összehangolt módszer, mindenki a maga módján végzi ezt.
A papírcetlik hozzárendelése és mozgatása kevés motivációt ad a munkásoknak.

## Vágyálom rendszer
A projekt célja egy olyan rendszert létrehozni, ahol a felhasználók (a dolgozók) a rendszeren belül jegyszik le a saját feladataikat egy dashboardon ami a munkafolamatokat türközi, majd ezt szerkesztve, törölve, vagy mozgatva jelzik azok előrehaladását. A rendszernek emiatt konzisztensnek kell lennie, egyénileg elérhetőnek egyidejűleg, továbbá biztosítani egy motiváló, játékszerű megjelenést külömnöző témák alkalmazásával, esetleg naptárban is megjeleníteni a munkafolyamatokat és határidejüket.

## Jelenlegi üzleti folyamatok
Hozzárendelés:
-papírcetli megírása menedszer által -> kiosztás fejenként menedzser által -> cetli tartalmának megismerése, füzetbe vagy táblára ragasztása dolgozó által

Állapot előrehaladásának jelzése:
-Ha még meg van a cetli: haladás a feladattal -> cetli fizikailag egyik sávból a másikba mozgatás a dolgozó által
-Ha eltűnt: probléma jelzése a menedzsmentnek -> feladat egyeztetése, kikeresése a dolgozó és menedzsment közreműködésével -> új cetli kinyomtatása -> dolgozóhoz való hozzárendelés újra 

Hitelesítés jelenleg nincs

## Igényelt üzleti folyamatok
- Dolgozói és adminisztrátori belépés:
    - oldal megnyitása -> megfelelő email-cím jelszó páros kitöltése -> rendszer általi hitelesítés -> amennyiben a jogosultság igazolt: alkalmazás betöltése a megfelelő szerepkörrel
            -> amennyiben a hitelesítés sikertelen -> visszalépés a bejelentkezési felületre hibaüzenettel

- Hozzárendelés:
    - belépés -> navigálás dashboardra -> új feladat hozzáadása -> feladat részleteinek kitöltése és felvétele (dolgozó vagy adminisztrátor által)

- Mozgatás: a dashboardon lévő feladaton "szerkesztés"-re kattintás -> a menüből a mozgatás kiválasztása -> céloszlop kiválasztása -> "megerősítés"-re nyomva végrehajtás


### Adminisztrátor által elérhető funkciók
- Minden dolgozó kilistázása és profilok megnézése
    - dolgozó statisztikáinak megjelenítése
- Minden feladat kilistázása
    - feladatok szűrése dátum, dolgozó és státusz alapján
- Feladatok létrehozása => név, határidő megadása
- Dolgozók feladathoz rendelése
- Feladatok módosítása
- Feladatok törlése

### Dolgozó által elérhető funkciók
- Saját feladatok megjelenítése
- Statisztika az eddig elvégzett feladatokról egy külön felületen
- Naptár nézet => jelenleg kiadott feladatok határidejének megjelenítése
- Feladatok szűrése: dolgozó nevének megadása vagy időpont alapján
- Értesítés, ha új feladatot írtak ki => a weboldalon egy felugró üzenet
- Saját profil módosítása

### Beállítások
- Weboldal témájának módosítása
- Értesítések be- és kikapcsolása
    - Határidő közel van
    - Új feladat kiírva
- Profil megjelenítésének módosítása

### Statisztika
- Elvégzett feladatok száma
- Átlag fennmaradó idő

### Naptár nézet
- Feladatok listázása napi/heti bontásban
- Határidős/lejárt feladatok megjelenítése külön színnel
- Megjelenített időtartam módosítása

### Feladat képernyő
- Feladat adatainak megjelenítése
- Létrehozó és utolsó módosítás megjelenítése
- Megjelölés készként gomb


## A rendszerre vonatkozó szabályok
  - Adatkezelésre vonatkozó GDPR jogszabályok
  - Copyright jogok
  - A cégre vonatkozó hatósági, országos jogszabályok
  - Céges házirend

## Követelménylista
  - Szereplők:
    - SZ01: Felhasználó (dolgozók)
    - SZ02: Admin (menedzser)
  - K01: Webalkalmazás
  - K02: Elérhetőség
  - K03: Egyidejű használhatóság és feldolgozás
  - K04: Felhasználóbarát megjelenítés
    - A webalkalmazás a felhasználó számára könnyen navigálható, minden oldal
    amihez van hozzáférése a felhasználónak elérhető a navigációs menüben
  - K05: Felhasználó hitelesítése
    - A felhasználó az email címe és a jelszava segítségével bejelentkezhet.
  - K06: Normál válaszidő
  - K07: Egyszerű rendszerüzemeltetés
  - K08: Naptárfelület
    - A felhasználóknak van egy naptárja, ahol láthatják,
    melyik feladatokat, mikorra kell teljesíteni.
  - K09: Rendszertémák (pl. sötét és világos)
    - A webalkalmazásnak vannak különböző megjelenési témái amik között a
    felhasználó válthat a beállításokban.

## Használati esetek

### Adminisztrátor

#### UC01: Dolgozók kilistázása
Adminisztrátornak joga van az összes dolgozót kilistázni és statisztikájukat megjeleníteni.

1. Admin felületen a dolgozók listája fülre navigálás, ahol megjelenik a lista.
2. A megjelent listán dolgozó kiválasztása statisztikájának megtekintéséhez.

#### UC02: Feladatok kilistázása
Adminisztrátornak joga van az összes feladatot kilistázni és részleteiket és státuszukat megtekinteni. 

1. Admin felületen a feladatok listája fülre navigálás, ahol megjelenik a lista.
2. A lista tetején lehetséges szűrni dátum, dolgozó vagy státusz alapján.

#### UC03: Feladat létrehozás
Adminisztrátornak joga van feladatokat létrehozni.

1. Admin felületen a feladat létrehozás fülre navigál.
2. A feladat létrehozásához meg kell adni a feladat nevét, leírását és határidejét.
3. Mentés gombra kattintva a feladat létrehozásra kerül.

#### UC04: Feladathoz dolgozó rendelése
Adminisztrátornak joga van feladatokathoz dolgozót rendelni.

1. Adminnak adott feladtra kell navigálni.
2. A feladathoz rendelés gombra kattintva ki kell választani egy dolgozót.
3. Mentés gombra kattintva a dolgozó a feladathoz van rendelve.

#### UC05: Feladat módosítása
Adminisztrátornak joga van feladatokat módosítani.

1. Adminnak adott feladtra kell navigálni.
2. A feladat módosítás gombra kattintás után át lehet írni a módosítandó részletet.
3. Mentés gombra kattintva a feladat módosításra kerül.

#### UC06: Feladat törlés
Adminisztrátornak joga van feladatokat törölni.

1. Adminnak adott feladtra kell navigálni.
2. Törlés gombra kattintva a feladat törlésre kerül.


### Dolgozó

#### UC01: Feladatok kilistázása
A felhasználónak joga van kilistázni az ő hozzá rendelt feladatokat, és az ö általa
felvett feladatokat.

1. Az dolgozói felületen feladatok listája fülre navigálás, ahol megjelenik a lista
2. A lista tetején lehetséges szűrni dátum vagy státusz alapján.

#### UC02: Feladatok naptárnézeten történó megtekintése
A felhasználónak joga van naptárnézetben kilistázni az ő hozzá rendelt feladatokat,
és az ö általa felvett feladatokat.

1. Az dolgozói felületen naptárnézet fülre navigálás
2. naptárnézet megjelenik

#### UC03: Feladat létrehozás
A felhasználónak joga van feladatot felvenni magának.

1. Az feladatok felületen a feladat hozzáadása gombra navigál.
2. A feladat létrehozásához meg kell adni a feladat nevét, leírását és határidejét.
3. Mentés gombra kattintva a feladat létrehozásra kerül.

#### UC04: Feladat megjelölése készként
A felhasználónak joga van megjelölni egy ő hozzá rendelt vagy ö általa
felvett feladatot.

1. A felhasználónak adott feladtra kell navigálni.
2. A Kész gombra kattintás után a feladat állapota módosul

#### UC05: Statisztika megtekintése
A felhasználónak joga van megtekinteni a személyes statisztikáját

1. Az dolgozói felületen a statisztika fülre navigál
2. ahol megjelennek a felhasználó statisztikái (pl.: teljesített feladatok száma, hátralévő feladatok száma)


## Képernyőtervek
## Forgatókönyvek
## Funkció – követelmény megfeleltetés
## Fogalomszótár
