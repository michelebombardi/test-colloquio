-- Query 1: fatturato 2025 per cliente
SELECT c.Nome, SUM(o.Totale) AS Fatturato
FROM Clienti c
JOIN Ordini o ON o.ClienteId = c.Id
JOIN RigheOrdine r ON r.OrdineId = o.Id
WHERE YEAR(o.Data) = 2025
GROUP BY c.Nome;

-- Query 2: clienti che non hanno mai ordinato
SELECT Nome
FROM Clienti
WHERE Id NOT IN (SELECT ClienteId FROM Ordini);
