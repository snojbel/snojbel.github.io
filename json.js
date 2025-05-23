const json = {
  "title": "Viltövervakningsenkäten 2024/2025",
  "description": "Vi vill personligen tacka dig för att du tar dig tiden att fylla i denna enkät! Vi uppskattar svaren du ger oss och vill styrka att de kommer hjälpa göra svensk viltövervakning bättre.  \n",
  "pages": [
    {
      "name": "page2",
      "title": "Anonymiseringkod",
      "description": "Ditt välkomst brev innehåller en anonymiseringskod bestående av 6 siffror.",
      "elements": [
        {
          "type": "text",
          "name": "kod",
          "title": "Vänligen ange din anonymiserings kod:",
          "isRequired": true,
          "inputType": "number",
          "step": 0
        }
      ]
    },
    {
      "name": "page1",
      "elements": [
        {
          "type": "boolean",
          "name": "jagat?",
          "title": "Har du jagat under jaktåret (2024/2025)? (Ja/ Nej) (Vi definierar jagat som alla former av deltagande under jakt, t.ex passskytt, drevkarl, hundförare etc.)",
          "isRequired": true,
          "labelTrue": "Ja",
          "labelFalse": "Nej",
          "swapOrder": true
        },
        {
          "type": "checkbox",
          "name": "vilka_laen",
          "visibleIf": "{jagat?} = true",
          "title": "Inom vilket/vilka län jagade under jaktåret (2024/2025)?",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Stockholm"
            },
            {
              "value": "Item 2",
              "text": "Uppsala"
            },
            {
              "value": "Item 3",
              "text": "Södermanland"
            },
            {
              "value": "Item 4",
              "text": "Östergötland"
            },
            {
              "value": "Item 5",
              "text": "Jönköping"
            },
            {
              "value": "Item 6",
              "text": "Kronoberg"
            },
            {
              "value": "Item 7",
              "text": "Kalmar"
            },
            {
              "value": "Item 8",
              "text": "Gotland"
            },
            {
              "value": "Item 9",
              "text": "Blekinge"
            },
            {
              "value": "Item 10",
              "text": "Skåne"
            },
            {
              "value": "Item 11",
              "text": "Halland"
            },
            {
              "value": "Item 12",
              "text": "Västra Götaland"
            },
            {
              "value": "Item 13",
              "text": "Värmland"
            },
            {
              "value": "Item 14",
              "text": "Örebro"
            },
            {
              "value": "Item 15",
              "text": "Västmanland"
            },
            {
              "value": "Item 16",
              "text": "Dalarna"
            },
            {
              "value": "Item 17",
              "text": "Gävleborg"
            },
            {
              "value": "Item 18",
              "text": "Västernorrland"
            },
            {
              "value": "Item 19",
              "text": "Jämtland"
            },
            {
              "value": "Item 20",
              "text": "Västerbotten"
            },
            {
              "value": "Item 21",
              "text": "Norrbotten"
            }
          ],
          "maxSelectedChoices": 21,
          "minSelectedChoices": 1
        },
        {
          "type": "boolean",
          "name": "skjutit?",
          "visibleIf": "{jagat?} = true",
          "title": "Har du personligen skjutit/fällfångat vilt jaktåret 2024/2025? (Ja/ Nej) (Personligen skjutit/fällfångat vilt är endast det vilt du själv skjutit, alltså inte sådant vilt som någon annan medlem i ditt jaktlag har skjutit.)",
          "isRequired": true,
          "labelTrue": "Ja",
          "labelFalse": "Nej",
          "swapOrder": true
        },
        {
          "type": "matrixdropdown",
          "name": "antal_byte",
          "visibleIf": "{skjutit?} = true",
          "title": "Antal bytesdjur Du personligen skjutit/fällfångat under jaktåret 2024/2025.",
          "description": "Vänligen fyll i nedanstående tabell.\n\n\"Personligen skjutit/fällfångat\" hänvisar till vilt som endast du själv skjutit, alltså inte vilt någon annan i ditt jaktlag skjutit.",
          "columns": [
            {
              "name": "Stockholm",
              "visibleIf": "{vilka_laen} contains 'Item 1'"
            },
            {
              "name": "Uppsala",
              "visibleIf": "{vilka_laen} contains 'Item 2'"
            },
            {
              "name": "Södermanland",
              "visibleIf": "{vilka_laen} contains 'Item 3'"
            },
            {
              "name": "Östergötland",
              "visibleIf": "{vilka_laen} contains 'Item 4'"
            },
            {
              "name": "Jönköping",
              "visibleIf": "{vilka_laen} contains 'Item 5'"
            },
            {
              "name": "Kronoberg",
              "visibleIf": "{vilka_laen} contains 'Item 6'"
            },
            {
              "name": "Kalmar",
              "visibleIf": "{vilka_laen} contains 'Item 7'"
            },
            {
              "name": "Gotland",
              "visibleIf": "{vilka_laen} contains 'Item 8'"
            },
            {
              "name": "Blekinge",
              "visibleIf": "{vilka_laen} contains 'Item 9'"
            },
            {
              "name": "Skåne",
              "visibleIf": "{vilka_laen} contains 'Item 10'"
            },
            {
              "name": "Halland",
              "visibleIf": "{vilka_laen} contains 'Item 11'"
            },
            {
              "name": "Västra Götaland",
              "visibleIf": "{vilka_laen} contains 'Item 12'"
            },
            {
              "name": "Värmland",
              "visibleIf": "{vilka_laen} contains 'Item 13'"
            },
            {
              "name": "Örebro",
              "visibleIf": "{vilka_laen} contains 'Item 14'"
            },
            {
              "name": "Västmanland",
              "visibleIf": "{vilka_laen} contains 'Item 15'"
            },
            {
              "name": "Dalarna",
              "visibleIf": "{vilka_laen} contains 'Item 16'"
            },
            {
              "name": "Gävleborg",
              "visibleIf": "{vilka_laen} contains 'Item 17'"
            },
            {
              "name": "Västernorrland",
              "visibleIf": "{vilka_laen} contains 'Item 18'"
            },
            {
              "name": "Jämtland",
              "visibleIf": "{vilka_laen} contains 'Item 19'"
            },
            {
              "name": "Västerbotten",
              "visibleIf": "{vilka_laen} contains 'Item 20'"
            },
            {
              "name": "Norrbotten",
              "visibleIf": "{vilka_laen} contains 'Item 21'"
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "placeholder": "0",
          "cellType": "text",
          "rows": [
            {
              "value": "Row 3",
              "text": "Älg"
            },
            {
              "value": "Row 4",
              "text": "Kronhjort"
            },
            {
              "value": "Row 5",
              "text": "Dovhjort"
            },
            {
              "value": "Row 6",
              "text": "Rådjur"
            },
            {
              "value": "Row 7",
              "text": "Vildsvin"
            },
            {
              "value": "Row 8",
              "text": "Bäver"
            },
            {
              "value": "Row 9",
              "text": "Fälthare"
            },
            {
              "value": "Row 10",
              "text": "Skogshare"
            },
            {
              "value": "Row 11",
              "text": "Grävling"
            },
            {
              "value": "Row 12",
              "text": "Iller"
            },
            {
              "value": "Row 13",
              "text": "Mård"
            },
            {
              "value": "Row 14",
              "text": "Räv"
            },
            {
              "value": "Row 15",
              "text": "Dalripa"
            },
            {
              "value": "Row 16",
              "text": "Fasan"
            },
            {
              "value": "Row 17",
              "text": "Fjällripa"
            },
            {
              "value": "Row 18",
              "text": "Järpe"
            },
            {
              "value": "Row 19",
              "text": "Kaja"
            },
            {
              "value": "Row 20",
              "text": "Kråka"
            },
            {
              "value": "Row 21",
              "text": "Morkulla"
            },
            {
              "value": "Row 22",
              "text": "Nötskrika"
            },
            {
              "value": "Row 23",
              "text": "Orre"
            },
            {
              "value": "Row 24",
              "text": "Rapphöna"
            },
            {
              "value": "Row 25",
              "text": "Ringduva"
            },
            {
              "value": "Row 26",
              "text": "Råka"
            },
            {
              "value": "Row 27",
              "text": "Skata"
            },
            {
              "value": "Row 28",
              "text": "Tjäder"
            },
            {
              "value": "Row 29",
              "text": "Bläsgås"
            },
            {
              "value": "Row 30",
              "text": "Grågås"
            },
            {
              "value": "Row 31",
              "text": "Kanadagås"
            },
            {
              "value": "Row 32",
              "text": "Bläsand"
            },
            {
              "value": "Row 33",
              "text": "Gräsand"
            },
            {
              "value": "Row 34",
              "text": "Knipa"
            },
            {
              "value": "Row 35",
              "text": "Kricka"
            },
            {
              "value": "Row 36",
              "text": "Orre"
            },
            {
              "value": "Row 37",
              "text": "Sjöorre"
            },
            {
              "value": "Row 38",
              "text": "Storskrake"
            },
            {
              "value": "Row 39",
              "text": "Vigg"
            },
            {
              "value": "Row 40",
              "text": "Fiskmås"
            },
            {
              "value": "Row 41",
              "text": "Gråtrut"
            },
            {
              "value": "Row 42",
              "text": "Havstrut"
            }
          ]
        },
        {
          "type": "text",
          "name": "trikin",
          "visibleIf": "{antal_byte.Row 7} notempty",
          "title": "Hur många av det fällda vildsvinen trikintestades?",
          "description": "Vi vill jämföra resultat från denna enkät med det nationella trikintesterna, och därmed veta ungefär hur många vildsvin som trikintestas. ",
          "inputType": "number"
        },
        {
          "type": "boolean",
          "name": "bara_din",
          "visibleIf": "{skjutit?} = true",
          "title": "Jag har endast angett det byten jag SJÄLV skjutit/fällfånget i denna enkät. ",
          "description": "(Inte de skjutit/fällfångat av andra i mitt jaktlag)     ",
          "labelTrue": "Ja",
          "labelFalse": "Nej",
          "swapOrder": true
        }
      ]
    }
  ]
}