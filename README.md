# Codex Finance TEST v0.7 – GitHub Pages / PWA

Dette er en **lokal testapp** basert på Codex Finance v0.6 med et YNAB-inspirert kontoregister, beløpsmerket dashboard og PWA-installasjon på hjemskjermen. Appen er ikke koblet til Supabase eller bank.

## Publiser via GitHub Pages

1. Opprett et nytt GitHub-repository, for eksempel `codex-finance-test`.
2. Pakk ut ZIP-filen. **Last opp innholdet i mappen**, ikke selve ZIP-filen. `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll` og `icons/` må ligge i roten av repositoriet.
3. Åpne **Settings → Pages → Build and deployment**. Velg **Deploy from a branch**, `main`, `/(root)` og **Save**.
4. Når GitHub Pages viser adressen, åpne den i Safari på iPhone eller Chrome på Android. Et prosjekt-repository får normalt URL `https://BRUKERNAVN.github.io/codex-finance-test/`.
5. På iPhone: åpne adressen i **Safari → Del → Legg til på Hjem-skjermen**. På Android: bruk **Installer app / Legg til på startskjermen** i Chrome.
6. Test appen med fiktive eksempeldata. Gå til **Mer → Data og sikkerhet → Last inn fiktive eksempeldata**.

GitHub Pages kan bruke noen minutter på første publisering. Når du oppdaterer filene, vil brukeren normalt få ny versjon ved ny innlasting, men en installert PWA kan ha gammel cache en stund. Den har en egen oppdateringsmelding når ny service worker er klar.

## Hva fungerer i denne testversjonen?

- Mobiltilpasset Oversikt, Budsjett, Kontoer, Sparing og Mer.
- SNN CSV-import med forhåndsvisning, duplikatkontroll og manuell mottakerkobling.
- Mottakerregister, kontoer/lån/eiendeler, budsjettområder, sparehistorikk og lokal JSON-import/-eksport.
- Konto med redigerbar hurtigregistrering på PC; mobil åpner separat registreringsskjema.
- Lokal IndexedDB-lagring, med fallback, og cached appskall for offline åpning **etter første innlasting på nett**.
- Generisk, midlertidig lommebokikon. Det godkjente originale Codex Development-logoassetet er **ikke** inkludert fordi originalfilen ikke er tilgjengelig; ikonet forsøker ikke å erstatte eller rekonstruere CD-logoen.

## Viktige begrensninger

- **Ingen innlogging eller sky**. Data fra én mobil er ikke synkronisert med PC eller en annen mobil. Bruk JSON-eksport/-import manuelt om nødvendig.
- **Ingen ekte banktilkobling eller Spareduellen**.
- **Test med fiktive data**. Siden på GitHub Pages er offentlig tilgjengelig, og appen har ingen autentisering eller ende-til-ende-kryptert lagring. Ikke publiser en eksportfil med private opplysninger på GitHub.
- Nettleseren kan slette lokale data ved sletting av nettleserdata, bruk av privat modus eller lagringsopprydding. Ta hyppige JSON-sikkerhetskopier.
- Kvitteringer og bilder lagres i nettleseren. Tilgjengelig lagringsplass varierer per enhet.
- Kontostatus «kontrollert» er en manuell markering, ikke bankavstemming.
- Rentekalkulatoren er et forenklet annuitetsanslag, ikke et banktilbud.
- Offline funksjonalitet krever at appen først er åpnet fra GitHub Pages mens den er på nett.
- Status: Chromium-testet lokalt; reell iPhone Safari/Android og GitHub Pages-publisering må testes av deg.

## Videre oppdateringer

Erstatt filene i samme GitHub-repository. Oppdater `CACHE` i `sw.js` ved nye programversjoner. Ta JSON-backup **før** større oppdateringer og test migrering før du bruker reelle data.

## Filer

```
index.html
manifest.webmanifest
sw.js
.nojekyll
icons/icon-192.png
icons/icon-512.png
icons/apple-touch-icon-180.png
README.md
```
