package JAVA.sheet03.Ex04;

public class Main {
    public static void main(String[] args) {
    
        // Ejemplo de uso
        Producto p1 = new Producto("Manzanas", 0.75, 100);
        Producto p2 = new Producto("Leche", 1.20, 50);

        CarritoCompra carrito = new CarritoCompra();

        carrito.agregarProducto(p1, 3);
        carrito.agregarProducto(p2, 2);

        carrito.mostrarResumen();

        carrito.agregarProducto(p1, 2); // Suma unidades del mismo producto
        //carrito.eliminarProducto("Leche");

        carrito.mostrarResumen();
        
    }
}
