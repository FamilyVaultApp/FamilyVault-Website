# Strona Zespołu Projektowego FamilyVault

Repozytorium zawiera kod źródłowy strony internetowej Zespołu numer 1 pracującego nad aplikacją FamilyVault. Strona została stworzona w ramach projektu zespołowego.

## O Projekcie FamilyVault

FamilyVault to aplikacja mobilna zaprojektowana z myślą o bezpiecznej komunikacji wewnątrz rodziny. 
Jej głównym celem jest zapewnienie prywatności i ochrony danych użytkowników poprzez szyfrowanie end-to-end (E2EE). 
Aplikacja oferuje podstawowe funkcje komunikacyjne, takie jak Czat, wysyłanie wiadomości głosowych i zdjęć, Listę Zadań, oraz Szufladę - bezpieczne miejsce na zdjęcia i dokumenty, eliminując jednocześnie elementy rozpraszające, śledzenie i reklamy.

## Cel Strony Internetowej

Ta strona internetowa pełni rolę wizytówki projektu FamilyVault oraz zespołu odpowiedzialnego za jego realizację. Prezentuje ona:
*   Główne założenia i funkcje aplikacji FamilyVault.
*   Informacje o zespole projektowym.
*   Harmonogram prac nad projektem.
*   Raporty semestralne członków zespołu.
*   Dokumentację.

## Technologie

Strona została zbudowana przy użyciu następujących technologii:

*   **React**: Biblioteka JavaScript do budowy interfejsów użytkownika.
*   **TypeScript**: Nadzbiór JavaScriptu dodający statyczne typowanie.
*   **Vite**: Narzędzie do budowy projektów front-endowych, zapewniające szybkie uruchamianie i budowanie.
*   **Sass**: Preprocesor CSS.
*   **Fluent UI React Icons**: Biblioteka ikon.
*   **Bootstrap**: Framework CSS (wykorzystywany częściowo).

## Uruchomienie Projektu

Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

1.  Sklonuj repozytorium:
    ```sh
    git clone https://github.com/FamilyVaultApp/FamilyVault-Website.git
    ```
2.  Przejdź do katalogu projektu:
    ```sh
    cd FamilyVault-Website 
    ```
3.  Zainstaluj zależności:
    ```sh
    npm install
    ```
4.  Uruchom serwer deweloperski:
    ```sh
    npm run dev
    ```
    Aplikacja będzie dostępna pod adresem `http://localhost:5173` (lub innym portem wskazanym przez Vite).

## Skrypty NPM

Dostępne skrypty zdefiniowane w pliku [`package.json`](package.json):

*   `npm run dev`: Uruchamia aplikację w trybie deweloperskim.
*   `npm run build`: Buduje aplikację do wersji produkcyjnej.
*   `npm run buildWithBase`: Buduje aplikację z określoną ścieżką bazową (przydatne przy wdrażaniu na GitHub Pages).
*   `npm run lint`: Uruchamia analizę kodu ESLint.
*   `npm run preview`: Uruchamia lokalny serwer do podglądu zbudowanej aplikacji.

