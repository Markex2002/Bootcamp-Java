import java.util.Scanner;

public class SumaNumeros {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int total = 0;

        for (int i = 0; i < 100; i++) {
            total += i;
            System.out.println(total + " + " + i);
        }

        System.out.println("Total = " + total);

        //Cerramos Escaner
        sc.close();
    }
}