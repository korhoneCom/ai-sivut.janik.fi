# ai-sivut.janik.fi

Esimerkkisivusto IT-konsultoinnin mallilistauksen pohjaksi. Rakennettu puhtaasti
HTML:llä, CSS:llä ja JavaScriptillä — ei build-vaihetta, ei riippuvuuksia.

**Esittelyyritys:** Kangasalan Konehuolto Oy (fiktiivinen).

## Tiedostot

| Tiedosto | Sisältö |
|---|---|
| `index.html` | Etusivu: sankkari, palvelut, prosessi, yhteystiedot |
| `styles.css` | Kaikki tyylit (muuttujat tiedoston alussa) |
| `script.js` | Mobiilivalikko, vuosiluku, lomakkeen validointi |
| `favicon.svg` | Selavicon |
| `404.html` | 404-sivu |
| `CNAME` | GitHub Pages -mukautettu verkkotunnus |

## Julkaisu GitHub Pagesillä

Repo on julkinen, joten Pages toimii ilman maksullista suunnitelmaa.

1. avaa **https://github.com/korhoneCom/ai-sivut.janik.fi/settings/pages**
2. **Source** → `Deploy from a branch`
3. **Branch** → `main` ja hakemisto `/ (root)` → **Save**
4. Sivusto ilmestyy osoitteeseen `https://korhonecom.github.io/ai-sivut.janik.fi/`

### Oma verkkotunnus

`CNAME`-tiedosto on jo valmiina. Lisää DNS-palveluusi
(CNAME-tietue):

```
ai-sivut.janik.fi   CNAME   korhonecom.github.io
```

Huom: jos `janik.fi`-alueella on jo käytössä wildcard-tietue,
varmista että tämä CNAME menee sen edelle.

## Muokkaaminen

Kaikki teksti on suoraan `index.html`-tiedostossa. Värit, fontit ja
mittasuhde löytyvät `styles.css`:n alun `:root`-lohkosta.

| Määre | Oletus | Mihin |
|---|---|---|
| `--accent` | `#14604A` | Pääväri (vihreä) |
| `--hi` | `#C9772A` | Huomioväri (oranssi) |
| `--paper` | `#F6F3EC` | Taustapohja |
| `--ink` | `#10201C` | Teksti |
| `--font-head` | Archivo | Otsikot |
| `--font-body` | Public Sans | Leipäteksti |

## Yhteydenottolomake

Lomake on valmiitosava, mutta **ei lähetä minnekään** — se näyttää
viestin ja pyytää soittamaan. Todelliseen käyttöön se kytketään johonkin
seuraavista:

- Formspree / Netlify Forms (helppo, ei omaa palvelinta)
- Oma palvelinendpoint (esim. `POST /api/yhteydenotto`)
- Sähköpostiin perustuva ratkaisu (esim. SMS/EBS-rajapinta)

## Huomioitavaa

- Fontit (Archivo, Public Sans) ladataan Google Fontsista. Ilman
  internetyhteyttä sivusto toimii järjestelmävarmuuskopiolla.
- Sivusto ei sisällä valokuvia — kuvat kannattaa lisätä erikseen
  `images/`-kansioon ja viitata niihin suhteellisella polulla.
