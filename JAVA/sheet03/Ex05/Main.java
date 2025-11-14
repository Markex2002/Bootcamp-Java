package JAVA.sheet03.Ex05;

public class Main {
    public static void main(String[] args) {

        Direccion direccion = new Direccion("Calle Lario", 420);
        Vivienda vivienda =  new Vivienda("Ronaldo", direccion);
        
        vivienda.mostrarInfo();
    }
}