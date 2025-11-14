package JAVA.sheet03.Ex02;

public class Main {
    public static void main(String[] args) {

        Producto p1 = new Producto("Platanos", 1, 200);
        Producto p2 = new Producto("Manzanas", 0.5, 100);
        Producto p3 = new Producto("Pepinillos", 99);

        p1.mostrarDatos();
        p2.mostrarDatos();
        p3.mostrarDatos();
    }   
}