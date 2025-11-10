import java.util.Scanner;

public class CuentaAtras {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Dime un numero mayor que 0");
        int numero = sc.nextInt();

        while (numero >= 0) {
            System.out.println(numero);
            numero -= 1;
        }

        //Cerramos Escaner
        sc.close();
    }
}