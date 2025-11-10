public class OperadoresLogicos {
    public static void main(String[] args) {

        boolean a = true;
        boolean b = false;

        // && : devuelve true solo si ambos valores son verdaderos
        boolean resultadoAND = a && b;
        System.out.println("Resultado de (a && b): " + resultadoAND);

        // || : devuelve true si al menos uno de los valores es verdadero
        boolean resultadoOR = a || b;
        System.out.println("Resultado de (a || b): " + resultadoOR);

        // ! : invierte el valor booleano
        boolean resultadoNOT = !a;
        System.out.println("Resultado de (!c): " + resultadoNOT);

    }
}