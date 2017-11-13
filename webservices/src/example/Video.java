package example;

/**
 * Created by estefania on 10/11/2017.
 */
public class Video {

    private int id;
    private String nombre;
    private String fecha;
    private String visitas;

    public Video() {

    }

    public Video(int id, String nombre, String fecha, String visitas) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.visitas = visitas;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getVisitas() {
        return visitas;
    }

    public void setVisitas(String visitas) {
        this.visitas = visitas;
    }
}
