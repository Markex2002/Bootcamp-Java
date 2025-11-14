package JAVA.sheet03.Ex01;

public class Producto {
    //Atributos
    private String nombre;
    private double precio;
    private int stock;


    //Constructores
    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public Producto(){}


    //Getters and Setters
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public double getPrecio() {
        return precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }



    //Metodos
    public void mostrarDatos(){
        System.out.println(
            "\nNombre del Producto: " + nombre + 
            "\nPrecio del producto: " + precio +
            "\nStock del Producto: " + stock
        );
    }






    
}
