package JAVA.sheet03.Ex05;

public class Vivienda {
    //Atributos
    private String propietario;
    private Direccion direccion;

    //Constructor
    public Vivienda(String propietario, Direccion direccion) {
        this.propietario = propietario;
        this.direccion = direccion;
    }

    //GETTERS AND SETTERS
    //METODOS
    public void mostrarInfo(){
        System.out.println("Nombre Propietario: " + propietario
            + " Direccion: " + direccion.getCalle() + ", nº: " + direccion.getNumero()
        );
    }
}
