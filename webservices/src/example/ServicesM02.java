package example;

import com.google.gson.Gson;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.sql.*;
import java.util.ArrayList;

/**
 * Created by estefania on 10/11/2017.
 */
@Path("/Home")

public class ServicesM02 {

    Gson gson = new Gson();



    @GET

    @Path("/cargar1")

    @Produces("application/json")
    /**
     * @Param id
     * Devuelve todos los Videos dado un id
     */
    public String obtenerVideo (@QueryParam("id")  String horainicio
                                    ){

        String query = "select * from video";



        try{
            Connection conn = conectarADb();
            //Lista del objeto video para almacenar todos los videos a cargar
            ArrayList<Video> listaVideos= new ArrayList<>();
            Statement st = conn.createStatement();
            ResultSet rs =  st.executeQuery(query);

            while(rs.next()){
                Video resultado = new Video();
                resultado.setId(rs.getInt("vid_id"));
                resultado.setNombre(rs.getString("vid_titulo"));
                listaVideos.add(resultado);

            }

            return gson.toJson(listaVideos);

        } catch (Exception e) {

            return e.getMessage();

        }


    }






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
