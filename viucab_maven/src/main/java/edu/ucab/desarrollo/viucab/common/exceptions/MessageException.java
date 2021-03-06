package edu.ucab.desarrollo.viucab.common.exceptions;

/**
 * Created by Daniel on 25/11/2017. creada por M011
 */
public class MessageException extends Exception{

    private int _code = 999;
    private String _clase;
    private String _metodo;

    public MessageException(Exception error, String clase, String metodo) {
        super(error);
        _clase = clase;
        _metodo = metodo;
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder(_code);
        str.append(_clase);
        str.append(_metodo);
        str.append(super.toString());
        return str.toString();
    }

}
