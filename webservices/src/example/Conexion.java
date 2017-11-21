package example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by estefania on 20/11/2017.
 */
public class Conexion {
    /**
     * Metodo que crea el conector de la base de datos
     * @return un conector para hacer llamadas a la BD
     */
    private Connection conectarADb()
    {
        Connection conn = null;
        try
        {
            //llamo al driver de Postgre (el primer import que muestro en el video)
            Class.forName("org.postgresql.Driver");
            //el string de conexion de la db el formato es el siguiente:
            //jdbc:postgresql://HOST//NOMBRE_DE_LA_DB
            String url = "jdbc:postgresql://localhost/viucab";
            //parametros de la conexion que basicamente es el usuario en mi caso es postgres y la clave es root
            // NO DEBEN DEJAR ESTO ASI POR DEFECTO
            conn = DriverManager.getConnection(url,"postgres", "postgres");
        }
        catch (ClassNotFoundException e)
        {
            e.printStackTrace();
            System.exit(1);
        }
        catch (SQLException e)
        {
            e.printStackTrace();
            System.exit(2);
        }
        return conn;
    }
}
