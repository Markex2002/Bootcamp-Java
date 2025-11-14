package JAVA.sheet03.Ex03;

public class Main {
    public static void main(String[] args) {
        //Cuando no se define ningún constructor, Java crea automáticamente 
        //un constructor por defecto equivalente a:
        //  public Alumno() {}
        //Por eso new Alumno() funciona.
        
        Alumno a1 = new Alumno();

        //Como hemos definido el constructor vacío, ahora new Alumno() vuelve a ser válido.
    }
}
