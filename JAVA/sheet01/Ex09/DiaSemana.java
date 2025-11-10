public class DiaSemana {
    public static void main(String[] args) {
        int numero = 1;

        switch (numero) {
            case 1:
            System.out.println("Hoy es Lunes!");
                break;
            
            case 2:
            System.out.println("Hoy es Martes!");
                break;

            case 3:
            System.out.println("Hoy es Miercoles!");
                break;
            
            case 4:
            System.out.println("Hoy es Jueves!");
                break;

            case 5:
            System.out.println("Hoy es Viernes!");
                break;

            case 6:
            System.out.println("Hoy es Sabado!");
                break;

            case 7:
            System.out.println("Hoy es Domingo!");
                break;

            default:
            System.out.println("Numero no válido");
                break;
        }
    }
}