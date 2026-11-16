using System;
using System.Collections.Generic;
using System.Linq;

Console.WriteLine(string.Join(", ", Utils.TrovaDuplicati(new List<int> { 1, 2, 2, 3 })));
Console.WriteLine(string.Join(", ", Utils.TrovaDuplicati(new List<int> { 3, 4 })));

public static class Utils
{
    private static List<int> visti = new List<int>();

    public static List<int> TrovaDuplicati(List<int> lista)
    {
        var duplicati = new List<int>();
        foreach (var x in lista)
        {
            if (visti.Contains(x))
            {
                if (!duplicati.Contains(x))
                    duplicati.Add(x);
            }
            else
            {
                visti.Add(x);
            }
        }
        return duplicati;
    }
}
