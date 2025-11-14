import java.util.Scanner;

public class SaludoPersonalizado {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Dime tu nombre: ");
        String nombre = sc.nextLine();
        System.out.println("Dime tu edad");
        int edad = sc.nextInt();

        System.out.println("Hola " + nombre + ". Tienes " + edad + " años.");
        
        //Cerramos Escaner
        sc.close();
    }
}