# Kundemøte

- Oppgave 1
  Tegne skjermbilder - ca to sider
  StudentAdmin GetAcademy (CQRS)
  kommando - registrere ny hendelse andre spørringer basert på de hendelsene
  eks - student har søkt på kurs + har startet + avslutte(fullført/ikke) - betaling
  data - info om student - hvor kommer de fra i GET -
  lister - alle som har startet kurs osv dato filtrering
  sider per student

      Skjermbilder pluss plan

      
      


  Jeg har sett gjennom koden deres en gang til, siden det ble mest team 2 i undervisningen i går. Her er noen tilbakemeldinger:

  * model.ts - strukturen her er ikke slik vi ønsker. Tanken er at det ikke er noe annet i systemet enn de tre hendelsesstypene. Det er ikke slik at en student har en liste med kurs eller at vi trenger en liste med semestre. Det er kun det som dere har i state.ts som skal brukes - men hver sin hendelsestype under der.
  * render.ts - i list ville jeg lagd en komponent for hele listen - den får da alle sine data inn via props. inne i seg kan den gjøre det som dere gjør nå med <candidate-list-component>
  som jeg kom frem til i undervisningen i går, så tror jeg det er best å gjøre som i boka, lage get og set på data som skal inn i komponenten. Og at set der kaller setAttribute "fra innsiden"
  * candidate-component.ts ser fin ut
  * candidate-list-component.ts kunne vel loopet gjennom og laget en candidate-component per kandidat?
