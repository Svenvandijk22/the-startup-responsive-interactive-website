# De redesign van Labelvier casus pagina
we moesten voor label vier hun casus paginas html structuur opnieuw indelen met alleen html 5 elementen.

## Live demo
🔗 https://svenvandijk22.github.io/the-startup-responsive-interactive-website/


## Beschrijving

Ik heb een paar visuele aanpassingen gedaan de huidige casus pagina van labelvier ik heb als eerste witruimte tussen de projecten gezet in combinatie met een scroll animatie legt de gebruiker meer focus op de verschillende projecten 

https://github.com/user-attachments/assets/f19fb8d5-acd9-4a11-bf88-16bdc92c6763

Ook heb ik tekst in buttons aangepast die niet voldeden aan de colorcontrast richtlijnen die heb ik veranderd naar een zwarte tekst inplaats van een witte tekst in de button.

## Kenmerken

**Html**

Ik heb voor labelvier ook een nieuwe html structuur gemaakt. Eerst begonnen met een vrij logishe structuur een body, header, nav, main (waar sections inzitten) en een footer ik heb in mijn html structuur met zo min mogelijk containers gebruik gemaakt. In de main zelf zitten alle sections die met een grid gestyled zijn de sections zelf zijn zo ingedeeld dat de a link om de h2 en ptjes zijn gewrapt eerst was het ook om de img heen en wat er voorzorgte dat druk veld heel groot was nu staat het alleen om de h2 en p gewarpt wat er voor zorgt dat je druk veld groot is maar niet te groot.

**Css**

**Sections**: heb ik ingedeeld in ene grid gebruik gemaakt van 2 row en 2 columns en kon ik met padding er in de kleine aanpassingen waar een element staat.<br>
**Interactie scroll animatie**: Ik heb in een issue een uitleg gemaakt hoe het proces ging wat voor code ik heb toegepast: https://github.com/Svenvandijk22/the-startup-responsive-interactive-website/issues/7 <br>
**a link animatie**: heb ik met before en after gedaan ook weer een link hoe ik het heb uitgewerkt https://github.com/Svenvandijk22/the-startup-responsive-interactive-website/issues/6

## Responsive

ik heb voor mijn responsive layout 1 breakpoint dat komt omdat de tablet variant en mobiele vaiarnt erg op elkaar lijken de breakpoint die ik heb bepaald is min width 1082 px daarvoor zit alles nog in ene grid

**Mobiele variant**<br>
<img width="443" height="797" alt="Schermopname (169)" src="https://github.com/user-attachments/assets/1df13a67-2e93-494c-8f04-ab5d59a14253" /><br>
**tablet versie(had ik achteraf meer naar het midden kunnen alignen)**<br>
<img width="475" height="627" alt="Schermopname (170)" src="https://github.com/user-attachments/assets/9afbf525-31bf-4f4f-b37c-fd93b60ca78e" /><br>
**desktopversie met grid layout**<br>
<img width="1891" height="912" alt="Schermopname (172)" src="https://github.com/user-attachments/assets/3cfb36f9-bab0-484e-b9ba-508955e05ac3" /><br>
**versie op grotere schermen**<br>
<img width="1370" height="800" alt="Schermopname (171)" src="https://github.com/user-attachments/assets/228cdee2-e002-4c74-84fa-4ee4e9f03059" />

## Toegankelijkheid

Voor de toegankelijkheid heb ik meerdere verbeteringen doorgevoerd. Een van de eerste aanpassingen was het hamburgermenu. Dit menu was oorspronkelijk opgebouwd uit meerdere `div`-elementen gebouwd (3 streepjes), wat voor screenreaders geen duidelijke betekenis heeft met een duidelijke arial label wat duidelijk aangeeft wat het is.

Ik heb dit vervangen door een SVG-gebaseerd hamburgermenu, waardoor:
- het menu semantischer is opgebouwd
- de structuur duidelijker is voor schermlezers

## Huisstijl

De huisstijl van dit project was bewust vrij beperkt opgesteld.  
Er waren duidelijke keuzes gemaakt voor kleuren, fonts en font-weights, wat het consistent toepassen binnen de website overzichtelijker maakte. Wel moesten alle visuele elementen en assets zelf verzamelelen van hun huidige website en toegepassen op ons eigen project.

#### Typografie
Voor de typografie is gekozen voor één primair font met een fallback:

- **Primair font:** Hind Guntur  
- **Fallback font:** Arial  

De font-weights zijn beperkt gehouden de om rust te bewaren:
- **200** voor lopende tekst en koppen (`h1`, `h2`)
- **700** voor benadrukte tekst, zoals links (`a`) en `strong` binnen koppen

Deze beperkte fontweight set zorgt voor een duidelijke hiërarchie op de site wat ik zelf ook fijn vondt wat het ontwerp niet onnodig complex maakt.

#### Kleurgebruik
De huisstijl bestaat uit vijf vaste kleuren:

- **#281CE2** – Accentkleur, gebruikt voor knoppen in de header  
- **#E2655E** – Algemene accentkleur voor de footer en knoppen op de pagina  
- **#000000** – Tekstkleur en hoverkleur voor links  
- **#FFFFFF** – Achtergrondkleur voor content  
- **#EEF9FD** – Hoverkleur voor knoppen  




## Wat ik geleerd heb
- Het belang van werken met containers in plaats van grote padding-left waarden
- Waarom flexibele unit zoals  `minmax()` beter schalen dan vaste pixels
- Hoe CSS Grid helpt bij het maken van overzichtelijke en onderhoudbare layouts



## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


