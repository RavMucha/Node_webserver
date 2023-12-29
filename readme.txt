Do działania wymagany jest zainstalowany Node.js z https://nodejs.org/en - jeśli nie ma go na komputerze.

Aby uruchomić projekt należy w katalogu domowym za pomocą Terminala wykonać:
    1. npm install
        - instaluje potrzebne moduły Node.js
	2 ./pocketbase serve
        - uruchamia bazę danych na porcie 8090
    3. Zalogować się na http://127.0.0.1:8090/_/
        - dostęp do widoku bazy danych, defaultowy użytkownik i hasło to admin@agh.edu.pl
    4. W drugim oknie Terminala uruchomić serwer komendą: node server.mjs
    5. Aplikacja powinna być widoczna pod adresem: http://localhost:1987/ 