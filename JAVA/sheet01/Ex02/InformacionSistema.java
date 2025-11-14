public class InformacionSistema {
    public static void main(String[] args) {

        System.out.println("Marco" + "\n" +
                           System.getProperty("os.name") + "\n" +
                           System.getProperty("java.version"));
    }
}