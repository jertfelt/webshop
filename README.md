
Vår trello:
https://trello.com/b/XVyVhXlq/kanban-grupp-tre

Vår figma: 
https://www.figma.com/file/bIcYUoAzHiwllVAUTerVmw/Ekoline?node-id=0%3A1


<img src="styles\sass\img\android-chrome-512x512.png">


INSTRUKTIONER:
Webshop
Bakgrund
En webshop är en vanligt förekommande typ av webbprojekt, som kräver ett samspel mellan HTML, CSS och JavaScript för att ge användaren en tillfredställande upplevelse. Flera vanliga tekniker som återkommer i andra projekttyper krävs, samt förmåga att organisera såväl kod som arbete. 

Shopens namn och innehåll
Ni får själva välja vilken typ av butik det är, och vad som skall finnas till salu. 
Det blir enklare för er om ni väljer t.ex. produktnamn och bilder som är begripliga för er, men produktbeskrivningar och dylikt kan ni använda lorem ipsum-text till om ni vill. 

Formgivning och UX
Det kommer att finnas några krav som påverkar UX och design något, men i övrigt är ni helt fria att formge på vilket sätt ni vill. 
Leverabler (vad som skall lämnas in)
1. En prototyp eller skiss
Denna kan vara gjord för hand på papper, digitalt i ett wireframe tool såsom Balsamiq eller egentligen vilken form som helst som ni tycker är praktisk. 
Ni behöver ha nån typ av skiss eller mockup per vy ni har identifierat att ni behöver. 

2. En kanban board eller annan typ av task lists
Ni behöver organisera ert arbete utefter tasks, t.ex. en Trello Board (men andra former som Miro eller post-it-lappar på en whiteboard är också ok). Lämna in en länk eller annan dokumentation av hur ni arbetat med era tasks. 

3. Länk till Git-repo
Projektet skall finnas sparat på ett Git repository såsom GitHub. Lämna in länken till mig. 
Betyg
Betyg kommer sättas baserat på vilka krav som är uppfyllda. De krav som inte är märkta krävs för G, och de krav som är märkta med ett VG krävs för att få VG i kursen. 

Krav
Webshopen kommer ha ett antal funktionella krav (saker som skall gå att “göra”) samt några icke-funktionella (hur projektet skall byggas). Det kommer också finnas innehållskrav. 
Innehållskrav
Det skall finnas minst 3 produktkategorier
Varje kategori skall innehålla minst 3 produkter
Produkterna skall vara lagrade som JSON (VG)
Även kategorierna skall vara lagrade som JSON (VG)
Funktionella krav
Följande sidor skall finnas:
Startsida
Skall innehålla en välkomsttext, samt en lista på kategorierna.
Produktlista
    En lista på produkterna inom en viss kategori.
Produktsida
En detaljvy av produkten.
Varukorg
En lista över de produkter användaren valt att köpa, KAN ligga som dropdown i en meny, eller finnas som både separat sida och som dropdown i meny
Beställningssida
En formulärsida där besökaren kan göra en “beställning” och se ett kvitto på beställningen.
Skapa användare (VG)
En formulärsida där besökaren kan skapa en användare, med vissa preferenser.
Logga in (VG)
En formulärsida där besökaren kan logga in.
Alla sidor skall ha:
Meny som visar kategorierna och länkar till produktlistan. 
Länken skall innehålla en querystring som avgör vilka produkter som skall visas. (VG)
Visa och dölja varukorgen i menyn, och/eller länk till separat sida
Länk till användarregistrering om användaren inte redan är inloggad (VG)
Kunna se om man är inloggad och som vem i menyn, annars länk till inloggning (VG)


Startsidan
Denna sida skall lista alla produktkategorier. 
Varje kategori skall ha:
Namn
Kort beskrivning
Bild
Länk till produktlistan för denna kategori.
Länken skall innehålla en querystring som avgör vilka produkter som skall visas. (VG)
Produktlistan
Den sida skall lista alla produkter i en kategori.
Varje produkt skall ha:
Namn
Pris
Bild
Knapp för att lägga till produkten i varukorgen
Länk till produktsida för just den produkten
Länken skall innehålla en querystring som avgör vilken produkt som skall visas. (VG)
Textfält där användaren kan “söka” efter en produkt, alltså ett filter där innehållet i sökfältet skall matchas mot produktens namn och beskrivning (VG)
Produktsida
Denna sida skall visa en enskild produkt
Varje produkt skall ha:
Namn
Kort beskrivning
Pris
Bild
Knapp för att lägga till produkten i varukorgen
Varukorg
Detta kan vara en enskild sida, eller en “dropdown” som går att komma åt från menyn på varje sida, eller både och. I varukorgen skall en användare kunna:
Se alla produkter som lagts i varukorgen, namn och pris
Ändra antal av varje beställd produkt
Ta bort produkt ur varukorgen
Se total kostnad för alla produkter i varukorgen
Gå vidare till beställningssidan

Beställningssida
På denna sida skall det finnas en sammanfattning av produkterna i varukorgen.
De skall också finnas ett beställningsformulär. Formuläret skall innehålla dessa fält:
Namn *
Gatuadress *
Postnummer *
Ort *
E-post *
Telefonnummer
Övriga kommentarer
När användaren skickar formuläret skall det och varukorgsammanfattningen döljas, och istället skall ett kvitto visas. Kvittot skall visa all information från forumuläret, samt en sammanfattning av produkterna i varukorgen.  
Om användaren är inloggad skall formulärets fält vara förifyllda (VG)
Alla fält med en stjärna ovan skall vara required. Om de inte är ifyllda skall ett felmeddelande visas för användaren (VG)
Skapa användare (VG)
Allt ang denna sida är VG-nivå.
Denna sida skall ha ett formulär där en besökare kan registrera en användare. Spara i Local Storage.
Den skall innehålla ett formulär med följande fält:
Namn *
Gatuadress *
Postnummer *
Ort *
E-post *
Lösenord *
Telefonnummer
Alla fält med en stjärna ovan skall vara required. Om de inte är ifyllda skall ett felmeddelande visas för användaren.
Logga in (VG)
Allt ang denna sida är VG-nivå. Det kan vara en fristående sida, eller en dropdown som man kan nå från toppmenyn.
Denna sida skall ha ett formulär med e-post och lösenord, om dessa matchar den sparade användaren, så skall besökaren räknas som “inloggad” som denna användare (tips, även här, Local Storage). 
Icke-funktionella krav
All sparad användardata skall ligga i local storage (t.ex. varukorg)
HTML-koden skall vara semantisk (tänk på vilka HTML-element ni använder)
Koden skall vara uppdelad på ett metodiskt vis som ni diskuterat med varandra
Produkterna skall vara lagrade som JSON (VG)
Även kategorierna skall vara lagrade som JSON (VG)
Responsiv CSS (VG)



