package JAVA.sheet03.Ex04;

import java.util.ArrayList;
import java.util.List;

public class CarritoCompra {
    private class LineaCarrito{
        //Atributos
        private final Producto producto;
        private int unidades;

        //Constructores
        public LineaCarrito(Producto producto, int unidades){
            this.producto = producto;
            this.unidades = unidades;
        }

        //GETTERS AND SETTERS
        public Producto getProducto() {
            return producto;
        }
        public int getUnidades() {
            return unidades;
        }
        public void setUnidades(int unidades) {
            this.unidades = unidades;
        }

        //METODOS
        public double subtotal(){
            return producto.getPrecio() * unidades;
        }
    }

    //Atributos
    private List<LineaCarrito> lineas = new ArrayList<>();

    //GETTERS AND SETTERS
    public List<LineaCarrito> getLineas() {
        return lineas;
    }

    //Metodos
    public void agregarProducto(Producto producto, int unidades){
        for (LineaCarrito linea : lineas) {
            if (linea.getProducto().equals(producto)) {  
                linea.setUnidades(linea.getUnidades() + unidades);
                return;
            }
        }
        
        lineas.add(new LineaCarrito(producto, unidades));
    }

    public void mostrarResumen(){
        for (LineaCarrito linea : lineas) {
            System.out.println(
                linea.producto.getNombre() + " - " + 
                linea.unidades + " x " + linea.producto.getPrecio() + 
                " = " + linea.subtotal()
            );
        }
        System.out.println();
    }
}