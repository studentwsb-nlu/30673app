# 30673 app

Aplikacja do wizualizacji długoterminowych trendów ekonomicznych w Polsce, inspirowana 30673 app. Pozwala na analizę relacji złota, nieruchomości i indeksu WIG w czasie.

## Funkcjonalności
- Wykres: Złoto do PLN
- Wykres: Złoto do nieruchomości
- Wykres: WIG do nieruchomości
- Import danych z plików CSV
- API REST do pobierania danych
- Prosty frontend z wykresami (Chart.js)

## Struktura projektu
- `backend/` – serwer Node.js/Express, API, obsługa bazy danych PostgreSQL
- `frontend/` – pliki HTML i JS do wizualizacji danych (Chart.js)
- `data/` – pliki CSV z danymi historycznymi
- `import/` – skrypt do importu danych z CSV do bazy
- `db/` – plik SQL z definicją schematu bazy

## Wymagania
- Node.js
- PostgreSQL (możesz użyć lokalnie lub przez Docker Compose)

## Instalacja

```bash
git clone <repo>
cd 30673app
npm install
```

### Konfiguracja bazy danych
Możesz uruchomić lokalną bazę przez Docker Compose:

```bash
cd frontend
docker-compose up -d
```

Lub skonfiguruj własną bazę PostgreSQL i utwórz plik `.env` w katalogu głównym:

```
DB_HOST=localhost
DB_USER=devuser
DB_PASS=devpass
DB_NAME=localdev
```

Załaduj schemat bazy:

```bash
psql -h localhost -U devuser -d localdev -f db/schema.sql
```

## Import danych

```bash
node import/importData.js
```

## Uruchomienie backendu

```bash
npm start
```

Serwer API będzie dostępny na `http://localhost:3000`.

## Frontend
Otwórz plik `frontend/index.html` w przeglądarce. Wykresy pobierają dane z API backendu.

Możesz też skonfigurować serwer www (np. NGINX), aby serwował frontend i proxy'ował `/api/*` do portu 3000.

## API
- `GET /api/gold-pln` – dane złota w PLN
- `GET /api/gold-vs-realestate` – relacja złota do nieruchomości
- `GET /api/wig-vs-realestate` – relacja WIG do nieruchomości

## Licencja
Projekt demonstracyjny do celów edukacyjnych.