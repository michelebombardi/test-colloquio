-- Struttura e dati di prova (SQL Server). Non serve modificarli.

CREATE TABLE Clienti (
    Id   INT PRIMARY KEY,
    Nome NVARCHAR(100) NOT NULL
);

CREATE TABLE Ordini (
    Id        INT PRIMARY KEY,
    ClienteId INT NULL,          -- NULL = ordine fatto da un ospite senza account
    Data      DATE NOT NULL,
    Totale    DECIMAL(10, 2) NOT NULL
);

CREATE TABLE RigheOrdine (
    Id       INT PRIMARY KEY,
    OrdineId INT NOT NULL,
    Prodotto NVARCHAR(100) NOT NULL,
    Quantita INT NOT NULL,
    Prezzo   DECIMAL(10, 2) NOT NULL
);

INSERT INTO Clienti (Id, Nome) VALUES
    (1, 'Rossi'),
    (2, 'Bianchi'),
    (3, 'Verdi');

INSERT INTO Ordini (Id, ClienteId, Data, Totale) VALUES
    (10, 1,    '2025-03-10', 100.00),
    (11, 1,    '2025-06-02',  50.00),
    (12, 3,    '2025-09-15',  80.00),
    (13, NULL, '2025-10-01',  30.00),
    (14, 3,    '2024-12-20',  40.00);

INSERT INTO RigheOrdine (Id, OrdineId, Prodotto, Quantita, Prezzo) VALUES
    (100, 10, 'Anello',     1, 60.00),
    (101, 10, 'Collana',    1, 30.00),
    (102, 10, 'Confezione', 1, 10.00),
    (103, 11, 'Bracciale',  1, 50.00),
    (104, 12, 'Orecchini',  2, 40.00),
    (105, 13, 'Ciondolo',   1, 30.00),
    (106, 14, 'Spilla',     1, 40.00);
